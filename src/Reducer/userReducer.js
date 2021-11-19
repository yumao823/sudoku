import { clone, equals } from 'ramda';
import { toast } from 'react-toastify'
import { newBoard } from './newboard' 

let initialstate = {
  grids: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
}

const userReducer = (state = initialstate, action) => {
  switch(action.type) {
    case "NEW_GRID": {
      const newboard = initialstate.grids.map(row => row.slice() )
      const sudoku = newBoard(newboard)

      let temp = clone(sudoku)
      let count
      switch (action.level) {
        case 'easy':
          count = 4
          break;
        case 'normal':
          count = 5
          break;
        case 'hard':
          count = 6
          break;
        default: count = 4
          break;
      }
      temp.forEach(grid => {
        for(let i=0; i<count; i++) grid[Math.floor((Math.random()*grid.length))] = 0
      });

      return { ...state, rootgrids: sudoku, grids: temp }
    }

    case "NEW_ITEM": {
      const { value, row, col } = action
      const _value = Number(value)

      if(state.rootgrids[row][col] === _value) {
        let temp = clone(state.grids)
        temp[row][col] = _value

        if (equals(state.rootgrids, temp)) {
          toast.success("Successed", {
            position: "top-center",
            autoClose: 2000,
          })
        }

        return { ...state, grids: temp }
      } else {
        toast.warn("Wrong Number", {
          position: "top-center",
          autoClose: 2000,
        })
        return state
      }
    }

    default:
      return state
  }
}

export default userReducer