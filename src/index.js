import React from 'react';
import ReactDOM from 'react-dom/client';
import ArrayComp from './arrayfunctions/myarray';
import './index.css';
import Parent from './newcomp/parent';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArrayComp />
  </React.StrictMode>
);

reportWebVitals();

//1. state variables and props
//2. onChange and onClick
//3. map function
//4. conditional rendering
//5. object destructuring