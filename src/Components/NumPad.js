import React from 'react'
import { Button } from 'react-bootstrap'

const NumPad = () => {
  return (
    <div className="d-flex justify-content-between py-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => 
        <Button
          key={`nb-${item}`}
          variant="success"
        >
          {item}
        </Button>
      )}
    </div>
  )
}

export default NumPad