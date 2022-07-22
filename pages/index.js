import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Phase2Module from "../Components/Phase2/Phase2Module";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Munyyb Personal Portfolio</title>
        <meta name="description" content="Munyyb Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <Phase2Module />
      </div>
    </div>
  );
}
