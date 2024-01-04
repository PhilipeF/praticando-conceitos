import { FaRegTrashAlt } from "react-icons/fa";
import styles from './task.module.css';
import { ITask } from "../../App";

interface Props {
    task: ITask;
}

export function Task({ task }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>
                {task.title}
            </p>
            <button className={styles.btnTrash}>
                <FaRegTrashAlt size={20} />
            </button>
        </div>
    )
}

