// Matriz escalonada

function matrizEscalonada (filas){
    const matriz  = []

    for(let i = 1; i <= filas; i++){
        const fila = new Array(i).fill(0)
        matriz.push(fila)
    }
    return matriz
}

const mat1 = matrizEscalonada(3)
console.log(mat1)