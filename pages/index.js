import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Phase2Module from "../Components/Phase2/Phase2Module";
import Phase1Module from "../Components/Phase1/Phase1Module";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPhase1Completed, setIsPhase1Completed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPhase1Completed(true);
    }, 5500);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Munyyb Personal Portfolio</title>
        <meta name="description" content="Munyyb Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <Phase1Module />
        {isPhase1Completed ? <Phase2Module /> : ""}
      </div>
    </div>
  );
}
