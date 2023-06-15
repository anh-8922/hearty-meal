import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import useFetchCards from "../CustomHook/FetchData";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import "../Styles/component.css";

export default function MainRecipes() {
  const { itemCard, isItemLoading } = useFetchCards();
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/singlerecipepage/${id}`);
  };

  if (isItemLoading) {
    return <Spinner />;
  }

  const mainCard = itemCard.filter(
    (item) => item.itemCategory.toLowerCase() === "spot"
  );

  return (
    <div className="kitchen-carousel">
      <Carousel>
        {mainCard.map((item) => {
          const { id, itemImage, itemTitle } = item;
          return (
            <Carousel.Item key={id} id="carousel-item">
              <Image id="carousel-img" src={itemImage} alt={itemTitle} />
              <Carousel.Caption>
                <h3>{itemTitle}</h3>
                <button onClick={() => handleReadMore(id)}>Read More</button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
