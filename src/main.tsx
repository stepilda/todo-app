import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App title="Todo App" description="A simple todo app built with React and TypeScript." />
    </StrictMode>
);
