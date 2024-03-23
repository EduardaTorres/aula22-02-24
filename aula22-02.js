// identifique o erro e corrija o código a baixo

function verificarMaiorIdade(idade) {

    return idade < 18 ? 'Menor de idade' : 'Maior de idade';

}
console.log(verificarMaiorIdade(15))

//// complete o códigoFaça com que a variável array tenha uma lista ordenada de 10 posições de 0 a 9

function orderArray() {

    let arr = [1, 2, 3, 6, 7, 9];

    arr.unshift(4, 5, 8, 0 );
    arr.sort();
    return arr;
}
console.log(orderArray());


/// Substitua os dados do objeto reatribuído  e delete o campo idade sem alterar a declaração do mesmo
function meusDados() {
    let pessoa = {
        nome: 'jhon doe',
        idade: '30',
        cidade: 'New York'
    }

    pessoa.nome = 'Eduarda',
    pessoa.cidade = 'Cianorte',
    delete pessoa.idade;

    return pessoa;
}
console.log(meusDados());

//Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
//ex: ordemAlfabetica: animais.short... 
function manipulaArray() {
    let animais = ['cachorro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];
    let ordemAlfabetica = animais.sort();
    let primeiro = animais[0];
    let ultimo = animais[animais.length - 1]; 
    let tamanhoDaLista = animais.length;
    return {
        ordemAlfabetica,
        primeiro,
        ultimo,
        tamanhoDaLista
    }
}
console.log(manipulaArray());