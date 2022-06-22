const readline = require('readline')
const resposta = [];

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

console.log('Elementos CSS: (Lista)')
 rl.on('line', function (line) {
  if (line.toUpperCase() == 'LISTA') {
  rl.close();
  resposta.map(item => item.toLowerCase()).sort().map((item, index) => console.log(`${index + 1}: ${item}`));
}

resposta.push(line)
});