import { exit } from "process";
import * as readline from "readline";
import { createBoard, placeInColumn, checkWinner } from "./gamelogic.js";


/** Console-only logic */ 
const playerEmojis = {'X':'🐻','O':'🐼'}
const hPadding = "💓".repeat(10)
function logBoard(board) {
    //[null, "X", null].map(el => {if(!el){return " "}else{return el}}).join("|")
    console.log("🌊".repeat(25))
    let boardStr = hPadding + " 0  1  2  3  4  5  6 "+hPadding+"\n"
     + board.map((row, index) => 
    hPadding + index.toString() + row.map(el => { if (!el) { return "  " } else { return el } }).join("|") + hPadding )
     .join("\n")
    boardStr = boardStr.replaceAll('X', playerEmojis['X'])
    boardStr = boardStr.replaceAll('O', playerEmojis['O'])
    console.log(boardStr)
    console.log("🌊".repeat(25))
}

async function prompt(board, currentPlayer) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    logBoard(board)
    const winner = checkWinner(board);
    if (winner !== null) {
        console.log(`${winner} wins!`);
        exit()
        return;
    }
    rl.setPrompt(`Okay ${currentPlayer}, choose your move. Write col.\n`);
    rl.prompt();
    let promise = new Promise((resolve, reject) => {

        rl.on('line', (userInput) => {
            let parsedCol = parseInt(userInput)
            rl.close();
            try{
                placeInColumn(board, currentPlayer, parsedCol)
                let nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
                prompt(board, nextPlayer)
            } catch(error){
                prompt(board, currentPlayer)
            }
            
            
        });
    });
    await promise
    
    console.log(board)
}

await prompt(createBoard(), "X")