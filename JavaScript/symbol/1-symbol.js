const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('Symbol1 é igual a Symbol2:', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Thiago',
  [nameSymbol2]: 'Outro nome',
  lastName: 'de Oliveira Cordeiro'
}

console.log(user);

// Symbols criam propriedades que não são enumeráveis.
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`)
  }
}

// Não exibe os valores e nem as chaves dos symbols
console.log('Propriedades do objeto user:',Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto.
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enumj
const directions = {
  UP: Symbol( 'UP' ),
  DOWN: Symbol( 'DOWN' ),
  LEFT: Symbol( 'LEFT' ),
  RIGHT: Symbol( 'RIGHT' ), 
}