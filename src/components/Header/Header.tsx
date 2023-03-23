import { Container, Navbar } from "react-bootstrap";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Navbar
      expand={true}
      className={`${styles.headerWrapper} ${styles.navbar} ${styles.navbar}`}
    >
      <Container className={`${styles.container}`}>
        <Navbar.Brand className={styles.navbarBrand}>
          <div> Pokemons </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
