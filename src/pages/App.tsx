import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Pokemons from "./Pokemons/Pokemons";
import { useAppDispatch } from "../store/hooks";
import { fetchMainInfo } from "../store/pokemonsSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMainInfo({ pokemonId: 0 }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <header>
        <Header />
      </header>
      <main className={`${styles.main}`}>
        <Pokemons />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
