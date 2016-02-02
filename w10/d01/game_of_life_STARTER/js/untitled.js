var changes = []
for (var r = 0; r < this.gameBoard.length; r++) {
  for (var c = 0; c < this.gameBoard[r].length; c++) {
    if (this.gameBoard[r][c].alive) {
      var counter++
      for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
          if (i === 0 && j === 0) continue
          if (this.gameBoard[r + i][c + j].alive) {
            counter++
          }
        }
      }
      if (counter < 2 || counter > 3) {
        changes.push(this.gameBoard[r][c])
      }
    } else {

    }
  }
}
fo
