import styles from './Header.module.css'

import todoLogo from './assets/todo-list-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do desafio" />
        </header>     
    )
}