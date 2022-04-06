import React, { Component } from 'react';
import AllItems from './AllItems';
import SelectedItems from './SelectedItems';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <AllItems/>
      <SelectedItems/>
    </div>
  );
}

export default App;