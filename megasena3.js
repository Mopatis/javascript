let NumbersMega = [];

let FirstNumber = Math.ceil(Math.random() * 60);
let SecondNumber = Math.ceil(Math.random() * 60);
let ThirdNumber = Math.floor(Math.random() * 60);
let FourthNumber = Math.floor(Math.random () * 60);
let FifthNumber = Math.ceil(Math.random() * 60);
let SixthNumber = Math.floor(Math.random() * 60);

NumbersMega = [FirstNumber, SecondNumber, ThirdNumber, FourthNumber, FifthNumber, SixthNumber];

let Aposta1 = [12, 43, 56, 34, 20, 50];
let Aposta2 = [45, 22, 19, 30, 49, 56];
let Aposta3 = [28, 34,15, 55, 42, 60];
let todasApostas = [Aposta1, Aposta2, Aposta3];

for(let indexTodasApostas = 0; indexTodasApostas < todasApostas.length; indexTodasApostas++) {
    numAcertos = 0
     for(let indexAposta = 0; indexAposta < todasApostas[indexTodasApostas].length; indexAposta++) {
        for(let indexMega = 0; indexMega < NumbersMega.length; indexMega ++) {
            if(todasApostas[indexTodasApostas][indexAposta] === NumbersMega[indexMega]) {
                numAcertos ++
            };
        };
    };
    console.log('Jogo: ' + (indexTodasApostas + 1));
    console.log(`Aposta: ${todasApostas[indexTodasApostas]}`);
    console.log(`Número sorteado: ${NumbersMega}`);
    console.log(`Número de acertos: ${numAcertos}`);
    console.log("-----------------------------------------");
    
}
