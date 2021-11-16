import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
