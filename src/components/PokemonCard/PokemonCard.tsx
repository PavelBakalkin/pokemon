import { FastAverageColor } from "fast-average-color";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { IPokemonCardProps } from "../../interfaces/IPokemonCardProps";
import styles from "./PokemonCard.module.css";

export default function PokemonCard({
  pokemonName,
  pokemonId,
}: IPokemonCardProps) {
  const [imgBacColor, setImgBackColor] = useState("");
  const [imgTxtColor, setImgTxtColor] = useState("");
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  const fac = new FastAverageColor();

  fac
    .getColorAsync(`${pokemonImg}`)
    .then((color) => {
      setImgBackColor(color.rgba);
      setImgTxtColor(color.isDark ? "#fff" : "#000");

      console.log("Average color", color);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <>
      <Card
        className={`${styles.card} m-10`}
        style={{
          backgroundColor: `${imgBacColor ? imgBacColor : 'rgba(154, 169, 186, 0.479)'}`,
          color: `${imgTxtColor}`,
        }}
      >
        <Card.Body className={styles.cardBody}>
          <Row>
            <Col md={12} lg={12}>
              <Card.Img alt={`${pokemonName}`} src={`${pokemonImg}`} />
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
