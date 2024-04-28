import styles from "./Bg.module.scss";

const Bg = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.bgCircle} />
      <div className={styles.bgCircle} />
      <div className={styles.bgCircle} />
      <div className={styles.bgCircle} />
      <div className={styles.bgCircle} />
      <div className={styles.bgCircle} />
    </div>
  );
};

export default Bg;
