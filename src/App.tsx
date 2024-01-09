import { Header } from "./components/Header";
import { Info } from "./components/List/Info";
import { Tasks } from "./components/List/Tasks";
import { Empty } from "./components/List/Empty";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const [tasks, setTasks] = useState([
     'ok'
  ])

  const [newTaskText, setNewTaskText] = useState('');
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event?.target.value);
    event.target.setCustomValidity('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obirgatório!');
  }
  
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <main>
      <Header />
      <div className={styles.content}>
        <form onSubmit={handleCreateNewTask} className={styles.inputField}>
            <textarea
              name="task"
              placeholder="Adicione uma nova tarefa"
              value={newTaskText}
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button
              className={styles.button}
              type="submit"
              disabled={isNewTaskEmpty}>
                Criar
                <PlusCircle size={20} weight="bold"/>
            </button>
        </form>
        <Info />
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <Tasks
                  key={task}
                  content={task}
                  onDeleteTask={deleteTask}
                />
               )
             })}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </main>
  );
}
