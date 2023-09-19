import styles from '../Header/Header.module.css'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <nav >
                <ul className={styles.menu}>
                    <li>
                        <a href="/">
                            {' '}
                            Início

                            {' '}
                        </a>
                    </li>
                    <li>
                        <a href="/sobre">
                            {' '}
                            Sobre mim

                            {' '}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {' '}
                            Novidades

                            {' '}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {' '}
                            Front-end

                            {' '}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {' '}
                            Back-end

                            {' '}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}