import { Card, Col, Row } from "react-bootstrap";
import { IPokemonCardProps } from "../../interfaces/IPokemonCardProps";
import styles from "./PokemonCard.module.css";

export default function PokemonCard({
  pokemonName,
  pokemonId,
}: IPokemonCardProps) {
  return (
    <>
      <Card className={`${styles.card} m-10`}>
        <Card.Body className={styles.cardBody}>
          <Row>
            <Col md={12} lg={12}>
              <Card.Img
              alt={`${pokemonName}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
              />
            </Col>
            <Col md={12} lg={12}>
              <Card.Title className={`${styles.cardTitle}`}>
                {pokemonName.toUpperCase()}
              </Card.Title>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
