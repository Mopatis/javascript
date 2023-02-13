let estudante = {
    nome : 'Joana',
    idade: 43,
    hardSkills: 3,
    softSkills: 6,
    carreiraSkills: 5
};

estudante.cidade = 'São Paulo';
estudante['comidaFavorita'] = 'Doritos';
estudante['nome'] = 'João';
estudante.apelidos = ['apelido1', 'apelido2', 'apelido3'];
estudante.endereco = { 
    logradouro: 'Rua Dalvo Trombeta',
    numero: 357
};

// delete estudante.nome

for (let key in estudante) {
    console.log(key, estudante[key]);
    console.log('---------------------------------');
    
};