import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useAuth} from '../context/authContext'
import { useLocation } from "react-router-dom";
import { get } from "../pages/function/ClientFunction";
import { PokemonCrad } from "./PokemonCard";
import styles from "./PokemonGrid.module.css";
import axios from 'axios'
import { auth } from "../firebase-config";
export function PokemonGrid() {
  //let movies = [];
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const API = "https://pokeapi.co/api/v2/pokemon?limit=100"

  const [pokemon, setPokemon] = useState([]);
  const {user} = useAuth()
  const loadData = () => {

    axios.get(API)
    .then(resp=>{
      for (let i = 0; i < resp.data.results.length; i++) {
        axios.get(resp.data.results[i].url)
        .then(result=>{
          setPokemon(prevArray=>[...prevArray, result.data])
        })
        
      }
    })

    console.log(pokemon)

  }

  useEffect(loadData, [])
  return (
    <ul className={styles.movieGrid}>
      {pokemon.map((pokemon) => (
        <PokemonCrad key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
}
