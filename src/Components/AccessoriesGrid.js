import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './constants/ItemTypes';

function AccessoriesGrid() {
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