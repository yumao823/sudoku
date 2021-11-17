import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import Game from './Components/Game';
import './App.css';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: "USER_FETCH_REQUEST",
      payload: {
        isbnNum: '0545162076',
      }
    })
  }, [])

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
