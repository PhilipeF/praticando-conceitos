
import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './task.module.css';

interface Props {
    tasks: ITask[];
}

export function Tasks({ tasks }: Props) {
    const tasksQuantity = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted);

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.purpleText}>Concluídas</p>
                    <span>{completedTasks.length} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task) =>
                    <Task
                        key={task.id}
                        task={task}
                    />
                )}
            </div>
        </section>
    )
}
