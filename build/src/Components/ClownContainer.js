import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './constants/ItemTypes.js';

function ClownContainer() {
  // Define the drop target behavior

  return (
    <div id="clownZone">
      <div className="cushion">
        <img className="doll-base" src="../assets/doll-base.png" alt="Doll Base" />	
      </div>
    </div>
  );
};

export default ClownContainer;