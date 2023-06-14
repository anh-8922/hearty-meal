
import AddShoppingList from '../Components/AddShoppingList';
import useFetchCards from "../CustomHook/FetchData";
import Spinner from "../Components/Spinner";
import "../Components/Category/category.css";
import Linkify from 'react-linkify';
import MainLayout from "../Layouts/MainLayout";

export default function UserPage() {

  const { itemCard, isItemLoading } = useFetchCards();

  const CustomLinkify = ({ children }) => (
    <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
      <a href={decoratedHref} 
         key={key} 
         target="_blank" 
         rel="noopener noreferrer"
         style={{ textDecoration: 'none' }} >
        {decoratedText}
      </a>
    )}>
      {children}
    </Linkify>
  );

  if (isItemLoading) {
    return <Spinner />;
  }

  const appetizerCard = itemCard.filter(
    (item) =>
              item.itemCategory.toLowerCase() === "breakfast" ||
              item.itemCategory.toLowerCase() === "lunch"
  );

  return(
    <MainLayout>
      <div className="UserPage">
        <div>
        <div className="my-recipes">My Recipe</div>
        <div className="category-group">
                    {appetizerCard.map((item) => {
                      const { id, itemImage, itemTitle, itemIngredients, itemInstructions } = item;
                      return (
                      
                                <div key={id} className="item-card" style={{backgroundColor: '#D4C79E', width:'70%', borderRadius:'1rem'}}>
                                      <h1>{itemTitle}</h1>
                                      <div className="group-1">
                                        <p>
                                          <img src={itemImage} alt={itemTitle} style={{ width: '400px', height: '300px' }} />
                                        </p>
                                        <ul>
                                          {itemIngredients.map((ingredient, index) => (
                                            <li key={index} 
                                                className="dot-list"><span>{ingredient}</span>

                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', fontSize: '1rem', padding: '1rem 2rem',   }}>
                                          <CustomLinkify >{itemInstructions}</CustomLinkify>
                                        </pre>
                                      </div>
                                </div>

                                          
                      );
                    })}
        </div>
        </div>
        <div>
          <div>Favourites</div>
          <div><AddShoppingList/></div>
        </div>
      </div>
    </MainLayout>
  )
  
  
}

//<h3>@{post.author.name}</h3>