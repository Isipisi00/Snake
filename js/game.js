import {snake_speed} from './snake.js';

var lastRenderTime=0;

function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime)/100;

    window.requestAnimationFrame(main);

    if (secondsSinceLastRender < 1 / snake_speed) {
        lastRenderTime=currentTime;
        update();
        draw();
    }
    console.log('Render');
}

window.requestAnimationFrame(main);

function update(){

}

function draw(){

}