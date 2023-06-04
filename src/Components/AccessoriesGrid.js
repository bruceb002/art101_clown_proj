import React from 'react';
import { useDrag } from 'react-dnd';

function AccessoriesGrid() {
  const hairAccessories = [
    { id: 'red_hair', src: './assets/head/hair_red.png', alt: 'Red Hair', className: 'accessory' },
    { id: 'orange_hair', src: './assets/head/hair_orange.png', alt: 'Orange Hair', className: 'accessory' },
    { id: 'yellow_hair', src: './assets/head/hair_yellow.png', alt: 'Yellow Hair', className: 'accessory' },
  ];

  /*
  const shirtAccessories = [
    { id: 'blue_shirt', src: './assets/clothes/shirt_blue.png', alt: 'Blue Shirt', className: 'accessory' },
    { id: 'green_shirt', src: './assets/clothes/shirt_green.png', alt: 'Green Shirt', className: 'accessory' },
    { id: 'red_shirt', src: './assets/clothes/shirt_red.png', alt: 'Red Shirt', className: 'accessory' },
  ];
  */

  return (
    <nav>
      <h3>Hair</h3>
      <div className="clown-hair" id="hair-accessories">
        {hairAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>
      
      {/*
      <h3>Shirts</h3>
      <div className="clown-shirts" id="shirt-accessories">
        {shirtAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>
        */}
      
    </nav>
  );
}

function Accessory({ id, src, alt, className }) {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'accessory',
      id,
      className,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <img
      className={`accessory ${className}`}
      id={id}
      src={src}
      alt={alt}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
}

export default AccessoriesGrid;