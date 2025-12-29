import { CSS_COLOR_MAP, CODE_LENGTH, MAX_ROWS } from './constants.js';

const boardElement = document.getElementById('board');
const statusElement = document.getElementById('statusMsg');
const modalElement = document.getElementById('resultModal');
const modalTitle = document.getElementById('modalTitle');
const secretReveal = document.getElementById('secretReveal');

export function initBoard(onHoleClick) {
    boardElement.innerHTML = '';
    for (let i = 0; i < MAX_ROWS; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${i}`;
        
        const guessDiv = document.createElement('div');
        guessDiv.className = 'guess-holes';
        for (let j = 0; j < CODE_LENGTH; j++) {
            const hole = document.createElement('div');
            hole.className = 'hole';
            hole.id = `hole-${i}-${j}`;
            hole.onclick = () => onHoleClick(i, j);
            guessDiv.appendChild(hole);
        }

        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback';
        for (let k = 0; k < CODE_LENGTH; k++) {
            const peg = document.createElement('div');
            peg.className = 'feedback-peg';
            peg.id = `feedback-${i}-${k}`;
            feedbackDiv.appendChild(peg);
        }
        row.appendChild(guessDiv);
        row.appendChild(feedbackDiv);
        boardElement.appendChild(row);
    }
}

export function setActiveRow(rowIndex) {
    document.querySelectorAll('.row').forEach(r => r.classList.remove('active'));
    if (rowIndex < MAX_ROWS) {
        const row = document.getElementById(`row-${rowIndex}`);
        if (row) row.classList.add('active');
        updateStatus(`Tentativo ${rowIndex + 1} di ${MAX_ROWS}`);
    }
}

export function updateHoleColor(row, col, colorName) {
    const hole = document.getElementById(`hole-${row}-${col}`);
    if (hole) {
        hole.style.backgroundColor = CSS_COLOR_MAP[colorName];
        hole.style.border = 'none';
    }
}

export function showFeedback(row, black, white) {
    let pegIndex = 0;
    for (let i = 0; i < black; i++) {
        const peg = document.getElementById(`feedback-${row}-${pegIndex}`);
        peg.classList.add('black');
        pegIndex++;
    }
    for (let i = 0; i < white; i++) {
        const peg = document.getElementById(`feedback-${row}-${pegIndex}`);
        peg.classList.add('white');
        pegIndex++;
    }
}

export function updateStatus(msg) {
    if (statusElement) statusElement.textContent = msg;
}

export function showEndGameModal(win, secretCode, onRestart) {
    modalElement.style.display = 'flex';
    modalTitle.textContent = win ? "HAI VINTO!" : "GAME OVER";
    modalTitle.style.color = win ? "#2ECC40" : "#FF4136";
    secretReveal.innerHTML = '';
    secretCode.forEach(color => {
        const div = document.createElement('div');
        div.className = 'revealed-peg';
        div.style.backgroundColor = CSS_COLOR_MAP[color];
        secretReveal.appendChild(div);
    });
    const existingBtn = modalElement.querySelector('button');
    if (existingBtn) existingBtn.remove();
    const btn = document.createElement('button');
    btn.className = 'action-btn';
    btn.textContent = 'Gioca Ancora';
    btn.onclick = () => { modalElement.style.display = 'none'; onRestart(); };
    modalElement.appendChild(btn);
}