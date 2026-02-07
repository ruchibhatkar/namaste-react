import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams(); //To extract the parameters from URL

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines = [],
    costForTwoMessage,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1 className="menu-title">{name}</h1>
        <p className="menu-subtitle">
          {cuisines.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      <div className="menu-card">
        <h2 className="menu-section-title">Menu</h2>

        {itemCards.map((item) => (
          <div className="menu-item" key={item.card.info.id}>
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">₹{item.card.info.price / 100}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
