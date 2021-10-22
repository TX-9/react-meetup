import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// use named import because of using the Context Provider Component
import { FavoritesContextProvider } from './store/favorite-context';


ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter><App /></BrowserRouter>
    </FavoritesContextProvider>, 
    document.getElementById('root'));
