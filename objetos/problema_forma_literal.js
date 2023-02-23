const data1 = {
    dia: 22,
    mes: 02,
    ano: 2023,

    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    } 
};


const data2 = {
    dia: 22,
    mes: 11,
    ano: 2023,

    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    } 
};


const data3 = {
    dia: 03,
    mes: 04,
    ano: 2023,

    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    } 
};

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());