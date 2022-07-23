import styles from "./Phase2Module.module.css";
import VectorImage from "../vectorImage/vectorImage";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Phase2Module() {
  const [isIntroMsgStarted, setIsIntroMsgStarted] = useState(true);
  const [isProfessionMsgStarted, setIsProfessionMsgStarted] = useState(false);
  const [isVectorImageStarted, setIsVectorImageStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsProfessionMsgStarted(true);
    }, 5000);
    setTimeout(() => {
      setIsVectorImageStarted(true);
    }, 10000);
  }, []);

  return (
    <AnimatePresence>
      <motion.div className={styles.phase2Container}>
        {isIntroMsgStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1 }}
          >
            <h1 className={styles.introMsg}>My Name is Munyyb!</h1>
          </motion.div>
        ) : (
          ""
        )}
        {isProfessionMsgStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1 }}
          >
            <h2 className={styles.professionMsg}>
              I am a Full-stack Developer and UI/UX Designer...
            </h2>
          </motion.div>
        ) : (
          ""
        )}
        {isVectorImageStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            animate={{ opacity: 1 }}
            className={styles.VectorImageContainer}
          >
            <VectorImage />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
    </AnimatePresence>
  );
}
