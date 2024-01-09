import styles from "./Info.module.css";

interface Props {
  tasksCreated: number
  checkedTasks: number
}

export function Info({ tasksCreated, checkedTasks }: Props) {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <strong>Tarefas Criadas</strong>
        <span>{tasksCreated}</span>
      </div>
      <div className={styles.done}>
        <strong>Concluídas</strong>
        <span>
          {tasksCreated === 0
            ? tasksCreated
            : `${checkedTasks} de ${tasksCreated}`}
        </span>
      </div>
    </div>
  );
}
