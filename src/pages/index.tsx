import { Header } from '@/components/Header/Header'
import styles from '../styles/Home.module.css'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.summary}>
          <strong> Thomás Dixini </strong>
          <span> Desenvolvedor front-end </span>
          <p> Eu desenvolvo aplicações web modernas, visando foco em front-end! </p>

          <nav className={styles.menu}>
            <ul>
              <li className={styles.item}>
                <a href="">
                  <span></span>
                  <span> Experiências </span>
                </a>
              </li>
              <li className={styles.item}>
                <a href="">
                  <span></span>
                  <span> Experiências </span>
                </a>
              </li>
              <li className={styles.item}>
                <a href="">
                  <span></span>
                  <span> Experiências </span>
                </a>
              </li>
            </ul>
          </nav>

          <footer className={styles.footer}>
            <a href=""> <GithubLogo size={32} weight="fill" /> </a>
            <a href=""> <InstagramLogo size={32} weight="bold" /> </a>
            <a href=""> <LinkedinLogo size={32} weight="fill" /> </a>
          </footer>
        </div>

        <div className={styles.projects}>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Maxime libero molestiae nesciunt vel voluptas? Nam repellendus
            ex exercitationem iure. Quam maxime, ut cupiditate unde repellendus
            iure eveniet fugiat pariatur tenetur.
          </p>

          <article>

          </article>
        </div>
      </main>
    </>
  )
}
