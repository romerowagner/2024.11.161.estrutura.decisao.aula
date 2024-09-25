// crie um algoritmo que solicite um número e
// informe se o número é PAR ou ÍMPAR

const prompt = require(`prompt-sync`)();

const numero = parseInt(prompt(`Informe um número: `));

const par = numero % 2 == 0;

if (par) {
    console.log(`Número PAR`);
} else {
    console.log(`Número ÍMPAR`);
}