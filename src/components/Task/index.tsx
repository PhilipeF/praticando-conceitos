import { FaRegTrashAlt } from "react-icons/fa";
import styles from './task.module.css';

export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <button className={styles.btnTrash}>
                <FaRegTrashAlt size={20} />
            </button>
        </div>
    )
}

