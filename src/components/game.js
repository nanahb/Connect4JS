import React, { useState } from "react";
import { checkWinner, createBoard, placeInColumn } from "../gamelogic.js";
import { playerEmojis, PLAYER2, PLAYER1 } from "./game_constants.js";
import { WinnerBanner } from "./WinnerBanner.js";

const Cell = (props) => {
    const style = {
        height: '40px',
        width: '40px',
        background: 'grey',
        margin: '1px',
        boarderColor: 'white',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'a',
    }
    let symbol = props.symbol
    let onClick = props.onClick
    let content = " "
    if (symbol !== null){
        content = playerEmojis[symbol]
    }
    return <div style={style} onClick={onClick}>{content}</div>
}

const MyButton = (props) => {
    return <button
        type="button"
        style={{
            border: "1px solid #ccc",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "white",
            color: "#000",
        }}
        onClick={props.onClick}
    >
        {props.children}
    </button>
}

/** Game Component */
const Game = (props) => {
    const [boardState, setBoardState] = useState(createBoard())
    const [playerState, setPlayerState] = useState(PLAYER2)
    const [winnerState, setWinnerState] = useState(null) // null, 1, 2
    function onCellClick(colIndex) {
        let nextBoardState = placeInColumn(boardState, playerState, colIndex)
        setBoardState(nextBoardState)
        let maybeWinner = checkWinner(nextBoardState)
        setWinnerState(maybeWinner)
        let nextPlayer;
        if (playerState === PLAYER1) {
            nextPlayer = PLAYER2
        } else {
            nextPlayer = PLAYER1
        }
        setPlayerState(nextPlayer)
    }
    function resetGame() {
        setBoardState(createBoard())
        setWinnerState(null)
        setPlayerState(PLAYER2)
    }
    function renderCell(cell, colIndex) {
        function callOnCellClick() {
            console.log(colIndex)
            onCellClick(colIndex)
        }
        return <Cell symbol={cell} onClick={callOnCellClick} />
    }
    function renderRow(row, rowIndex) {
        return <div style={{ display: 'flex' }}>
            {row.map(renderCell)}
        </div>
    }
    if (winnerState !== null) {
        return (<div style={{ display: 'grid' }}>
            <WinnerBanner symbol={winnerState}></WinnerBanner>
            <MyButton onClick={resetGame}>Play again</MyButton>
        </div>)
    }
    const style = {
        cursor: `url(\"data:image\/svg+xml;utf8,<svg xmlns='http:\/\/www.w3.org\/2000\/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>${playerEmojis[playerState]}<\/text><\/svg>\") 16 0,auto`
    }
    let boardComponent = boardState.map(renderRow)
    return <div style={style}>{boardComponent} </div>
}
export default Game