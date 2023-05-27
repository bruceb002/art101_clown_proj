import React from 'react';
import { createRoot } from 'react-dom/client';
import AccessoriesGrid from './AccessoriesGrid';
import ClownContainer from './ClownContainer';

const App = () => {
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



const domNode = document.getElementById('dress_up_page');
const root = createRoot(domNode);

root.render(<App />);