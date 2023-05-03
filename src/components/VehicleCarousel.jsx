import React, { useState } from 'react';
import VehicleCard from './VehicleCard';

const VehicleCarousel = ({ carTypeTags, vehicleList }) => {
  // set the initial active vehicle index to 0
  const [activeIndex, setActiveIndex] = useState(0);

  // function to handle left arrow click
  const handleLeftClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? vehicleList.length - 1 : prevIndex - 1));
  };

  // function to handle right arrow click
  const handleRightClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === vehicleList.length - 1 ? 0 : prevIndex + 1));
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
    <div className="vehicle-carousel">
      <div className="vehicle-carousel-list">
        {vehicleList.map((vehicle, index) => (
          <VehicleCard
            key={index}
            vehicle={vehicle}
            isActive={index === activeIndex}
            carTypeTags={carTypeTags}
            onTouchStart={handleTouchStart}
          />
        ))}
      </div>
      <div className="vehicle-carousel-arrow left" onClick={handleLeftClick}>
        &lt;
      </div>
      <div className="vehicle-carousel-arrow right" onClick={handleRightClick}>
        &gt;
      </div>
    </div>
  );
};

export default VehicleCarousel;
