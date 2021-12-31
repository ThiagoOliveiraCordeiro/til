const user = {
  name: 'Thiago',
  lastName: 'de Oliveira Cordeiro'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Thiago de Oliveira Cordeiro'});

console.log('\nAdiciona a propriedade fullName ao objeto user', user);

// RECOMENDADO, pois segue o conceito de imutabilidade
console.log('Retorna um novo objeto mergeando os dois ou mais objetos', Object.assign({}, user, {age: 20}));

const newObj = {foo: 'bar'};
// O freeze impede que as propriedades do objeto sejam deletadas ou alteradas
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Thiago' }
Object.seal(person);

person.name = 'Thiago Oliveira';
delete person.nome;
person.age = 20;

console.log('\nVariável person após as alterações:', person);