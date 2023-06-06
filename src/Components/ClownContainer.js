import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

function ClownContainer() {
  const [droppedAccessories, setDroppedAccessories] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'accessory',
    drop: (item) => {
      moveAccessory(item);
    }, 
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }));

  const moveAccessory = (item) => {
    setDroppedAccessories((prevAccessories) => {
      const existingIndex = prevAccessories.findIndex((accessory) => accessory.className === item.className);
      if (existingIndex !== -1) {
        const updatedAccessories = [...prevAccessories];
        updatedAccessories.splice(existingIndex, 1, item);
        return updatedAccessories;
      } else {
        return [...prevAccessories, item];
      }
    });
  };

  const renderAccessories = () => {
    return droppedAccessories.map((item) => {

      //initialize to otherwise default values: top: -6%;
      let topValue = '0px';
      let z = '1';
      let cN = item.className;

      if (cN === 'hair') {
        topValue = '-6%'; 
        z = '100';
      } else if (cN === 'eye') {
        topValue = '3%';
        z = '99';
      } else if (cN === 'nose') {
        topValue = '8%';
        z = '90';
      } else if(cN === 'mouth') {
        topValue = '12%';
        z = '90';
      } else if(cN === 'shirt') {
          z = '90';
          if(item.id === 'fiery-poka-dot-shirt') {
            topValue = '16.3%';
          } else {
            topValue = '18.5%';
          }
      } else if(cN === 'gloves') {
        z = '90';
        topValue = '47%';
      } else if(cN === 'pant') {
        z = '90';

        if(item.id === 'skirt') {
          topValue = '44%';
        } else if(item.id === 'striped_pants') {
          topValue = '42%';
        } else {
          topValue = '38%';
        }
      } else if(cN === 'shoes') {
        z = '90';
        topValue = '85%';
      } else { //others section
        if(cN === 'makeup') {
          z = '80';
          topValue = '-1%';
        } else if(cN === 'hat') {
          z = '101';
          topValue = '-18%';
        } else if(cN === 'neck') {
          z = '100';
          topValue = '10%';
        }
      }
  
      return (
        <img
          key={item.id}
          id={item.id}
          src={`./assets/${item.type}/${item.id}.png`}
          alt={item.alt}
          className={item.className}
          style={{
            position: 'absolute',
            zIndex: z,
            top: topValue
          }}
        />
      );
    });
  };

  return (
    <div id="doll-container" ref={drop}>
      <img id="doll-base" src="./assets/doll-base.png" alt="Doll Base" />
      {renderAccessories()}
    </div>
  );
}

export default ClownContainer;