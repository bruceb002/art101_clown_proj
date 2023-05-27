import React from 'react'
import App from '../Components/App.js'
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('dress_up_page');
const root = createRoot(domNode);

root.render(<h1>Hello World!</h1>);