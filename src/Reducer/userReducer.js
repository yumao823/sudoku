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
      let sudoku = [];

      Array.prototype.shuffle = function() {
        var arr = this.valueOf();
        var ret = [];
        while (ret.length < arr.length) {
          var x = arr[Math.floor(Number(Math.random() * arr.length))];
          if (!(ret.indexOf(x) >= 0)) ret.push(x);
        }
        return ret;
      }
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      sudoku.push(arr.sort(() => Math.random() - 0.5));
      for (var i = 1; i < 9; i++) {
    
        while (sudoku.length <= i) {
          var newarr = arr.shuffle();
          var b = false;
          for (var j = 0; j < arr.length; j++) {
            for (var k = 0; k < i; k++) {
              if (sudoku[k].indexOf(newarr[j]) == j) b = true;
            }
    
          }
          if (!b) {
            sudoku.push(newarr);
          }
        }
      }

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
        default: count = 3
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