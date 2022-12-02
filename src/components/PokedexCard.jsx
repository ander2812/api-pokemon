import styles from "./PokemonCard.module.css";
import { AiFillDelete } from "react-icons/ai";
import { auth, db, collections } from "../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import stylesButton from "./CatchPokemon.module.css"
import { Link } from "react-router-dom";

export function PokedexCard({ pokemon }) {

  const handleClick = async () => {

    console.log(pokemon.id)

    await deleteDoc(doc(db, "users", "RHVsloPjx4dxlVcKwLVwWJMPJ2t2", "pokemon", pokemon.id));

    window.location.reload(false);

  };

  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={pokemon.image}
        alt={pokemon.name}
      />
      <div>
        {pokemon.name} <br />
        <strong>Eliminar</strong> <br />
        <button type="button" onClick={() => handleClick()}>
          <AiFillDelete size={40} color="#6badf0" />
        </button>
      </div>
    </li>
  );

  
}