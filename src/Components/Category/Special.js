
import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";

export default function SpecialRecipes() {
  const { itemCard, isItemLoading } = useFetchCards();
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/singlerecipepage/${id}`);
  };

  if (isItemLoading) {
    return <Spinner />;
  }

  const specialRecipeCard = itemCard.filter(
    (item) => item.itemCategory.toLowerCase() === "special recipes"
  );

  return (
    <div style={{display:'flex', gap:'2rem', flexWrap:'wrap'}}>
      {specialRecipeCard.map((item) => {
        const { id, itemImage, itemTitle } = item;
        return (
          <SummaryCard
            key={id}
            itemTitle={itemTitle}
            itemImage={itemImage}
            onHandleClick={() => handleReadMore(id)}
          />
        );
      })}
    </div>
  );
}