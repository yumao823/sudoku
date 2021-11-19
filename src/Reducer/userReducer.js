import { clone, equals } from 'ramda';
import { toast } from 'react-toastify'

let initialstate = {
  grids: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ],
}

const userReducer = (state = initialstate, action) => {
  switch(action.type) {
    case "NEW_GRID": {
      let temp1 = clone(initialstate.grids)
      temp1.map(grid => {
        grid.sort(() => Math.random() - 0.5)
      })

      let temp2 = clone(temp1)
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
        default: count = 3
          break;
      }
      temp2.forEach(grid => {
        for(let i=0; i<count; i++) grid[Math.floor((Math.random()*grid.length))] = 0
      });

      return { ...state, rootgrids: temp1, grids: temp2 }
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