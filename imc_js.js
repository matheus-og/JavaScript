var nome = prompt('Digite o seu nome')
var altura = prompt('Digite sua altura em centímetros')
var peso = prompt('Digite o seu peso em KG')
var imc
var classificacao

altura = parseFloat(altura)
peso = parseFloat(peso)

altura /= 100

imc = peso / (altura *= altura)


if(imc < 16){
    classificacao = 'Baixo peso muito grave'
}
if(imc >= 16 && imc <= 16.99){
    classificacao = 'Baixo peso grave'
}
if(imc >= 17 && imc <= 18.49){
    classificacao = 'Baixo peso'
}
if(imc >= 18.50 && imc <= 24.99){
    classificacao = 'Peso normal'
}
if(imc >= 25 && imc <= 29.99){
    classificacao = 'Sobrepeso'
}
if(imc >= 30 && imc <= 34.99){
    classificacao = 'Obesidade grau I'
}

if(imc >= 35 && imc <= 39.99){
    classificacao = 'Obesidade grau II'
}
if (imc > 40){
    classificacao = 'Obesidade grau III'
}

document.write('<hr>')
document.write(nome + ' possui índice de massa corporal igual a ' + imc.toFixed(2) +', sendo classificado como: ' + classificacao)

//toFixed serve para limitar o número de casas decimais