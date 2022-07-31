let valores = [1, 4, 5, 6, 7, 8, 9]

for(let pos=0; pos < valores.length; pos++) { //enquanto o pos for menor que o tamanho dos valores que no total é 6, ele adiciona mais 1
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`) // ele pegar a a posiçao 0 depois pega os valores e junto com o pos
     //exemplo: a posiçao 0 tem o valor 1, a posiçao 1 tem o valor 4 ETC...
}

//FORMA MAIS SIMPLES

for(let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}