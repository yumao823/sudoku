import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'
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
      <Button>1</Button>
    </div>
  );
}

export default App;
