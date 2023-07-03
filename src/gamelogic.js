

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
    if(row==5 || board[row+1][col]!==null) {
        // either row is bottomrow or the row below row is occupied
        board[row][col] = symbol
    }else{
        throw Error(`Invalid move ${row}, ${col}!`)
    }
}

