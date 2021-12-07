let direccion = {x:0, y:0};

window.addEventListener('keydown', e=>{
    //console.log(e.key);

    switch (e.key) {
        case 'ArrowUp':
            direccion = {X:0, y:1};
            break

        case 'ArrowDown':
            direccion = {X:0, y:-1};
            break

        case 'ArrowLeft':
            direccion = {X:-1, y:0};
            break

        case 'ArrowRight':
            direccion = {X:1, y:0};
            break
    }
})

export function getDirection(){
    return direccion;
}