import styles from '../styles/sobre/sobre.module.css'
import selfie from '../assets/myself.png'
import Image from 'next/image'

export default function Sobre(){
    return (
        <main className={styles.aboutMain}>
            <div className={styles.myselfDiv}>
                <div className={styles.presentation}>
                    <span>Desenvolvedor Web</span>
                    <strong> Ei Devs!,<br/> Eu sou Thomás Dixini.<br/> E este é meu portfólio Dev</strong>
                </div>
                <div className={styles.selfieImage}>
                    <Image src={selfie} alt="" height={600} max-width={500}/>
                </div>
            </div>
        </main>
    )
}