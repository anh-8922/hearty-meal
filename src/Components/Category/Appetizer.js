
import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import "./category.css";

export default function Appetizer() {
  const { itemCard, isItemLoading } = useFetchCards();
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/singlerecipepage/${id}`);
  };

  if (isItemLoading) {
    return <Spinner />;
  }

  const appetizerCard = itemCard.filter(
    (item) => item.itemCategory.toLowerCase() === "appetizer"
  );

  return (
    <div className="category-group">
      {appetizerCard.map((item) => {
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