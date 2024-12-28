import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer_bg}>
      <div className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <a href='https://www.facebook.com/' target='_blank'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/' target='_blank'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/' target='_blank'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          <span>Costs</span> &copy; 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
