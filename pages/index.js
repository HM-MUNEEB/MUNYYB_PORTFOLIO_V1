import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import VectorImage from "../Components/vectorImage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Munyyb Personal Portfolio</title>
        <meta name="description" content="Munyyb Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.VectorImageContainer}>
          <VectorImage />
        </div>
        <h1 className={styles.introMsg}>My Name is Munyyb!</h1>
        <h2 className={styles.professionMsg}>
          I am a Full-stack Developer and UI/UX Designer...
        </h2>
      </div>
    </div>
  );
}
