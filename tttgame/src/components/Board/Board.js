import React, { useState } from 'react';
import Square from '../Square/Square';
import  './Board.css'
const Board = (props) => {

    const [square, setSquare] = useState(Array(9).fill(null));
    const [nxtPlayer, setNxtPlayer] = useState(true);
    let nextPlayer;

    const handleClick = (index) => {
        const squares = [...square];
        if (squares[index]) return;
        
        squares[index] = nxtPlayer ? 'X' : 'O';
        setSquare(squares);
        setNxtPlayer(!nxtPlayer);
    }

    const displaySquare = (index) => {
        return(
        <Square value={square[index]} onClick={() => handleClick(index)} />
        );}
    
    const calculateWinner=(squares)=>{
        const possibleLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
            ];

          for (let i = 0; i < possibleLines.length; i++) {
            const [a, b, c] = possibleLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
    }


if(nxtPlayer){
    nextPlayer="X"
}
else{
    nextPlayer="O";
}


    return (
        <div>
            Next Player ={nextPlayer}
            <div className="board-row">
                {displaySquare(0)}
                {displaySquare(1)}
                {displaySquare(2)}
             </div>
             <div className="board-row">
                {displaySquare(3)}
                {displaySquare(4)}
                {displaySquare(5)}
            </div>

            <div className="board-row">
                {displaySquare(6)}
                {displaySquare(7)}
                {displaySquare(8)}

            </div>
        </div>
    )
}


export default Board;