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

  return (
    <div className="d-flex justify-content-between mb-3">
      <Button className="fw-bold" variant="light">New Game</Button>
      <Select value={level} options={levels} onChange={e => setLevel(e)} />
    </div>
  )
}

export default Options