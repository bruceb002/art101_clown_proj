import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

function ClownContainer() {
  const [droppedAccessories, setDroppedAccessories] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'accessory',
    drop: (item) => {
      moveAccessory(item);
      setDroppedAccessories((prevAccessories) => [...prevAccessories, item]);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }));

  const moveAccessory = (item) => {
    const { className, id } = item;
    const existingAccessoryIndex = droppedAccessories.findIndex(
      (accessory) => accessory.className === className
    );
  
    if (existingAccessoryIndex !== -1) {
      setDroppedAccessories((prevAccessories) =>
        prevAccessories.map((accessory, index) =>
          index === existingAccessoryIndex ? item : accessory
        )
      );
    } else {
      setDroppedAccessories((prevAccessories) => [...prevAccessories, item]);
    }
  };

  const renderAccessories = () => {
    return droppedAccessories.map((accessory) => (
      <img
        key={accessory.id}
        id={accessory.id}
        src={`./assets/head/${accessory.id}.png`}
        alt={accessory.alt}
        className="hair"
        style={{
          position: 'relative',
          bottom: '560px',
          maxWidth: '120px',
          maxHeight: '96px',
        }}
      />
    ));
  }

  return (
    <div id="doll-container" ref={drop}>
      <img id="doll-base" src="./assets/doll-base.png" alt="Doll Base" />
      {renderAccessories()}
    </div>
  );
}

export default ClownContainer;