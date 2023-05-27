import React from 'react';
import AccessoriesGrid from './AccessoriesGrid';
import ClownContainer from './ClownContainer';

function App() {
  return (
    <main>
      <header>
        <div className="cushion">
          <h4>WELCOME TO THE CLOWN ZONE</h4>
        </div>
      </header>

      <div id="wrapper">
        <ClownContainer />
      </div>

      <div id="accessories">
        <p>Just Placeholding With Some Images</p>
        <AccessoriesGrid />
      </div>
    </main>
  );
};

export default App;