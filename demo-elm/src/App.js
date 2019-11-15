import React from 'react';
import './App.css';
import Base from './Base';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
      <Base/>
      </BrowserRouter>
  );
}

export default App;
