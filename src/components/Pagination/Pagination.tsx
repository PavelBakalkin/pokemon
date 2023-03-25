import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchDetailsInfo } from "../../store/pokemonDetailsSlice";
import styles from "./Pagination.module.css";

export default function Pagination({}) {
  const [currentPack, setCurrentPack] = useState(0);
  const pokemonsCount = useAppSelector(
    (state) => state.pokemonDetails.pokemonsCount
  );
  const dispatch = useAppDispatch();

  const handlePackChange = (pageNumber: any) => {
    setCurrentPack(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchDetailsInfo({ limit: 20, offset: currentPack }));
  }, [currentPack]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Row>
        <Col lg={6} className="text-start">
          <Row>
            <Col lg={3} className="p-0">
              <Button
                disabled={currentPack - 20 < 0}
                className={styles.btn}
                onClick={() => {
                  handlePackChange(0);
                }}
              >
                To start
              </Button>
            </Col>
            <Col lg={9} className="p-0">
              <Button
                disabled={currentPack - 20 < 0}
                className={styles.btn}
                onClick={() => {
                  handlePackChange(
                    (currentPack: number) => (currentPack -= 20)
                  );
                }}
              >
                Prev
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={6} className="text-end">
          <Row>
            <Col lg={9} className="p-0">
              <Button
                disabled={currentPack + 20 >= pokemonsCount}
                className={styles.btn}
                onClick={() => {
                  handlePackChange(
                    (currentPack: number) => (currentPack += 20)
                  );
                }}
              >
                Next
              </Button>
            </Col>
            <Col lg={3} className="p-0">
              <Button
                disabled={currentPack + 20 >= pokemonsCount}
                className={styles.btn}
                onClick={() => {
                  handlePackChange(
                    (currentPack: number) => (currentPack = pokemonsCount - 20)
                  );
                }}
              >
                To end
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
