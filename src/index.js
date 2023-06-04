import React from 'react'
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './Components/App';

const domNode = document.getElementById('dress_up_page');
const root = createRoot(domNode);

root.render(
<DndProvider backend={HTML5Backend}>
    <App />
</DndProvider>
);