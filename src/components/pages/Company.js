import styles from "../pages/Company.module.css";

function Company() {
  return (
    <div className={styles.company_container}>
      <div className={styles.company_title_container}>
        <h1>Empresa</h1>
        <p>
          Conteúdo da página <i>Empresa</i>.
        </p>
      </div>
      <img src='https://placehold.co/400x500' alt='' />
    </div>
  );
}

export default Company;
