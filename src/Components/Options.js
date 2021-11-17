import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Select from 'react-select'

const levels = [
  { value: 'easy', label: 'Easy' },
  { value: 'normal', label: 'Normal' },
  { value: 'hard', label: 'Hard' },
]

const Options = () => {
  const [level, setLevel] = useState(levels[0])
  const handleSelect = e => {
    setLevel(e)
  }

  return (
    <div className="d-flex justify-content-between mb-3">
      <Button variant="light">New Game</Button>
      <Select value={level} options={levels} onChange={handleSelect} />
    </div>
  )
}

export default Options