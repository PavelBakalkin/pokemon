import { Col, Container, Row, Stack } from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { IPokemonName } from "../../interfaces/IPokemonMain";
import { useAppSelector } from "../../store/hooks";
import styles from "./Pokemons.module.css";

export default function Pokemons() {
  const pokemonsDetails = useAppSelector(
    (state) => state.pokemonDetails.pokemonDetails?.pokemon_v2_pokemonsprites
  );

  return (
    <Container className={styles.wrapper}>
      <Stack gap={4}>
        <Row>
          {pokemonsDetails &&
            pokemonsDetails.map((pokemon) => {
              return (
                <Col md={12} lg={3}>
                  <PokemonCard
                    key={pokemon.pokemon_v2_pokemon.name}
                    pokemonName={pokemon.pokemon_v2_pokemon.name}
                    pokemonId={pokemon.pokemon_id}
                  />
                  ;
                </Col>
              );
            })}
        </Row>
        <Pagination />
      </Stack>
    </Container>
  );
}
