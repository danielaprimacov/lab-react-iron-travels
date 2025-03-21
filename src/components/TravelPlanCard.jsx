import { useState } from "react";

function TravelPlanCard({ plan }) {
  const [travelPlan, setTravelPlan] = useState(plan);

  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];

  const deleteTravel = (travelId) => {
    const travelPlans = travelPlan.filter((trip) => trip.id !== travelId);
    setTravelPlan(travelPlans);
  };

  const addToFavorite = (travel) => {};

  return (
    <>
      {travelPlan.map((trip) => (
        <div key={trip.id} className="trip">
          <img src={trip.image} alt={trip.destination} />
          <div className="trip-details">
            <h3>
              {trip.destination} ({trip.days} Days)
            </h3>
            <p className="trip-description">{trip.description}</p>
            <p>
              <b>Price</b>: {trip.totalCost} €
            </p>
            <div className="labels">
              {trip.totalCost <= 350 ? (
                <div className="great-deal">Great Deal</div>
              ) : (
                ""
              )}
              {trip.totalCost >= 1500 ? (
                <div className="premium-deal">Premium</div>
              ) : (
                ""
              )}
              {trip.allInclusive ? (
                <div className="all-inclusive-deal">All-inclusive</div>
              ) : (
                ""
              )}
            </div>
            <div className="actions">
              <div className="delete-btn" onClick={() => deleteTravel(trip.id)}>
                Delete
              </div>
              <div
                className="add-to-favorite"
                onClick={() => addToFavorite(trip)}
              >
                ♡
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TravelPlanCard;
