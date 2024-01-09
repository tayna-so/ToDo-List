import { Check, Trash } from "phosphor-react";

import { ITask } from '../../App'

import styles from "./Tasks.module.css";

interface Props {
  content: ITask
  onDeleteTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Tasks({ content, onDeleteTask, toggleTaskStatus }: Props) {
  function handleDeleteTask() {
    onDeleteTask(content.id);
  }

  function handleToggleTask() {
    toggleTaskStatus({ id: content.id, value: !content.isChecked })
  }

  const checkboxChecked = content.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphChecked = content.isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="checkbox" onClick={handleToggleTask}>
          <input readOnly type="checkbox" checked={content.isChecked} />
          <span className={`&{styles.checkbox} &{checkboxChecked}`}>
              {content.isChecked && <Check size={12} />}
          </span>
          <p className={`&{styles.paragraph} &{paragraphChecked}`}>
            {content.text}
          </p>
        </label>
      </div>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={16} />
      </button>
    </div>
  )
}