import { Check, Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

interface TasksProps {
  content: string;
  onDeleteTask: (comment: string) => void;
}

export function Tasks({ content, onDeleteTask }: TasksProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={styles.checkbox}>
            <Check size={12}/>
          </span>
          <p className={styles.paragraph}>
            {content}
          </p>
        </label>
      </div>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={16} />
      </button>
    </div>
  )
}