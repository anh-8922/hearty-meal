
import { useState, useEffect, useCallback, useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';
import { Client } from '../Components/Client';
import ItemCard from '../Components/ItemCard';
import Spinner from '../Components/Spinner';
import MainLayout from '../Layouts/MainLayout';

export default function SearchPage() {
  const { searchQuery } = useContext(SearchContext);
  const [isItemLoading, setIsItemLoading] = useState(false);
  const [itemCard, setItemCard] = useState([]);

  const getRecipeItems = useCallback(async () => {
    setIsItemLoading(true);

    try {
      let response;
      if (searchQuery.trim() !== '') {
        response = await Client.getEntries({
          content_type: 'recipeBook',
          query: searchQuery,
        });
      } 

      const responseData = response.items;
      console.log(responseData);

      if (responseData) {
        setItemCard(responseData);
      } else {
        setItemCard([]);
      }
    } catch (error) {
      console.log(error);
      setItemCard([]);
    } finally {
      setIsItemLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    getRecipeItems();
  }, [getRecipeItems, searchQuery]);

  return (
    <MainLayout>
        <div>
      {isItemLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', marginLeft:'8rem',marginRight:'3rem', gap:'4rem'}}>
          {itemCard.map((item, index) => {
            const {fields } = item;
            const itemTitle = fields?.title || '';
            const itemInstructions = fields?.instructions || '';
            const itemIngredients = fields?.ingredients || '';
            const itemImage = fields?.image?.fields?.file?.url || '';

            return (
              <ItemCard
                key={index}
                itemTitle={itemTitle}
                itemImage={itemImage}
                itemIngredients={itemIngredients}
                itemInstructions={itemInstructions}
                
              />
            );
          })}
        </div>
      )}
    </div>
    </MainLayout>
    
  );
}