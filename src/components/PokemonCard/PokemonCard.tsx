import { Card, Col, Row } from "react-bootstrap";
import { IPokemonCardProps } from "../../interfaces/IPokemonCardProps";
import styles from "./PokemonCard.module.css";

export default function PokemonCard({ pokemon }: IPokemonCardProps) {
  return (
    <>
      <Card className={`${styles.card} m-10`}>
        <Card.Body className={styles.cardBody}>
          <Row>
            <Col md={12} lg={2}>
            </Col>
            <Col md={12} lg={10}>
              <Card.Title className={`${styles.cardTitle}`}>
                {pokemon.name.toUpperCase()}
              </Card.Title>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
