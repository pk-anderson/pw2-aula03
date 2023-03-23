//Questão 1
interface Employee {
  code: number;
  name: string;
}

let employee: Employee = {
  code: 10,
  name: "John"
}

console.log(employee)

//Questão 2
interface Pessoa {
  nome: string;
  idade: number;
  profissao: string;
}

let pessoa1: Pessoa = {
 nome: "maria",
 idade: 29,
 profissao: "atriz"
};

let pessoa2: Pessoa = {
  nome: "roberto",
  idade: 19,
  profissao: "Padeiro"
}

let pessoa3: Pessoa = {
  nome: "laura",
  idade: 32,
  profissao: "Atriz"
}

let pessoa4: Pessoa = {
  nome: "carlos",
  idade: 19,
  profissao: "padeiro"
}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
