import imageMap from "../utils/imageMap";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, id } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={imageMap[Number(id)]} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ratings</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
