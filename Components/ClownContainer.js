import React from '../typescript/react';
import { useDrop } from '../react-dnd';
import { ItemTypes } from './constants/ItemTypes.js';

const ClownContainer = () => {
  // Define the drop target behavior

  return (
    <div id="clownZone">
      <div class="cushion">
        <img class="doll-base" src="../assets/doll-base.png" alt="Doll Base" />	
      </div>
    </div>
  );
};

export default ClownContainer;