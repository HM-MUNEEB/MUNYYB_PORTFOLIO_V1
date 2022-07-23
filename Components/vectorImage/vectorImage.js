import Image from "next/image";
import styles from "./vectorImage.module.css";
import MUNEEBx from "../../public/MUNEEBx_FG.svg";

export default function VectorImage() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={MUNEEBx}
        alt="vector foreground image"
        className={styles.vectorImage}
        layout="fill"
      />
    </div>
  );
}
