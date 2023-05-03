import React from "react";

const VehicleCard = ({ image, make, model, price, distance,regionGroups }) => {
  price =  Math.ceil(price/10)*10;
  
  return (
    <div className=" bg-blue-100 shadow-md rounded-md p-4 m-3 border-solid">
      <img src={image} alt={`${make} ${model}`} />
      <div className="mt-2">
        <span className="font-bold text-xl">{`${model}`}</span>
        <p className="text-gray-600">{`${price
          .toFixed()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}원</p>
        <div className=" flex flex-row">
          <span >{`${make}`} </span> |
          <span> {distance} KM </span> | 
          {regionGroups.map((region, index) => (
            <span key={region}>
              {region}
              {index === regionGroups.length - 1 ? null : ', '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
