import { useState, useEffect } from 'react';
import './App.css';
import PokeCard from './components/PokeCard/PokeCard';

const App = () => {
  const [allPoke, setAllPoke] = useState([]);
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20/');
  const getPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setAllPoke((currentList) => [...currentList, data]);
      });
    };
    createPokemonObject(data.results);
    await console.log(allPoke);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className='App'>
      <div>
        <p>List of pokemons</p>
      </div>
      <div className='pokemons-container'>
        {allPoke.map((pokemon, index) => {
          return <PokeCard key={index} {...pokemon} />;
        })}
        <button onClick={() => getPokemons()}>Load more pokemons</button>
      </div>
    </div>
  );
};

export default App;
