import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
     <Navbar></Navbar>
     <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Tefy Paredes</span>
          </h1>
       </div>
      </header>
      <section id="info" className={styles.infoSection}>
        <img
          src="\img.jpg"
          alt="Imagen"
          className={styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Tefy</span>
          <br />
          <span className={styles.title}>Paredes</span>
          <div className={styles.list}>
            <ul>
             <li>
              <span className={styles.grayText}>Age: </span> 17
             </li>
             <li>
              <span className={styles.grayText}>Nationality: </span> Guatemalan
             </li>
             <li>
              <span className={styles.grayText}> Skill set: </span> Project Management and Financial Performance
             </li>
             <li>
              <span className={styles.grayText}>Language: </span> English, Spanish
             </li>
            </ul>
         </div>
       </div>
      </section>
    </main>
  );
}