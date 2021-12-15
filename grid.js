//  Tamaño del Grid, a cambiar en 'style.css lin 16-17'
const GD_Size = 35

//  Devuelve una posición random entera para la comida
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GD_Size) + 1,
        y: Math.floor(Math.random() * GD_Size) + 1
    }
}

//  Devuelve true si está fuera del grid
export function outsideBoard(position) {
    return (
        position.x < 1 || position.x > GD_Size || position.y < 1 || position.y > GD_Size
    )
}