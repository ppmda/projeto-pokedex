// Variaveis para utilizar para selecionar os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe que esta com o cartao aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // no evento do clique, pega o id do pokemon para depois mostar no cartao
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado na listagem
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no pokemon selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})