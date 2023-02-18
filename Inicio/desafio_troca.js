// Alterar os valores das variáveis, depois da troca a = 94 e b = 7

let a = 7;
let b = 94;

let tempA = a;
a = b;
b = tempA;

console.log(a);
console.log(b);

let c = 7;
let d = 94;

[c, d] = [d, c];

console.log(c);
console.log(d);