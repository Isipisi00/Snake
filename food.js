import { onSnake, expandSnake, addSpeed} from './snake.js';
import { randomGridPosition } from './grid.js';

//  Le asignamos las coordenadas random a nustra variable
let food = getRandomFoodPosition();

//  Si la serpiente toca la comida, añadimos otra parte al cuerpo y generamos otra pieza de comida
export function update() {
    if (onSnake(food)) {
        addSpeed();
        expandSnake();
        food = getRandomFoodPosition();
    }
}

//  Dibujamos la comida y la añadimos a nuestro board con las coordenadas random
export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

//  Comprovamos que las coordenadas dadas no coincidan con las de la serpiente antes de asignar
function getRandomFoodPosition() {
    let newPosition;
    while (newPosition == null || onSnake(newPosition)) {
        newPosition = randomGridPosition();
    }
    return newPosition;
}