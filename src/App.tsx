import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTask] = useState<ITask[]>([
    // {
    //   id: "1",
    //   title: "teste",
    //   isCompleted: true
    // },
    // {
    //   id: "2",
    //   title: "teste-2",
    //   isCompleted: false
    // }
  ]);

  // Aqui vou iniciar a persistencia de dados utilizando o localStorage. 

  function addTask(taskTitle: string) {
    setTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTask(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTask(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

export default App
