import { Container, Navbar } from "react-bootstrap";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <Navbar
      expand={true}
      className={`${styles.footerWrapper} ${styles.navbar} ${styles.navbar}`}
    >
      <Container className={`${styles.container}`}>
        <Navbar.Brand className={styles.navbarBrand}>
          <div> Pokemons </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
