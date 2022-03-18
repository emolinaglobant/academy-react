import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <section className={styles.wrapper}>
      <section className={styles["lds-hourglass"]}></section>
    </section>
  );
};

export default Loading;
