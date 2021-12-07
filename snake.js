import { getDirection } from "./input.js";

//  speed - velocidad de la serpiente   //
//  snakeBody - cuerpo                  //
export const speed = 15;
const snakeBody =[{x: 11, y: 11}];
let newSnakePart = 0;


export function update() {

    //  Añadimos partes en caso de haber comido una pieza
    addParts();

    //  direction - 
    const direction = getDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += direction.x;
    snakeBody[0].y += direction.y;
}

export function draw(board) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        board.appendChild(snakeElement)
    })
}

export function expandSnake() {
    newSnakePart += 1;
}

export function onSnake(position, ignoreHead = false ) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function snakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addParts() {
    for (let i = 0; i < newSnakePart; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSnakePart = 0
}