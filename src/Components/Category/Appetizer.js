
import useFetchCards from "../../CustomHook/FetchData";
import SummaryCard from "../SummaryCard";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";

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
    <div style={{display:'flex', gap:'2rem', flexWrap:'wrap'}}>
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