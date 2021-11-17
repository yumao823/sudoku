import React from 'react'
import Options from './Options'
import Grid from './Grid'
import NumPad from './NumPad'

const Game = () => {
  return (
    <div className="w-100">
      <Options />
      <Grid />
      <NumPad />
    </div>
  )
}

export default Game