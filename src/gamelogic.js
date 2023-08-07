
export function createBoard() {
    return [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]
}

export function placeThingy(board, symbol, row, col){
    if(board[row][col]===null && (row==5 || board[row+1][col]!==null)) {
        // either it is bottomrow or the row below it is occupied
        board[row][col] = symbol
    }else{
        throw Error(`Invalid move ${row}, ${col}!`)
    }
}
/**
 * 
 * @param {*} board 
 * @param {*} symbol 
 * @param {*} col 
 * @returns 
 */
export function placeInColumn(board, symbol, col){
    if( board[0][col] !== null ){
        throw Error(`Invalid move ${0}, ${col}!`)
    }
    // find lowest row where board[row][col] === null
    let row = 0
    while( row+1<=5 && board[row+1][col] === null){
        row += 1
    }

    let boardCopy = board.slice()
    boardCopy[row][col] = symbol
    return boardCopy
}

/**
 * Given a 2d array of null or Int, if there are 4 consecutive Ints 
 * (horizontally, vertically or diagonally), then return that int.
 * @param {*} board 
 */
export function checkWinner(board){
    for (const rowIndex of range(0, 5)) {
        for (const colIndex of range(0,6) ) {
            if(board[rowIndex][colIndex] !== null){
                // if position (r,c) is occupied, check horizontal, vertical, diagonal.
                const symbol = board[rowIndex][colIndex] // 1 or 2 
                // horizontal
                if(range(colIndex, colIndex+3).every( i => i <= 6 && board[rowIndex][i] === symbol)){
                    // if places at col, col+1, col+2, col+3 all have symbol placed
                    // return symbol
                    return symbol // 1 or 2, representing the player that placed it.
                }
                // vertical
                if(range(rowIndex, rowIndex+3).every(i => i <= 5 && board[i][colIndex] === symbol)){
                    return symbol
                }
                // TODO: diagonal topleft to bottomright
                if(range(0,3).every(i => (rowIndex+i<=5) && (colIndex+i<=6) && board[rowIndex+i][colIndex+i] === symbol)){
                    return symbol
                }
                // hint, (board[rowIndex][colIndex], board[rowIndex+1][colIndex+1], board[rowIndex+2][colIndex+2]..+3)
                if(range(0,3).every(i => (rowIndex+i<=5) && (colIndex-i<=6) && board[rowIndex+i][colIndex-i] === symbol)){
                    return symbol
                }
            }
        }
    }
    return null
}


/**
 * Returns array [start, start+1, ..., end-1, end]
 * @param {*} start 
 * @param {*} end 
 */
function range(start, end){
    var res = []
    for(let i=start; i<=end ; i++){
        res.push(i)
    }
    return res
}

export function play(board, col, currentPlayer) {
    placeInColumn(board, currentPlayer, col);
}

