import React from 'react';

function AccessoriesGrid() {
  return (
    <nav>
      <div className="clown-hair">
        <h3>Hair</h3>
        <img className="accessory" id="red_hair" src="./assets/head/hair_red.png" alt="Red Hair" />
        <img className="accessory" id="orange_hair" src="./assets/head/hair_orange.png" alt="Orange Hair"/>
        <img className="accessory" id="yellow_hair" src="./assets/head/hair_yellow.png" alt="Yellow Hair"/>
      </div>
    </nav>
  );
};

export default AccessoriesGrid;