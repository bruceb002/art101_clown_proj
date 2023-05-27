import React from 'react';
import ReactDOM from 'react-dom';
import AccessoriesGrid from './AccessoriesGrid';
import ClownContainer from './ClownContainer';

const App = () => {
  return (
    <main>
      <header>
        <div class="cushion">
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

ReactDOM.render(App, document.querySelector('#dress_up_page'));