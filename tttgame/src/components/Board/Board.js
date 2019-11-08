import React, { useState } from 'react';
import Square from '../Square/Square';
import './Board.css'
const Board = (props) => {

    const [square, setSquare] = useState(Array(9).fill(null));
    const [nxtPlayer, setNxtPlayer] = useState(true);
    const [isPlayer, setIsPlayer] = useState(true);

    let nextPlayer;

    const handleClick = (index) => {
        const squares = [...square];
        if (calculateWinner(squares) || squares[index]) return;

        squares[index] = nxtPlayer ? 'X' : 'O';

        setSquare(squares);
        setNxtPlayer(!nxtPlayer);

        if (squares.includes(null)) {
            setIsPlayer(true)
        }
        else {
            setIsPlayer(false);
        }


        // console.log(nxtPlayer);
    }

    const displaySquare = (index) => {
        return (
            <Square value={square[index]} onClick={() => handleClick(index)} />
        );
    }

    const calculateWinner = (squares) => {
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

    const restartGame = () => {
        setSquare(Array(9).fill(null));
          setNxtPlayer(true);
    }

    let msg;
    const winner = calculateWinner(square);

    if (winner||isPlayer) {
        if (winner) {
            msg = `Winner is ${winner}`;
        }
        else {
            if (nxtPlayer) {
                // nextPlayer="X"
                msg = `player X move`
            }
            else {
                //nextPlayer="O";
                msg = `player O move`

            }
        }
    }
    else {
        msg = 'no one won the game please try again!'
    }



    return (
        <>
            <div>
                {msg}
            </div>

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

            <button onClick={restartGame}>
                PLAY AGAIN
            </button>
        </>
    )
}


export default Board;