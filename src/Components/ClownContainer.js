import React from 'react';
import { useDrop } from 'react-dnd';

function ClownContainer() {
  const [accessories, setAccessories] = React.useState([]);

  const moveAccessory = (id, x, y) => {
    setAccessories((prevAccessories) =>
      prevAccessories.map((accessory) =>
        accessory.id === id ? { ...accessory, x, y } : accessory
      )
    );
  };

  const renderAccessories = () => {
    return accessories.map((accessory) => (
      <img
        key={accessory.id}
        className="accessory-dropped"
        src={`./assets/head/${accessory.id}.png`}
        alt={accessory.id}
        style={{ left: accessory.x, top: accessory.y }}
      />
    ));
  };

  const [, drop] = useDrop(() => ({
    accept: 'accessory',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const containerRect = document.getElementById('doll-container').getBoundingClientRect();
      const x = offset.x - containerRect.left - item.width / 2;
      const y = offset.y - containerRect.top - item.height / 2;
      moveAccessory(item.id, x, y);
    },
  }));

  return (
    <div id="doll-container" ref={drop}>
      <img id="doll-base" src="./assets/doll-base.png" alt="Doll Base" />
      {renderAccessories()}
    </div>
  );
}

export default ClownContainer;