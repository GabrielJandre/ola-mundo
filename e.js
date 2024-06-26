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
let contador = 1;
while (contador <= 5) 
{
    console.log(contador);
    contador++;
}

//Exercício 12:
let numero = 0;
do  
{
    console.log(numero); 
    numero++;
}   while (numero < 3);

//Exercício 13:
let valores = [10, 20, 30, 40, 50];
let Soma = 0;

for (let i = 0; i < valores.length; i++) 
{
    Soma += valores[i];
}

console.log("A soma dos elementos é:", Soma);

//Ecercício 14:
let numbers = [6, 18, 9, 12, 16];
let maximo = numbers[0];

for (let i = 1; i < numbers.length; i++) 
{
    if (numbers[i] > maximo) 
    {
        maximo = numbers[i];
    }
}
console.log("O maior Número é:", maximo);

//Exercício 15:
let number = [5, 23, 32, 29, 9];
let minimo = number[0];

for (let i = 1; i < number.length; i++) 
{
    if (number[i] < minimo) 
    {
        minimo = number[i];
    }
}
console.log("O menor Número é", minimo);

//Exercício 16:
let n = 5;
let fatorial = 1;

for (let i = 1; i <= n; i++) 
{
    fatorial *= i;
}
console.log(`O fatorial de ${n} é ${fatorial}`);

//Exercício 17:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) 
{
    if (num[i] % 2 === 0) 
    {
        console.log(`${num[i]} é par`);
    } 
    else 
    {
        console.log(`${num[i]} é ímpar`);
    }
}

//Exercício 18:
let text = "ola";
let vogais = ['a', 'e', 'i', 'o', 'u'];
let contadorr = 0;

for (let i = 0; i < text.length; i++) 
{
    let caractere = text[i].toLowerCase();
    if (vogais.includes(caractere)) 
    {
        contadorr++;
    }
}
console.log(`O texto "${text}" possui ${contadorr} vogais.`);

//Exercício 19:
let texto = "ola";
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) 
{
    textoInvertido += texto[i];
}

console.log(`Texto original: ${texto}`);
console.log(`Texto invertido: ${textoInvertido}`);

//Exercício 20:
let inicio = 2;
let fim = 20;

console.log(`Números primos no intervalo de ${inicio} a ${fim}:`);
for (let num = inicio; num <= fim; num++) 
{
    let primo = true;
    for (let i = 2; i < num; i++) 
        {
        if (num % i === 0) 
        {
            primo = false;
            break;
        }
    }
    if (primo && num > 1) 
    {
        console.log(num);
    }
}