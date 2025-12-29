import { COLORS, CODE_LENGTH, MAX_ROWS } from './src/constants.js';
import { generateSecretCode, checkGuess } from './src/game-logic.js';
import * as UI from './src/ui-renderer.js';

let gameState = {
    secretCode: [],
    currentRow: 0,
    currentGuess: Array(CODE_LENGTH).fill(null),
    selectedColor: COLORS[0],
    isGameOver: false
};

function initGame() {
    gameState.secretCode = generateSecretCode();
    gameState.currentRow = 0;
    gameState.currentGuess.fill(null);
    gameState.isGameOver = false;
    gameState.selectedColor = COLORS[0];
    console.log("Secret Code:", gameState.secretCode);
    UI.initBoard((row, col) => handleHoleClick(row, col));
    UI.setActiveRow(0);
    window.handleColorSelect(COLORS[0]); 
}

const handleHoleClick = (row, col) => {
    if (gameState.isGameOver || row !== gameState.currentRow) return;
    gameState.currentGuess[col] = gameState.selectedColor;
    UI.updateHoleColor(row, col, gameState.selectedColor);
};

window.handleColorSelect = (color) => {
    if (gameState.isGameOver) return;
    gameState.selectedColor = color;
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.classList.contains(`c-${color}`)) btn.classList.add('selected');
    });
};

window.handleCheck = () => {
    if (gameState.isGameOver) return;
    if (gameState.currentGuess.includes(null)) {
        UI.updateStatus("Riempi tutti i buchi!");
        return;
    }
    const result = checkGuess(gameState.secretCode, gameState.currentGuess);
    UI.showFeedback(gameState.currentRow, result.black, result.white);
    if (result.win) {
        gameState.isGameOver = true;
        UI.showEndGameModal(true, gameState.secretCode, initGame);
        return;
    }
    gameState.currentRow++;
    if (gameState.currentRow >= MAX_ROWS) {
        gameState.isGameOver = true;
        UI.showEndGameModal(false, gameState.secretCode, initGame);
    } else {
        gameState.currentGuess.fill(null);
        UI.setActiveRow(gameState.currentRow);
    }
};

document.addEventListener('DOMContentLoaded', initGame);