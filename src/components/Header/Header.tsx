import styles from '../Header/Header.module.css'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <nav >
                <ul className={styles.menu}>
                    <li> Início </li>
                    <li> Projetos </li>
                    <li> Pacotes </li>
                </ul>
            </nav>
        </header>
    )
}