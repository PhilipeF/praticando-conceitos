import styles from './task.module.css';

export function Task() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>0</span>
                </div>

                <div>
                    <p className={styles.purpleText}>Concluídas</p>
                    <span>0</span>
                </div>
            </header>
        </section>
    )
}