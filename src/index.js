import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './Components/App';

const domNode = document.getElementById('dress_up_page');
const root = createRoot(domNode);

root.render(<App />);