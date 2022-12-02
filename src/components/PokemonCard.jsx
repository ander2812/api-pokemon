import styles from "./PokemonCard.module.css";
import { CgPokemon } from "react-icons/cg";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { auth, db, collections } from "../firebase-config";
import stylesButton from "./CatchPokemon.module.css";
import { Link } from "react-router-dom";

export function PokemonCrad({ pokemon }) {
  //const db = getDatabase();

  var id = Math.random().toString(36).substr(2, 18)

  const handleClick = async () => {

    try {
      const docRef = await setDoc(doc(db, "users", auth.currentUser.uid, "pokemon", id.toString()), {

        name: pokemon.name,
        id:id,
        image: pokemon.sprites.front_default

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  };

  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div>
        {pokemon.name} <br />
        <strong>Atrapar</strong> <br />
        <button type="button" onClick={() => handleClick()}>
          <CgPokemon size={40} color="#6badf0" />
        </button>
      </div>
    </li>
  );
}
