import imageMap from "../utils/imageMap";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, id } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={imageMap[Number(id)]} />
      {/* <h3>{name}</h3>
      <p>
        {avgRating} ratings - {sla.slaString}
      </p>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4> */}

      <h3 className="res-name">{name}</h3>
      <p className="res-rating">
        ⭐ {avgRating} • {sla.slaString}
      </p>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="res-cost">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
