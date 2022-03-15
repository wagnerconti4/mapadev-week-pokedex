/*
Quando clicar no pokemon  da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartaõ correspondente ao que foi selecionado na listagem.

Para isso vamos precisar trabalhar com dois elementos

1-  Listagem
2 - Cartão do Pokémon

Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons

- Remover a classe aberto só do cartão que está aberto

- Ao clicar em um pokemon da listagem, pegamos o id desse pokémon para saber qual cartão mostrar

- Remover a classe ativo que marca o pokemon selecionado

- Adicionar a classe ativo no item da lista selecionado
*/


//Precisamos criar duas variáveis no js pra trabalhar com os elementos da tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

//Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons
listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const listagemPokemonAtivo = document.querySelector('.ativo')
        listagemPokemonAtivo.classList.remove('ativo')

        const listaPokemonSelecionado = document.getElementById(idPokemonSelecionado)
        listaPokemonSelecionado.classList.add('ativo')

    })
})