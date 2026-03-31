"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal



const SIZE = BATTLEFIELD.length;
let winner = null;
let winType = "";


// 1) Check Horizontal

for (let row = 0; row < SIZE; row++) {
    let firstCell = BATTLEFIELD[row][0];
    let rowIsWinner = true;

    if (firstCell === null) {
        rowIsWinner = false;
    } else {
        for (let col = 1; col < SIZE; col++) {
            if (BATTLEFIELD[row][col] !== firstCell) {
                rowIsWinner = false;
            }
        }
    }

    if (rowIsWinner) {
        winner = firstCell;
        winType = "horizontal";
    }
}


// 2) Check Vertical

if (winner === null) {
    for (let col = 0; col < SIZE; col++) {
        let firstCell = BATTLEFIELD[0][col];
        let colIsWinner = true;

        if (firstCell === null) {
            colIsWinner = false;
        } else {
            for (let row = 1; row < SIZE; row++) {
                if (BATTLEFIELD[row][col] !== firstCell) {
                    colIsWinner = false;
                }
            }
        }

        if (colIsWinner) {
            winner = firstCell;
            winType = "vertical";
        }
    }
}


// 3) Check Main Diagonal

if (winner === null) {
    let firstCell = BATTLEFIELD[0][0];
    let diagonalIsWinner = true;

    if (firstCell === null) {
        diagonalIsWinner = false;
    } else {
        for (let i = 1; i < SIZE; i++) {
            if (BATTLEFIELD[i][i] !== firstCell) {
                diagonalIsWinner = false;
            }
        }
    }

    if (diagonalIsWinner) {
        winner = firstCell;
        winType = "main-diagonal";
    }
}


// 4) Check Anti Diagonal

if (winner === null) {
    let firstCell = BATTLEFIELD[0][SIZE - 1];
    let diagonalIsWinner = true;

    if (firstCell === null) {
        diagonalIsWinner = false;
    } else {
        for (let i = 1; i < SIZE; i++) {
            if (BATTLEFIELD[i][SIZE - 1 - i] !== firstCell) {
                diagonalIsWinner = false;
            }
        }
    }

    if (diagonalIsWinner) {
        winner = firstCell;
        winType = "anti-diagonal";
    }
}

// 5) Print Result
if (winner !== null) {
    console.log("Winner: " + winner);
    console.log("Win type: " + winType);
} else {
    console.log("No winner yet.");
}