//ATIVIDADE 2-Escreva um programa que peça ao usuário para digitar um número e exiba sua tabuada de 1 a 10.

numero = 0 //fiz a vaiavel do numero fornecido

numero = parseInt (prompt ("Digite um numero")) // foi criado para ser lido como realmente numero por causa do parseint, sem ele o numero nao seria usavel

resultado = 0 // varaivel para receber o valor fornecido pela var numero

for (tabuada = 0; tabuada <= 10; tabuada = tabuada + 1){ // criei a var tabuada iniciando do 0, ate o numero vezes 10, e coloquei o tabuada = tabuda + 1 para ir contando de 1 em 1, poderia ser usado o tabuada++ tambem
  resultado = numero + 'X' + tabuada + '=' + (numero * tabuada) //coloquei para que o resultado receba o valor do numero escolhido do usuario da var numero, e fui fazendo as strings no meio da linha para ficar bonito, e fui adicionando a var tabuada  e depois entere parenteses a minha operação que é vezes.
   console.log (resultado) 
}