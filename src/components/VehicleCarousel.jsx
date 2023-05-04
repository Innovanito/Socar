import React, { useRef, useState } from 'react';
import VehicleCard from './VehicleCard';
import vehiclesData from './vehiclesData';

const VehicleCarousel = () => {
  // set the initial active vehicle index to 0
  const [activeIndex, setActiveIndex] = useState(0);
  const [vehicles, setVehicles] = useState(vehiclesData)
  const slide = useRef()

  // function to handle left arrow click
  const handleLeftClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1));
    console.log('leftclick')

  };

  // function to handle right arrow click
  const handleRightClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === vehicles.length - 1 ? 0 : prevIndex + 1));
    console.log('rightclick')
    // slide.style.transform = 'translate(-128px)'
    console.log('slide: ', slide)
  };

  // function to handle touch start
  const handleTouchStart = (e) => {
    // get the initial touch position
    const initialTouchX = e.touches[0].clientX;
    // add touch move and touch end event listeners
    e.target.addEventListener('touchmove', handleTouchMove);
    e.target.addEventListener('touchend', handleTouchEnd);


    // function to handle touch move
    function handleTouchMove(e) {
      // get the distance moved
      const touchDistance = initialTouchX - e.touches[0].clientX;

      console.log('touchDisdance: ', touchDistance);
      // if the distance moved is greater than 50, then set the active index accordingly
      if (touchDistance > 50) {
        handleRightClick();
        // remove event listeners after the swipe
        e.target.removeEventListener('touchmove', handleTouchMove);
        e.target.removeEventListener('touchend', handleTouchEnd);
      } else if (touchDistance < -50) {
        handleLeftClick();
        // remove event listeners after the swipe
        e.target.removeEventListener('touchmove', handleTouchMove);
        e.target.removeEventListener('touchend', handleTouchEnd);
      }
    }

    // function to handle touch end
    function handleTouchEnd(e) {
      // remove event listeners after the swipe
      e.target.removeEventListener('touchmove', handleTouchMove);
      e.target.removeEventListener('touchend', handleTouchEnd);
    }
  };

  return (  
    <div className=' overflow-hidden'>
      <div
        ref={slide}
        className=" flex flex-row w-32"
        onTouchStart={handleTouchStart}
      >
        {vehicles.map((vehicle, index) => (
          <VehicleCard
            key={vehicle.key}
            image={vehicle.image}
            make={vehicle.make}
            model={vehicle.model}
            price={vehicle.price}
            regionGroups={vehicle.regionGroups}
            carTypeTags={vehicle.carTypeTags}
            isActive={index === activeIndex}
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
      <div className=' space-x-60'>
        <button className=" text-3xl" onClick={handleLeftClick}>
          &lt;
        </button>
        <button className="text-3xl" onClick={handleRightClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default VehicleCarousel;
