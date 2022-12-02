import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db} from "../firebase-config";
import { doc, getDocs, query, collection} from "firebase/firestore"; 
import { useLocation } from "react-router-dom";
import styles from "./PokemonGrid.module.css";
import { PokedexCard } from "./PokedexCard";

export function PokedexGrid() {
  //let movies = [];
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const [pokemon, setPokemon] = useState([]);

  const loadData = () => {

    const q = query(collection(db, "users", "RHVsloPjx4dxlVcKwLVwWJMPJ2t2", "pokemon"));

    const querySnapshot = getDocs(q);
    querySnapshot.then(resp=>{
          resp.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setPokemon([doc.data()]) 
          });
    })
      // doc.data() is never undefined for query doc snapshots

  }

  useEffect(loadData, [])
  return (
    <ul className={styles.movieGrid}>
      {pokemon.map((pokemon) => (
        <PokedexCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
}