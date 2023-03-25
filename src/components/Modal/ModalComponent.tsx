import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { IModalProps } from "../../interfaces/IModalProps";
import { useAppSelector } from "../../store/hooks";
import styles from "./ModalComponent.module.css";

export default function ModalComponent({
  isShow,
  handleClose,
  pokemonName,
}: IModalProps) {
  const pokemonsDetails = useAppSelector((state) => {
    let pokemonIndex =
      state.pokemonDetails.pokemonDetails?.pokemon_v2_pokemonsprites.findIndex(
        (pokemon) => pokemon.pokemon_v2_pokemon.name === pokemonName
      );
    if (pokemonIndex) {
      return {
        moves: {
          ...state.pokemonDetails.pokemonDetails?.pokemon_v2_move[pokemonIndex],
        },
        sprites: {
          ...state.pokemonDetails.pokemonDetails?.pokemon_v2_pokemonsprites[
            pokemonIndex
          ],
        },
        stat: {
          ...state.pokemonDetails.pokemonDetails?.pokemon_v2_pokemonstat[
            pokemonIndex
          ],
        },
      };
    }
  });
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonsDetails?.sprites.pokemon_id}.svg`;

  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton className={styles.modalBlock}>
          <Modal.Title>{`${pokemonsDetails?.sprites.pokemon_v2_pokemon?.name.toUpperCase()}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBlock}>
          <Row>
            <Col md={12} lg={12} className={styles.imgBlock}>
              <img alt={`${pokemonName}`} src={`${pokemonImg}`} />
            </Col>
            <Col sm={12} className="mb-1 mt-1">
              <div>Moves:</div>
              <div>Accuracy: {` ${pokemonsDetails?.moves.accuracy}`}</div>
              <div>
                Move effect chance:
                {` ${pokemonsDetails?.moves.move_effect_chance}`}
              </div>
              <div>Move name: {` ${pokemonsDetails?.moves.name}`}</div>
            </Col>
            <Col sm={12} className="mb-1 mt-1">
              <div>Stats:</div>
              <div>Base stat: {` ${pokemonsDetails?.stat.base_stat}`}</div>
              <div>Effort:{` ${pokemonsDetails?.stat.effort}`}</div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className={styles.modalBlock}>
          <Button onClick={handleClose} className={styles.btn}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
