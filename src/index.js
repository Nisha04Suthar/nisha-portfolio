import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

const router = createBrowserRouter([
  { path:'/', element:<App/>
   , children:[
    {path: "/",element: <Home/>},
    {path: "/About",element:<About/> },
    {path: "/Project",element:<Project/> },
    {path: "/Contact",element:<Contact/> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
