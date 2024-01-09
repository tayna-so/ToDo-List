import styles from "./Info.module.css";

export function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <strong>Tarefas Criadas</strong>
        <span>0</span>
      </div>
      <div className={styles.done}>
        <strong>Concluídas</strong>
        <span>0 de 0</span>
      </div>
    </div>
  );
}
