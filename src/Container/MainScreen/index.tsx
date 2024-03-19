import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import styles from './styles';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [gameState, setGameState] = useState('ongoing');
    const [computerDelay, setComputerDelay] = useState(false);
    const [winningSquares, setWinningSquares] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        if (gameState === 'ongoing' && !xIsNext && computerDelay) {
            // Computer's turn
            const randomIndex = getRandomMove();
            setTimeout(() => handleClick(randomIndex), 1000); // Delaying computer move by 1 second
        }
    }, [xIsNext, gameState, computerDelay]);

    const getRandomMove = () => {
        const emptySquares = board.reduce((acc, square, index) => {
            if (!square) {
                acc.push(index);
            }
            return acc;
        }, []);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex];
    };

    const handleClick = (index) => {
        if (gameState !== 'ongoing' || board[index]) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        setComputerDelay(true); // Enable computer delay after user's move

        const winner = calculateWinner(newBoard);
        if (winner) {
            setGameState('over');
            setWinningSquares(getWinningSquares(newBoard, winner));
            setModalMessage(`Winner of TicTacToe: ${winner}`);
            setTimeout(() => setModalVisible(true), 1500); // Delaying modal by 2 seconds
        } else if (newBoard.every((square) => square)) {
            setGameState('over');
            setModalMessage('Draw!');
            setTimeout(() => setModalVisible(true), 1500); // Delaying modal by 2 seconds for draw
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setGameState('ongoing');
        setComputerDelay(false); // Reset computer delay flag
        setWinningSquares([]);
        setModalVisible(false); // Ensure modal is not visible on reset
    };

    const renderSquare = (index) => {
        const isWinningSquare = winningSquares.includes(index);
        return (
            <TouchableOpacity
                style={[styles.square, isWinningSquare && styles.winningSquare]}
                onPress={() => handleClick(index)}
            >
                <Text style={styles.squareText}>{board[index]}</Text>
            </TouchableOpacity>
        );
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const getWinningSquares = (squares, winner) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return lines[i];
            }
        }
        return [];
    };

    let status;
    if (gameState === 'over') {
        status = 'Game Over';
    } else if (!xIsNext) {
        status = "Computer's Turn";
    } else {
        status = 'Your Turn';
    }

    const handleClose = () =>{
        setModalVisible(false);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.statuss}>Tic Tac Toe</Text>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.board}>
                <View style={styles.row}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </View>
                <View style={styles.row}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </View>
                <View style={styles.row}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.resetView} onPress={resetGame}>
                    <Text style={styles.reset}>Reset Game</Text>
                </TouchableOpacity>
            </View>
            <Modal animationType='slide' visible={modalVisible} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{modalMessage}</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={handleClose}>
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default TicTacToe;
