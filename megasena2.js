let NumerosMegaSena = [];

let PrimeiroNumero = Math.ceil(Math.random() * 60);
let SegundoNumero = Math.ceil(Math.random() * 60);
let TerceiroNumero = Math.ceil(Math.random() * 60);
let QuartoNumero = Math.ceil(Math.random() * 60);
let QuintoNumero = Math.ceil(Math.random() * 60);
let SextoNumero = Math.ceil(Math.random() * 60);

NumerosMegaSena = [PrimeiroNumero, SegundoNumero, TerceiroNumero, QuartoNumero, QuintoNumero, SextoNumero];



let Aposta1 = [33, 58 ,60, 6, 15, 26];
let Aposta2 = [48, 20, 29, 8, 34, 12];
let Aposta3 = [12, 56, 32, 49, 50, 54];

let todasApostas = [Aposta1, Aposta2, Aposta3];


for(let indexFullAposta = 0; indexFullAposta < todasApostas.length; indexFullAposta += 1) {
    numeroDeAcertos = 0;
for(let indexAposta = 0; indexAposta < todasApostas[indexFullAposta].length; indexAposta += 1) {
    for(let indexMega = 0; indexMega < NumerosMegaSena.length; indexMega += 1) {
        if(todasApostas[indexFullAposta] [indexAposta] === NumerosMegaSena[indexMega]){
            numeroDeAcertos += 1
        };
    };
};
console.log('Jogo ' + (indexFullAposta + 1));
console.log(`Numero da Mega: ${NumerosMegaSena}`);
console.log(`Aposta: ${todasApostas[indexFullAposta]}`);
console.log(`Numero de acertos: ${numeroDeAcertos}`);
console.log('--------------------------------');
};


