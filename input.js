//  input - direccion actual         //
//  lastInput - direccion anterior   //

let input = { x: 0, y: 0 }
let lastInput = { x: 0, y: 0 }

//  añadimos un eventListener para ver qué teclas clica el usuario

window.addEventListener('keydown', e => {
    switch (e.key) {
        //  Caso arriba, abajo, izquierda, derecha
        case 'ArrowUp' :
            //  Sólo hace caso si la serpiente va en horizontal                 //
            //                                                                  //
            //  Si ya iba ya hacia arriba, sigue y si pulsasa abajo no          //
            //  hace caso de la flecha hacia abajo y así en el resto de casos   //
            if (lastInput.y !== 0) break
            input = { x: 0, y: -1 }
            break
        case 'ArrowDown' :
            if (lastInput.y !== 0) break
            input = { x: 0, y: 1 }
            break
        case 'ArrowLeft' :
            if (lastInput.x !== 0) break
            input = { x: -1, y: 0 }
            break
        case 'ArrowRight' :
            if (lastInput.x !== 0) break
            input = { x: 1, y: 0 }
            break
    }
})

//  Ahora nuestro nuevo input pasa a ser el antiguo
//  Devuelve el valor x e y en input
export function getDirection() {
    lastInput = input
    return input
}