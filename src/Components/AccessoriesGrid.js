import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './constants/ItemTypes';


function Accessory({ type, src, alt }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ACCESSORY, accessoryType: type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <img
      className="clown-hair"
      ref={drag}
      src={src}
      alt={alt}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    />
  );
};

function AccessoriesGrid() {
  return (
    <div className="cushion1">
      <Accessory type={ItemTypes.ACCESSORY} src="./assets/head/hair_red.png" alt="Red Hair"/>
      <Accessory type={ItemTypes.ACCESSORY} src="./assets/head/hair_orange.png" alt="Orange Hair"/>
      <Accessory type={ItemTypes.ACCESSORY} src="./assets/head/hair_yellow.png" alt="Yellow Hair"/>
    </div>
  );
};

export default AccessoriesGrid;