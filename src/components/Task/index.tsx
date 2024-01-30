import { ITask } from "../../App";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from './task.module.css';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {

    return (
        <div className={styles.task}>
            <button
                className={styles.checkContainer}
                onClick={() => onComplete(task.id)}
            >
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ''}>
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

