function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,

        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        } 
    };
};

const data1 = criarData(09, 10, 2010);
const data2 = criarData(22, 11, 2013);
const data3 = criarData(03, 04, 2022);

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());