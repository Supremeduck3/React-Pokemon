import Card from './components/card';
import Charmander from './assets/charmander.png'
import Pikachu from './assets/pikachu.jpg'
import Bulbasaur from './assets/bulbasaur.jpg'

function App() {

  const pokemons = [
    {
      id:1,
      nome:"Pikachu",
      tipo:"Elétrico",
      imagem: Pikachu
    },
    {
      id:2,
      nome:"Charmander",
      tipo:"Fogo",
      imagem: Charmander
    },
    {
      id:3,
      nome:"Bulbassaur",
      tipo:"Grama",
      imagem: Bulbasaur
    },
    {
      id:4,
      nome:"mew",
      tipo:"normal",
    },
    {
      id:3,
      nome:"Mewtwo",
      tipo:"Pyscho",
    },
  ]
  return (
    <>
      {pokemons.map((pokemon)=>(
        <Card
        key={pokemon.id}
        nome={pokemon.nome}
        tipo={pokemon.tipo}
        imagem={pokemon.imagem}
        ></Card>
      )
       )}
    </>
  );
}

export default App;
