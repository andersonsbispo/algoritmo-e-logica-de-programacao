// data
// atributos: dia, mes e ano
// método: exibir -> "dia/mes/ano"

const data = {
    dia: 22,
    mes: 02,
    ano: 2023,

    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    } 
};

console.log(data.exibir());