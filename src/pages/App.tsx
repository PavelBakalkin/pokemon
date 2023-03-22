import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Pokemons from "./Pokemons/Pokemons";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Pokemons />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
