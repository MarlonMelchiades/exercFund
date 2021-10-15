// ----- exercício 1 ----- //

function cumprimentar(nome) { 
  const saudacao = "Olá" 
  return [saudacao, nome].join(', ').concat("!") 
}

// ----- exercício 2 ----- //

function converterIdadeEmAnosParaDias(idadeEmAnos) { 
  const diasDoAno = 365 
 
  return diasDoAno * idadeEmAnos 
}

// ----- exercício 3 ----- //

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) { 
  const salarioBruto = horasTrabalhadas * ganhoPorHora 
  const salarioLiquido = salarioBruto - salarioBruto * 30/100 
 
  return `Salário igual a R$ ${salarioLiquido}` 
}

// ----- exercício 4 ----- //

function receberNomeDoMes(numero) { 
  switch(numero){ 
    case 1: 
      return "janeiro"; 
    case 2:  
      return "fevereiro"; 
    case 3:  
      return "março"; 
    case 4: 
      return "abril"; 
    case 5: 
      return "maio"; 
    case 6:  
      return "junho"; 
    case 7: 
      return "julho"; 
    case 8: 
      return "agosto"; 
    case 9: 
      return "setembro"; 
    case 10: 
      return "outubro"; 
    case 11: 
      return "novembro"; 
    case 12: 
      return "dezembro"; 
  }  
}

// ----- exercício 5 ----- //

function maiorOuIgual(primeiro, segundo) { 
  if(typeof primeiro != typeof segundo) return false 
 
  return primeiro >= segundo 
}

// ----- exercício 6 ----- //

function inverso(valor) { 
  const tipo = typeof valor 
 
  if (tipo  == "boolean") return !valor 
  else if (tipo  == "number") return -valor 
  else 
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}` 
}

// ----- exercício 7 ----- //

function estaEntre(minimo, maximo, numero, inclusivo = false) { 
  if(inclusivo) return numero >= minimo && numero <= maximo 
 
  return numero > minimo && numero < maximo 
}

// ----- exercício 8 ----- //

function multiplicar(numeroA, numeroB) { 
  let resultado = 0 
 
  /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser 
     realizada aqui para diminuir a quantidade de loops */ 
  for(let i = 0; i < numeroB; i++) 
    resultado += numeroA 
 
  return resultado 
}

// ----- exercício 9 ----- //

function repetir(item, quantidade) { 
  let resultado = [] 
 
  for (let i = 0; i < quantidade; i++) 
    resultado.push(item) 
 
  return resultado 
}

// ----- exercício 10 ----- //

function simboloMais(quantidade) { 
 let resultado = '' 
 
  for(let i = 0; i < quantidade; i++) 
    resultado += '+' 
 
  return resultado 
}

// ----- exercício 11 ----- //

function receberPrimeiroEUltimoElemento(elementos) { 
  const indiceDoPrimeiroElemento = 0 
  const indiceDoUltimoElemento = elementos.length - 1 
  const primeiroElemento = elementos[indiceDoPrimeiroElemento] 
  const ultimoElemento = elementos[indiceDoUltimoElemento] 
   
  return [primeiroElemento, ultimoElemento] 
}

// ----- exercício 12 ----- //

function removerPropriedade(objeto, nomeDaPropriedade) { 
  const copia = Object.assign({}, objeto) 
  delete copia[nomeDaPropriedade] 
 
  return copia 
}

// ----- exercício 13 ----- //

function filtrarNumeros(array) { 
  const resultado = []
  for(let item of array) 
    if(typeof item === "number") 
      resultado.push(item) 
  return resultado 
}

// ----- exercício 14 ----- //

function objetoParaArray(objeto) { 
  const resultado = [] 
 
  for (let chave in objeto)  
    resultado.push([ chave , objeto[chave] ]) 
 
  return resultado 
}

// ----- exercício 15 ----- //

function receberSomenteOsParesDeIndicesPares(numeros) { 
  let resultado = [] 
 
  for(let i = 0; i < numeros.length; i += 2){ 
    const numeroPar = numeros[i] % 2 === 0 
 
    if(numeroPar) 
      resultado.push(numeros[i]) 
  } 
   
  return resultado 
}

// ----- exercício 16 ----- //

function checarAnoBissexto(ano) { 
  const divisivelPorQuatro = ano % 4 == 0 
  const divisivelPorCem = ano % 100 == 0 
  const divisivelPorQuatrocentos = ano % 400 == 0 
 
  return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos 
}

// ----- exercício 17 ----- //

function somarNumeros(numeros) { 
  let soma = 0 
  numeros.forEach(numero => soma += numero) 
   
  return soma 
}

// ----- exercício 18 ----- //

function despesasTotais(itens) { 
  var total = 0 
   
  for (let item of itens) 
    total += item.preco 
   
  return total 
}

// ----- exercício 19 ----- //

function calcularMedia(numeros) { 
  const quantidadeDeNumeros = numeros.length 
  let somaTotal = 0 
 
  for(numero of numeros) { 
    somaTotal += numero 
  } 
 
  return somaTotal / quantidadeDeNumeros 
}

// ----- exercício 20 ----- //

function areaDoTriangulo(base, altura) { 
  const area = (base * altura) / 2 
 
  return area.toFixed(2) // irá arredondar para manter 2 casas decimais 
}

// ----- exercício 21 ----- //

function menorNumero(numeros) { 
  let menor = numeros[0] 
 
  for (let i in numeros) 
    if (numeros[i] < menor) 
      menor = numeros[i] 
 
  return menor 
}

// ----- exercício 22 ----- //

function funcaoDaSorte(numeroEscolhido) { 
  const min = 1 
  const max = 10 
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min) 
 
  return (numeroEscolhido === numeroAleatorio ? 
    `Parabéns! O número sorteado foi o ${numeroAleatorio}` : 
    `Que pena, o número sorteado foi o ${numeroAleatorio}` 
  ) 
}

// ----- exercício 23 ----- //

function contarPalavras(frase){ 
  const palavras = frase.split(" ") 
  return palavras.length 
}

// ----- exercício 24 ----- //

function contarCaractere(caractereBuscado, frase) { 
  let contador = 0 
 
  for (let i = 0; i < frase.length; i++) 
    if (frase.charAt(i) === caractereBuscado) 
      contador++ 
 
  return contador 
}

// ----- exercício 25 ----- //

function buscarPalavrasSemelhantes(inicio, palavras) { 
  const resultado = [] 
 
  for (let palavra of palavras) 
    if (palavra.includes(inicio)) 
      resultado.push(palavra) 
 
  return resultado 
}

// ----- exercício 26 ----- //

function removerVogais(frase) { 
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"] 
   
  vogais.forEach( vogal => frase = frase.replace(vogal, '') ) 
 
  return frase 
}

// ----- exercício 27 ----- //

function inverter(objeto) { 
  const objetoInvertido = {} 
 
  Object.entries(objeto).forEach( parChaveValor => { 
    const chave = 0, 
          valor = 1 
 
    objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave] 
  }) 
 
  return objetoInvertido 
}

// ----- exercício 28 ----- //

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) { 
  return numeros.filter(numero => { 
    const quantidadeDeDigitos = String(numero).length 
 
    return quantidadeDeDigitos === quantidadeDesejada 
  })
}

// ----- exercício 29 ----- //

function segundoMaior(numeros) { 
  let indiceDoMaior = 0 
  let segundoMaior 
   
  numeros.forEach( (numero, indice) => { 
    if( numero > numeros[indiceDoMaior] ) 
      indiceDoMaior = indice 
  }) 
 
  numeros.splice(indiceDoMaior, 1) 
  segundoMaior = numeros[0] 
   
  numeros.forEach(numero => { 
    if(numero > segundoMaior) 
      segundoMaior = numero 
  }) 
   
  return segundoMaior 
}

// ----- exercício 30 ----- //

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0) 
const media = array => soma(array) / array.length 
 
function recerberMelhorEstudante(estudantes) { 
  const estudantesComMedias = Object.entries(estudantes).map( estudante => { 
    const chave = 0, 
          valor = 1 
 
    return { nome: estudante[chave], media: media(estudante[valor]) } 
  }) 
  const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media) 
  const melhorEstudante = estudantesOrdenados[0] 
 
  return melhorEstudante 
}