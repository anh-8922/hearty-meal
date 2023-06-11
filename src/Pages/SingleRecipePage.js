import ItemCard from "../Components/ItemCard";
import SecondLayout from "../Layouts/SecondLayout";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useFetchCards from "../CustomHook/FetchData";
import '../Styles/page.css';

export default function SingleRecipePage() {
  const { id } = useParams();
  const { itemCard, isItemLoading } = useFetchCards();

  if (isItemLoading) {
    return <Spinner />;
  }

  const selectedRecipe = itemCard.find((item) => item.id === id);

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  const { itemImage, itemIngredients, itemInstructions, itemTitle } = selectedRecipe;

  return (
    <SecondLayout>
      <div className="single-page">
        <ItemCard
          itemTitle={itemTitle}
          itemImage={itemImage}
          itemIngredients={itemIngredients}
          itemInstructions={itemInstructions}
        />
        <Link to="/recipe">
          <button style={{
                        fontSize:'1.5rem', 
                        backgroundColor:'#D4C79E', 
                        marginLeft:'5rem', 
                        padding:'0.8rem',
                        borderRadius:'0.5rem'}}>Back to Recipes</button>
        </Link>
      </div>
    </SecondLayout>
  );
}
