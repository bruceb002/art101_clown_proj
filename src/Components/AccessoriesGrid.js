import React from 'react';

function AccessoriesGrid() {
  return (
    <nav>
      <p>Hair Types</p>
      <div className="cushion1">
        <img className="clown-hair" id="accessory" src="./assets/head/hair_red.png" alt="Red Hair" />
        <img className="clown-hair" id="accessory" src="./assets/head/hair_orange.png" alt="Orange Hair"/>
        <img className="clown-hair" id="accessory" src="./assets/head/hair_yellow.png" alt="Yellow Hair"/>
      </div>
    </nav>
  );
};

export default AccessoriesGrid;