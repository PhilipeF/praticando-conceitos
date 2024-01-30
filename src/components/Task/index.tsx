import { FaRegTrashAlt } from "react-icons/fa";
import { ITask } from "../../App";

import styles from './task.module.css';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>
                {task.title}
            </p>
            <button
                onClick={() => onDelete(task.id)}
                className={styles.btnTrash}
            >
                <FaRegTrashAlt size={20} />
            </button>
        </div>
    )
}

