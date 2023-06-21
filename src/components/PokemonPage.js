import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(response => response.json())
      .then(pokemonData => setPokemonData(pokemonData))
  }, []);

  function handleAddPokemon(newPokemon) {
    setPokemonData([...pokemonData, newPokemon]);
  }

  const displayedPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearchChange={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={displayedPokemon} />
    </Container>
  );
}

export default PokemonPage;
