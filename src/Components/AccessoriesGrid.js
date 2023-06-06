import React from 'react';
import { useDrag } from 'react-dnd';

function AccessoriesGrid() {
  var hairAccessories = [
    { id: 'hair_red', src: './assets/head/hair_red.png', alt: 'red hair', className: 'hair', type: 'head' },
    { id: 'hair_orange', src: './assets/head/hair_orange.png', alt: 'orange hair', className: 'hair', type: 'head' },
    { id: 'hair_yellow', src: './assets/head/hair_yellow.png', alt: 'yellow hair', className: 'hair', type: 'head' }
  ];

  var eyeAccessories = [
    { id: 'eyes_pb', src: './assets/head/eyes_pb.png', alt: 'pink blue eyes', className: 'eye', type: 'head' },
    { id: 'eyes_red', src: './assets/head/eyes_red.png', alt: 'red eyes', className: 'eye', type: 'head' }
  ];

  var noseAccessories = [
    { id: 'nose_red', src: './assets/head/nose_red.png', alt: 'red nose', className: 'nose', type: 'head' },
    { id: 'nose_red2', src: './assets/head/nose_red2.png', alt: 'red nose 2', className: 'nose', type: 'head' },
    { id: 'nose_blue', src: './assets/head/nose_blue.png', alt: 'blue nose', className: 'nose', type: 'head' }
  ];

  var mouthAccessories = [
    { id: 'mouth_pink', src: './assets/head/mouth_pink.png', alt: 'pink mouth', className: 'mouth', type: 'head' },
    { id: 'mouth_redsharp', src: './assets/head/mouth_redsharp.png', alt: 'red sharp mouth', className: 'mouth', type: 'head' },
    { id: 'mouth_blue', src: './assets/head/mouth_blue.png', alt: 'blue mouth', className: 'mouth', type: 'head' }
  ];

  var shirtAccessories = [
    { id: 'shirt_yp', src: './assets/torso/shirt_yp.png', alt: 'yellow pink shirt', className: 'shirt', type: 'torso' },
    { id: 'shirt_rb', src: './assets/torso/shirt_rb.png', alt: 'red black shirt', className: 'shirt', type: 'torso' },
    { id: 'fiery-poka-dot-shirt', src: './assets/torso/fiery-poka-dot-shirt.png', alt: 'fiery pink red shirt', className: 'shirt', type: 'torso' }
  ];

  var handAccessories = [
    { id: 'gloves', src: './assets/hands/gloves.png', alt: 'normal gloves', className: 'gloves', type: 'hands' },
    { id: 'gloves_bloody', src: './assets/hands/gloves_bloody.png', alt: 'bloody gloves', className: 'gloves', type: 'hands' }
  ]

  var legAccessories = [
    { id: 'yp_poka_dot_pants', src: './assets/legs/yp_poka_dot_pants.png', alt: 'Yellow Pink pants', className: 'pant', type: 'legs' },
    { id: 'red_polka_dot_pants', src: './assets/legs/red_polka_dot_pants.png', alt: 'red pants', className: 'pant', type: 'legs' },
    { id: 'striped_pants', src: './assets/legs/striped_pants.png', alt: 'blue purple striped pants', className: 'pant', type: 'legs' },
    { id: 'skirt', src: './assets/legs/skirt.png', alt: 'Green Skirt', className: 'pant', type: 'legs' }
  ];

  var feetAccessories = [
    { id: 'shoes_pb', src: './assets/feet/shoes_pb.png', alt: 'Pink Blue Shoes', className: 'shoes', type: 'feet' },
    { id: 'shoes_rb', src: './assets/feet/shoes_rb.png', alt: 'Red Black Shoes', className: 'shoes', type: 'feet' }
  ];

  var otherAccessories = [
    { id: 'face_makeup', src: './assets/head/face_makeup.png', alt: 'face makeup', className: 'makeup', type: 'head' },
    { id: 'party_hat', src: './assets/head/party_hat.png', alt: 'party hat', className: 'hat', type: 'head' },
    { id: 'clown_collar', src: './assets/torso/clown_collar.png', alt: 'collar', className: 'neck', type: 'torso' }
  ];

  return (
    <nav>
      <h3>Hairs</h3>
      <div className="clown-hair" id="hair-accessories">
        {hairAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>
      
      <h3>Eyes</h3>
      <div className="clown-eyes" id="eye-accessories">
        {eyeAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

      <h3>Noses</h3>
      <div className="clown-noses" id="nose-accessories">
        {noseAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

      <h3>Mouths</h3>
      <div className="clown-mouths" id="mouth-accessories">
        {mouthAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

      <h3>Shirts</h3>
      <div className="clown-shirts" id="shirt-accessories">
        {shirtAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

      <h3>Hands</h3>
      <div className="clown-gloves" id="hand-accessories">
        {handAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

      <h3>Pants</h3>
      <div className="clown-pants" id="pant-accessories">
        {legAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

      <h3>Shoes</h3>
      <div className="clown-shoes" id="shoe-accessories">
        {feetAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

      <h3>Others</h3>
      <div className="clown-others" id="other-accessories">
        {otherAccessories.map(accessory => (
          <Accessory key={accessory.id} {...accessory} />
        ))}
      </div>

    </nav>
  );
}

function Accessory({ id, src, alt, type, className }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'accessory', // Define the type here
    item: {
      id,
      className,
      type,
      alt
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const cursorStyle = isDragging ? 'grabbing' : 'grab';

  return (
    <img
      className={`${className}`}
      id={id}
      src={src}
      style={{ cursor: cursorStyle }}
      alt={alt}
      ref={drag}
    />
  );
}

export default AccessoriesGrid;