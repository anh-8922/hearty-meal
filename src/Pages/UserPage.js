import AddShoppingList from '../Components/AddShoppingList';
import useFetchCards from "../CustomHook/FetchData";
import Spinner from "../Components/Spinner";
//import "../Components/Category/category.css";
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
      <div style={{
        backgroundColor: 'whitesmoke',
        width: '85%',
        height: '118rem',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '2rem',
        borderRadius: '0.7rem'
    }}>
      <div className="my-recipe">
          
          {appetizerCard.map((item) => {
            const { id, itemImage, itemTitle, itemIngredients, itemInstructions } = item;
            return (
                      <div>
                          <h1>My Recipes</h1>
                          <div key={id} className="myrecipe-card">
                                
                                <h1>{itemTitle}</h1>
                                <div className="myrecipe-body">
                                  <p>
                                    <img src={itemImage} alt={itemTitle} style={{ width: '25rem', height: '17rem' }} />
                                  </p>
                                  <ul>
                                    {itemIngredients.map((ingredient, index) => (
                                      <li key={index} 
                                          className="dot-list"><span style={{fontSize: '15px'}}>{ingredient}</span>

                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'Raleway', fontSize: '15px', padding: '1rem 2rem',   }}>
                                    <CustomLinkify >{itemInstructions}</CustomLinkify>
                                  </pre>
                                </div>
                          </div>
                      </div>
                     

                                
            );
          })}
          
        </div>  
        <div  style={{margin: '1rem'}}><AddShoppingList/></div>
      </div>

    </MainLayout>
  )
  
  
}

//<h3>@{post.author.name}</h3>