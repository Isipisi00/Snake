//  Tamaño del Grid, a cambiar en 'style.css lin 16-17'
const GRID_SIZE = 50

//  Devuelve una posición random entera para la comida
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

//  Devuelve true si está fuera del grid
export function outsideBoard(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
    )
}