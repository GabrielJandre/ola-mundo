//Exercício 1
let nome = 'João'
console.log (nome)

//Exercício 2:
let a = 5, b = 10
let soma = a + b
console.log ('A soma é', soma)

//Exercício 3:
let primeiroNome = 'Josefa', ultimoNome = 'Silva'
console.log (primeiroNome, ultimoNome)

//Exercício 4:
let pessoa = {nome :'Gabriel', idade : 16, endereço : 'Pomerode', numero : 40028922 }
console.log (pessoa)

//Exercício 5:
let frutas = ['maçã','banana', 'laranja']
frutas.push ('uva')
console.log (frutas)

//Exercício 6:
let numeros = [1, 2, 3, 4, 5]
console.log ('O primeiro é', numeros[0])
console.log ('O ultimo é', numeros[4])

//Exercício 7:
let cores = ['vermelho', 'verde', 'azul']
for (i = 0; i < cores.length; i++)
{
    console.log (cores[i]);
}

//Exercício 8:
let idade = 16
if (idade >= 18)
{
    console.log("Maior de idade");
}
else 
{
    console.log("Menor de idade");
}

//Exercício 9:
let nota = 4
if (nota >= 7) 
{
    console.log("Aprovado")
} else if (nota > 5 && nota < 7) 
{
        console.log("Recuperação");
} 
else 
{
    console.log("Reprovado");
}

//Exercicío 10:
let diaSemana = 4
switch (diaSemana)
{
    case 1: 
        console.log ('Domindo');
        break;
    case 2: 
        console.log ('Segunda-Feira');
        break;
    case 3: 
        console.log ('Terça-Feira');
        break;
    case 4: 
        console.log ('Quarta-Feira');
        break;
    case 5: 
        console.log ('Quinta-Feira');
        break;
    case 6: 
        console.log ('Sexta-Feira');
        break;
    case 7: 
        console.log ('Sábado');
        break;
}

//Exercício 11:
for (let n = 1; n <= 10; n++) 
    {
    console.log(n);
    }