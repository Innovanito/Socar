import React, { useState } from "react";
import vehiclesData from "./vehiclesData"; // assuming data is imported from a separate file
import VehicleCard from "./VehicleCard"; // assuming VehicleCard component is created in a separate file
import VehicleCarousel from "./VehicleCarousel";

const ListPage = () => {
  // state for the number of vehicles shown
  const [numVehicles, setNumVehicles] = useState(5);

  // function to increment number of vehicles shown when 'More' button is clicked
  const handleClick = () => {
    setNumVehicles(numVehicles + 5);
  };

  return (
    <div className="max-w-md flex justify-center flex-col">
      <h1 className=" text-blue-700 text-3xl text-center p-4 ">차량 리스트</h1>
      <h1 className=" text-blue-300 text-2xl p-4 ">특가 차량</h1>
      {/* 여기에서 props를 요구사항에 잘 맞게 전달해주기 */}
      {/* <VehicleCarousel  /> */}
      <h1 className=" text-blue-300 text-2xl p-4 ">모든 차량</h1>
      <div className=" flex-col w-auto items-center justify-center">
        {/* map through vehiclesData to show VehicleCard components */}
        {vehiclesData.slice(0, numVehicles).map((vehicle) => (
          <VehicleCard
            key={vehicle.key}
            image={vehicle.image}
            make={vehicle.make}
            model={vehicle.model}
            price={vehicle.price}
            regionGroups={vehicle.regionGroups}
            distance={
              vehicle.distance >= 10000
                ? `${Math.floor(vehicle.distance / 10000)}만`
                : vehicle.distance >= 1000
                ? `${Math.floor(vehicle.distance / 1000)}천`
                : vehicle.distance
            }
          />
        ))}
      </div>
      {/* show 'More' button if there are remaining vehicles */}
      {numVehicles < vehiclesData.length && (
        <button
          className=" p-3"
          onClick={handleClick}>
          더보기
        </button>
      )}
    </div>

  );
};

export default ListPage;
