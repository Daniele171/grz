import { COLORS, CODE_LENGTH } from './constants.js';

export function generateSecretCode() {
    const secret = [];
    for (let i = 0; i < CODE_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * COLORS.length);
        secret.push(COLORS[randomIndex]);
    }
    return secret;
}

export function checkGuess(secret, guess) {
    let blackPegs = 0;
    let whitePegs = 0;
    const secretCopy = [...secret];
    const guessCopy = [...guess];

    // Neri (Posizione Esatta)
    for (let i = 0; i < CODE_LENGTH; i++) {
        if (guessCopy[i] === secretCopy[i]) {
            blackPegs++;
            guessCopy[i] = null;
            secretCopy[i] = 'MATCHED';
        }
    }
    // Bianchi (Colore Giusto)
    for (let i = 0; i < CODE_LENGTH; i++) {
        if (guessCopy[i] !== null) {
            const indexInSecret = secretCopy.indexOf(guessCopy[i]);
            if (indexInSecret !== -1) {
                whitePegs++;
                secretCopy[indexInSecret] = 'USED';
            }
        }
    }
    return { black: blackPegs, white: whitePegs, win: blackPegs === CODE_LENGTH };
}