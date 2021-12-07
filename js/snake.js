import {getDirection} from './direction.js';

export const snake_speed = 5;
const snake_body = [{x:11, y:11}];

let newpPart=0;


export function update(){
    addParts();
    const direction = getDirection();
    for (let i = snake_body.length - 2; i >= 0; i--) {
        snake_body[i + 1] = { ...snake_body[i] }
    }
    snake_body[0].x += inputDirection.x
    snake_body[0].y += inputDirection.y


}

export function draw(board){
    snake_body.forEach(part => {
        const snakeElement = document.createElement('div');

        snakeElement.style.gridRowStart = part.y;
        snakeElement.style.gridColumnStart = part.x;
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    })
}

