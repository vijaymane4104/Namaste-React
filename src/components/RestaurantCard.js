import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (prop) => {
  const { resData } = prop;
  const { name, cuisines, avgRating, cloudinaryImageId } =
    resData?.card.card.info;
  const { deliveryTime } = resData?.card.card.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
