import React from 'react';
import { useDrag } from 'react-dnd';

function AccessoriesGrid() {
  var hairAccessories = [
    { id: 'hair_red', src: './assets/head/hair_red.png', alt: 'Red Hair', className: 'hair' },
    { id: 'hair_orange', src: './assets/head/hair_orange.png', alt: 'Orange Hair', className: 'hair' },
    { id: 'hair_yellow', src: './assets/head/hair_yellow.png', alt: 'Yellow Hair', className: 'hair' },
  ];

  const eyeAccessories = [
    { id: 'eyes_pb', src: './assets/head/eyes_pb.png', alt: 'Pink Blue Eyes', className: 'eye' },
    { id: 'eyes_red', src: './assets/head/eyes_red.png', alt: 'Red Eyes', className: 'eye' },
  ];

  return (
    <nav>
      <h3>Hair</h3>
      <div className="clown-hair" id="hair-accessories">
        {hairAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>
      
      <h3>Shirts</h3>
      <div className="clown-eyes" id="eye-accessories">
        {eyeAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>
    </nav>
  );
}

function Accessory({ id, src, alt, className }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'accessory', // Define the type here
    item: {
      id,
      className,
      alt
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <img
      className={`${className}`}
      id={id}
      src={src}
      alt={alt}
      ref={drag}
    />
  );
}

export default AccessoriesGrid;