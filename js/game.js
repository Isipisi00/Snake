import {update as updateSnake, draw as drawSnake, snake_speed} from './snake.js';

var lastRenderTime=1000;

const gameBoard = document.getElementById('game-board');

function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime)/100;

    window.requestAnimationFrame(main);

    if (secondsSinceLastRender < 1 / snake_speed) return
    
    lastRenderTime=currentTime;
    update();    
    draw();
    
    //console.log('Render');
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
}

function draw(){
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
}