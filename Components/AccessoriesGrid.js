import React from '../typescript/react';
import { useDrag } from '../react-dnd';
import { ItemTypes } from './constants/ItemTypes.js';

const AccessoriesGrid = () => {
  // Define draggable accessories

  return (
    <nav>
      <div className="cushion1">
        <img className="clown-hair" src="../assets/head/hair_red.png" alt="Red Hair" />
        <img className="clown-hair" src="../assets/head/hair_orange.png" alt="Orange Hair" />
        <img className="clown-hair" src="../assets/head/hair_yellow.png" alt="Yellow Hair" />
      </div>
    </nav>
  );
};

export default AccessoriesGrid;