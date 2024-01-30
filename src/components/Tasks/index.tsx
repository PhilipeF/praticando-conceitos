
import { ITask } from '../../App';
import { Task } from '../Task';
import { TbClipboardText } from 'react-icons/tb';

import styles from './task.module.css';

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
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
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                )}
                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <div>
                            <TbClipboardText size={40} />
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}
