import { Col, Container, Row, Stack } from "react-bootstrap";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { IPokemonName } from "../../interfaces/IPokemonMain";
import { useAppSelector } from "../../store/hooks";
import styles from "./Pokemons.module.css";

export default function Pokemons() {
  const pokemons = useAppSelector((state) => state.pokemons.mainPageInfo);

  console.log(pokemons);

  return (
    <Container className={styles.wrapper}>
      <Stack gap={4}>
        <Row>
          {pokemons &&
            pokemons.results.map((pokemon: IPokemonName) => {
              return (
                <Col md={12} lg={3}>
                  <PokemonCard key={pokemon.name} pokemon={pokemon} />;
                </Col>
              );
            })}
        </Row>
      </Stack>
    </Container>
  );
}
