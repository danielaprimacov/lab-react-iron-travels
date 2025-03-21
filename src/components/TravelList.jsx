import travelPlansData from "../assets/travel-plans.json";
import FavoritesList from "./FavoritesList";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  return (
    <div className="trip-content">
      <div className="travel-plan">
        <TravelPlanCard plan={travelPlansData} />
      </div>
      <div className="favorites-list">
        <h2>Favorites</h2>
        <FavoritesList />
      </div>
    </div>
  );
}

export default TravelList;
