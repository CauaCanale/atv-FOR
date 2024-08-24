//ATIVIDADE 6- Escreva um programa que peça ao usuário para digitar um número e exiba a soma de todos os números ímpares até esse número.

resultado = 0 // esta var esta funcionando nas duas variações do mesmo codigo
soma = 0 // esta var esta funcionando nas duas variações do mesmo codigo

numero = parseInt (prompt('Digite o numero')) //Esta sendo usado pelos dois codigos, e a variavel numero tambem esta sendo usado 

for (cont = 1; cont <= numero; cont + 1){ //dei o valor da var numero da linha 187 ao cont, e finalizei com o cont + 1 para ele contar de 1 em 1
   resultado = cont += 2 // coloquei a var resultado = cont e adicionei mais 2 
   soma = soma += resultado - 2 // na linha acima, o meu cont vale 3, e nessa linha eu tirei 2 para ele virar 1, e consequentemente começar pelo numero impar 1.
}
console.log('A soma de todos os numeros impares do numero fornecido é:' + soma)

soma = 0 // zerei a var soma do codigo acima para começar o novo mesmo codigo abaixo

// Mesmo codigo mas mais simplificado
for (cont = 1; cont < numero; cont += 2){ // a var numero esta sendo puxada la na linha 187 que eu adicionei no meu parseint e prompt
  soma += cont // coloquei o valor do cont no soma 
}
console.log('A soma de todos os numeros impares do numero fornecido é:' + soma)