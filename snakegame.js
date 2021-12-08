//THE GAME LOOP

import { update as updateSnake, draw as drawSnake, speed, snakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideBoard } from './grid.js'

//  lastRender - Segons abans d'actual·litzar   //
//  gameOver - Controla fi del joc              //
//  gameBoard - 'Tauler' de joc                 //
let lastRender = 0;
let gameOver = false;
const gameBoard = document.getElementById('board');

//Funció amb el bucle proncipal
function main(currentTime) {

    //  Mensaje de final de juego
    if (gameOver) {
        if (confirm('you lost - press OK to restart')) {
            window.location = './index.html'
        }
        return
    }
    window.requestAnimationFrame(main)

    //  lastRenderTime - segundos desde el último render    //
    //  currentTime - 'timestamps' del pc                   //
    const lastRenderTime = (currentTime - lastRender) / 1000

    //  Fijamos la velocidad de la serpiente
    if (lastRenderTime < 1 / speed) return

    //  Diferencia de tiempos
    lastRender = currentTime
    
    //  Se ejecutarán en bucle
    update()
    draw()
}

window.requestAnimationFrame(main)

//  Actualiza el cuerpo de la comida, la serpiente y comprueba si ha muerto
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

// Borra el tablero y diuja la serpiente con los datos actualizados
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

// Comprueba fin del juego
function checkDeath() {
    if(outsideBoard(snakeHead()) || snakeIntersection()){
        gameOver = true;
    }
    
}