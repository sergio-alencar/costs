import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <header className={styles.navbar_bg}>
      <Container className={styles.navbar}>
        <Link to='/'>
          <img src={logo} alt='Costs' className={styles.coin} />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Início</Link>
          </li>
          <li className={styles.item}>
            <Link to='/projects'>Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to='/company'>Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to='/contact'>Contato</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Navbar;
