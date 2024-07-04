
function soma(n1, n2)
{
    let soma = n1 + n2
    return soma
}

console.log(soma(2,3))

let senhaCorreta = "slkmeu"

function comparaSenha(senhaCorreta, senhaEscrita)
{
    if(senhaEscrita == senhaCorreta)
        {
        console.log('Conectado')
        }
    else
        {
        console.log('Senha Incorreta')
        }    
}

comparaSenha(senhaCorreta, 'slk')

function fatorial(n, fatorial)
{   
    for (let i = 1; i <= n; i++)
    {
    fatorial *=i
    }
    return(fatorial)
}

console.log(fatorial(6,1))

function parouImpar(n)
{
    if (n%2==0){console.log(n, 'é Par')}
    if (n%2==1){console.log(n, 'é Impar')}
}
parouImpar(n=7)

