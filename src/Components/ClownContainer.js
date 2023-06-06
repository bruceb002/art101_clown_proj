import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

function ClownContainer() {
  const [droppedAccessories, setDroppedAccessories] = useState([]);

  const drop = useDrop(() => ({
    accept: 'accessory',
    drop: (item) => {
      moveAccessory(item);
    },
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

      //initialize to otherwise default values
      let bottomValue = '0px';
      let l = '0px';
      let z = '1';
      let cN = item.className;

      if (cN === 'hair') {
        bottomValue = '485px'; 
        z = '100';
        l = '365px';
      } else if (cN === 'eye') {
        bottomValue = '500px';
        z = '99';
        l = '405px';
      } else if (cN === 'nose') {
        bottomValue = '490px';
        z = '90';
        l = '417px';
      } else if(cN === 'mouth') {
        bottomValue = '465px';
        z = '90';
        l = '407px';
      } else if(cN === 'shirt') {
          z = '90';
          l = '300px';
          if(item.id === 'fiery-poka-dot-shirt') {
            bottomValue = '305px';
          } else {
            bottomValue = '292px';
          }
      } else if(cN === 'gloves') {
        z = '90';
        l = '244px';
        bottomValue = '245px';
      } else if(cN === 'pant') {
        z = '90';

        if(item.id === 'skirt') {
          bottomValue = '225px';
          l = '340px';
        } else if(item.id === 'striped_pants') {
          bottomValue = '90px';
          l = '320px';
        } else {
          bottomValue = '98px';
          l = '347px';
        }
      } else if(cN === 'shoes') {
        z = '90';
        bottomValue = '15px';
        l = '308px';
      } else { //others section
        if(cN === 'makeup') {
          z = '80';
          l = '380px';
          bottomValue = '450px';
        } else if(cN === 'hat') {
          z = '101';
          l = '380px';
          bottomValue = '535px';
        } else if(cN === 'neck') {
          z = '100';
          l = '350px';
          bottomValue = '400px';
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
            bottom: bottomValue,
            left: l
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