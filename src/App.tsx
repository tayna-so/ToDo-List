import { Header } from "./components/Header";
import { Info } from "./components/List/Info";
import { Tasks } from "./components/List/Tasks";
import { Empty } from "./components/List/Empty";
import { PlusCircle } from "phosphor-react";
import { FormEvent, InvalidEvent, useState } from "react";

import styles from "./App.module.css";

import "./global.css";

export interface  ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskText, setNewTaskText] = useState('');
  
  const checkedTasks = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }
    return prevValue
  }, 0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!newTaskText) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: newTaskText,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask]);
    setNewTaskText('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obirgatório!');
  }
  
  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id)
    if (!confirm('Deseja apagar essa tarefa?')) {
      return
    }
    setTasks(tasksWithoutDeletedOne)
    }


  const isNewTaskEmpty = newTaskText.length === 0;

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return { ...task }
    })
    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />
      <div className={styles.content}>
        <form onSubmit={handleCreateNewTask} className={styles.inputField}>
            <textarea
              name="task"
              placeholder="Adicione uma nova tarefa"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
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
        <Info 
          tasksCreated={tasks.length}
          checkedTasks={checkedTasks}
        />
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <Tasks
                  key={task.id}
                  content={task}
                  onDeleteTask={deleteTask}
                  toggleTaskStatus={handleToggleTask}
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
