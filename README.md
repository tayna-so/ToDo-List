<h1 align="center"> ToDo List ☑️</h1>

<p align="center">
An application of tasks control using ReactJS and TypeScript. Challenge proposed by Rocketseat.
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-process">Process</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-what-i-learned">What I Learned</a>
</p>

<br>

## ⚡ Technologies

- Vite
- React.js
- TypeScript
- CSS

## 💻 Features

This project has these funcionalities:

- Add a new task
- Mark and unmark a task as done
- Remove a task from the list
- Show task completion progress

[ToDoVideo.webm](https://github.com/tayna-so/ToDo-List/assets/50917624/7b9d8e00-e441-43ab-a90c-2553f9dc5e30)

## 🚀 Process

First of all, I created all the **components** and **css modules** files following the [figma project](https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate).

Next, I've thought about the logical of the tasks and how to make them appear on the screen. First I've choose to select them by content, but then it has shown some bugs when I deleted one task with the same content of another. So I've changed all the logic for **select by ID**.

Since I've made it, it was more easier to manipulate the lists with `map()`, and to delete the task using `filter()`. After that, I implemented "check" and "uncheck" functionalities, using **condicional rendering** and **template literals**.

I also made more functionalities like:
  - responsive app
  - prevent the images from being draggable or selectable
  - prevent the user to add an empty task
  - add an alert to make sure that the user wants to delete the task
  - add a favicon :)

This was my first project using ReactJS, and during this project I've learned important **foundation concepts**.

## 🔖 What I Learned

During this project, I've practiced important concepts of ReactJS:

- States
- Immutability of the state
- Lists and keys in ReactJS
- Properties
- Components
- Condicional rendering

---

*Made with ♥ by Tayná Sousa*
