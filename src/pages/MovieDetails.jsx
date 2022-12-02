import { FaThumbsUp } from "react-icons/fa";
import axios from 'axios'
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
export function MovieDetails() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState({});
  var sum = 0;
  var temp = false;
  var count = 0
  const API = " https://pokeapi.co/api/v2/pokemon/"

  useEffect(() => {

    axios.get(API + pokemonId)
    .then(resp=>{

      setPokemon(resp.data)
      console.log(resp.data)
      
    })
    
  }, [pokemonId]);



  if (!pokemon) {
    return null;
  }

  return (
    <div className={styles.movieDetails}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className={styles.col}>
        <p>
          <strong>Name:</strong>
          {pokemon.name}
        </p>
        <p>
          <strong>vida:</strong>{" "}
          {}
        </p>
        <p>
          <strong>tipo:</strong>
          {pokemon.types.type.name}
        </p>
      </div>

    </div>
  );
}
