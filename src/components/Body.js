import RestaurantCard from "../components/RestaurantCard";
import resList from "../utilis/mockData";
import { useState } from "react";

const Body = () => {
  const [listRes, setlistRes] = useState(resList);
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            console.log(listRes);
            const filteredList = listRes.filter(
              (res) => res.card.card.info.avgRating > 4,
            );
            setlistRes(filteredList);
          }}
        >
          filter Top Restaurant
        </button>
      </div>
      <div className="res-container">
        {listRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
