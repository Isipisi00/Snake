import {getDirection} from './direction.js';

export const snake_speed = 5;
const snakeBody = [    {x:11, y:11}, {x:11, y:12} 
];


export function update(){

    const direcion = getDirection();
    /*for (let i = -1; i <= snakeBody.length; i++) {
        snakeBody[i] = {...snakeBody[i-1]}
        
    }*/
    snakeBody.forEach(segment => {
        segment.x += direcion.x;
        segment.y += direcion.y;

    });

    //snakeBody[0].x +=direcion.x; 
    //snakeBody[0].y +=direcion.y; 

}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');

        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

