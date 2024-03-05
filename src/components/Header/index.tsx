import { ChangeEvent, FormEvent, useState } from "react";
import styles from '../Header/header.module.css';
import todoLogo from "../../assets/todoLogo.svg";

import { AiOutlinePlusCircle } from 'react-icons/ai';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header} onSubmit={handleSubmit}>
            <img src={todoLogo} alt="" />
            <form className={styles.newTaskForm}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    onChange={onChangeTitle}
                    value={title}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}