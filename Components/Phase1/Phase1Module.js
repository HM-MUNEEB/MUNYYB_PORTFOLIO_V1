import styles from "./Phase1Module.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Phase1Module() {
  const [isSectionVisible, setIsSectionVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSectionVisible(false);
    }, 5000);
  }, []);

  return (
    <AnimatePresence className={styles.phase1Container}>
      {isSectionVisible ? (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.globalGreetingMsg}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1>Hi</h1>
            </motion.div>
          </motion.div>
        </>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}
