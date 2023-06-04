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
    return droppedAccessories.map((item) => (
      <img
        key={item.id}
        id={item.id}
        src={`./assets/head/${item.id}.png`}
        alt={item.alt}
        className={item.className}
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