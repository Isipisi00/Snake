import {update as updateSnake, draw as drawSnake, snake_speed} from './snake.js';

var lastRender=0;
var gameOver=false; 

const board = document.getElementById('game-board');

function main(currentTime){
    if (gameOver){
        if (confirm('-------GAME OVER-------\nDesea jugar otra vez?')) {
            window.location = './index.html'; 
        }
        return
    }
    window.requestAnimationFrame(main);
    const secsLastRender = (currentTime - lastRender)/1000;

    if (secsLastRender < 1 / snake_speed) return;
    
    lastRender=currentTime;
    update();    
    draw();
    
    //console.log('Render');
}

window.requestAnimationFrame(main);


function update(){
    updateSnake();
    //updateFood();
    //gameOver();
}

function draw(){
    drawSnake(board);
}