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
                <a href="#">
                  <span></span>
                  <span> Experiências </span>
                </a>
              </li>
              <li className={styles.item}>
                <a href="#">
                  <span></span>
                  <span> Experiências </span>
                </a>
              </li>
              <li className={styles.item}>
                <a href="#">
                  <span></span>
                  <span> Experiências </span>
                </a>
              </li>
            </ul>
          </nav>

          <footer className={styles.footer}>
            <a href="#a"> <GithubLogo size={32} weight="fill" /> </a>
            <a href="#b"> <InstagramLogo size={32} weight="bold" /> </a>
            <a href="#b"> <LinkedinLogo size={32} weight="fill" /> </a>
          </footer>
        </div>

        <section className={styles.projectsSection}>
          <div className={styles.projectsOverflow}>
            <div>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime libero molestiae nesciunt vel voluptas? Nam repellendus
                ex exercitationem iure. Quam maxime, ut cupiditate unde repellendus
                iure eveniet fugiat pariatur tenetur.
              </p>
            </div>

            <article className={styles.project}>
              <a href="#project">
                <div>
                  <strong> Shopfy </strong>
                  <span> Subtitle </span>
                </div>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, illum expedita. Suscipit delectus minima pariatur aut,
                  unde molestias sint. Nihil labore qui officiis,
                  at quo modi delectus quibusdam ipsa repudiandae.
                </p>

                <ul>
                  <li>React</li>
                  <li>Next</li>
                  <li>JavaScript</li>
                  <li>JavaScript</li>
                  <li>JavaScript</li>
                </ul>
              </a>
            </article>
            <article className={styles.project}>
              <a href="https://github.com/ #seila">
                <div>
                  <strong> Shopfy </strong>
                  <span> Subtitle </span>
                </div>

                <p> Alguma descrição detalhada </p>
                <ul>
                  <li>React</li>
                  <li>Next</li>
                  <li>JavaScript</li>
                </ul>
              </a>
            </article>
            <article className={styles.project}>
              <a href="https://github.com/ #seila">
                <div>
                  <strong> Shopfy </strong>
                  <span> Subtitle </span>
                </div>

                <p> Alguma descrição detalhada </p>
                <ul>
                  <li>React</li>
                  <li>Next</li>
                  <li>JavaScript</li>
                </ul>
              </a>
            </article>
            <article className={styles.project}>
              <a href="https://github.com/ #seila">
                <div>
                  <strong> Shopfy </strong>
                  <span> Subtitle </span>
                </div>

                <p> Alguma descrição detalhada </p>
                <ul>
                  <li>React</li>
                  <li>Next</li>
                  <li>JavaScript</li>
                </ul>
              </a>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
