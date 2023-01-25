let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let seconNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, seconNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];


let turma12Play = [35, 8, 22, 14, 2, 60];
let turma12Play2 = [10, 3, 54, 32, 4, 43];
let turma12Play3 = [60, 43, 18, 22, 7, 30];
let turma12Play4 = [1, 2, 3, 4, 5, 6];


let MegaSenaGames = [turma12Play, turma12Play2, turma12Play3, turma12Play4];
//console.log(MegaSenaGames);

for (let games = 0; games < MegaSenaGames.length; games += 1) {
    let numberOfHits = 0;
    for (indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
        for (let indexPlay = 0; indexPlay < MegaSenaGames[games]; indexPlay += 1) {
            if (megaSenaNumbers[indexMega] === MegaSenaGames[games][indexPlay]) {
                numberOfHits += 1
            };
        };
    };
console.log("Jogo " + (games + 1));
console.log(`Números sorteados: ${megaSenaNumbers}`);
console.log(`Jogo: ${MegaSenaGames[games]}`);
console.log(`Número de acertos: ${numberOfHits}`);
console.log("------------------------------")

}