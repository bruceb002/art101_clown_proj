import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './constants/ItemTypes.js';

function ClownContainer() {
  // Define the drop target behavior
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.ACCESSORY,
      //drop: (item, monitor) => {
        // Handle the drop event
        // You can access the dropped item and perform necessary actions
      //},
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div ref={drop} className={`clown-container ${isActive ? 'active' : ''}`}>
      <div id="clownZone">
        <div className="cushion">
          <img className="doll-base" src="./assets/doll-base.png" alt="Doll Base" />	
        </div>
      </div>
    </div>
  );
};

export default ClownContainer;