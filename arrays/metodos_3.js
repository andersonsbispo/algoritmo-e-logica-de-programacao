const numeros = [10, 20, 30, 40];

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

numeros.forEach(function(elemento) {
    console.log(elemento);
});

numeros.forEach(function(_, indice) {
    console.log(indice);
});