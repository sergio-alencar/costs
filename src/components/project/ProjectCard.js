import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

import { BsFillTrashFill, BsPencil } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <div className={styles.project_card_details}>
        <h4>{name}</h4>
        <p>
          <span>Orçamento: </span>
          {budget}
        </p>
        <p className={styles.category_text}>
          <span className={`${styles[category?.toLowerCase()]}`}></span>
          {category}
        </p>
      </div>

      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>

        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
