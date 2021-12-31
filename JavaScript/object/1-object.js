let user = {
  name: 'Guilherme'
};

// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
// console.log(`Teste: ${user[prop]}`); --> Não funciona dessa forma, apenas usando [].
user[prop] = 'Outro nome 3';

// Criando uma propriedade 
user.lastName = 'Oliveira Cordeiro';

// Deletando uma propriedade
delete user.name;