import React from 'react';
import AccessoriesGrid from './AccessoriesGrid';
import ClownContainer from './ClownContainer';

function App() {
  return (
    <main>
      <div id="header">
        <h1>WELCOME TO THE CLOWN ZONE</h1>
      </div>
      <div id="wrapper">
        <div id="clownZone">
          <ClownContainer />
        </div>

        <div id="accessories">
          <h2>Accessories</h2>
          <AccessoriesGrid />
        </div>
      </div>
    </main>
  );
};

export default App;