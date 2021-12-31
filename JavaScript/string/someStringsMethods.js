// Retorna o tamanho de uma string
const textSize = "Texto".length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);
// const splittedText = 'Texto com espaços'.split(''); // pega todas as letras. 
// const splittedText = 'Texto com espaços'.split(' '); // quebrar pelos espaços internos das frases. 

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Texto', 'txe');
console.log('\nSubstituição de valor: ', replacedText);
// const replacedText = 'Texto'.replace('', 'txe'); // concatena no inicio, caso o valor a ser buscado seja nada. 

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);
// Representa (start, end), apenas o end pode ser omitido, supondo ele coomo o final.
