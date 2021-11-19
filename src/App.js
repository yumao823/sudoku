import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import Game from './Components/Game';
import './App.css';

const App = () => {
  console.log("state: ",useSelector(state => state.state))

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Game />
      </div>
    </div>
  );
}

export default App;
