import styles from './index.scss';

export const Animation = () => {
  return (
    <div aria-busy='true' aria-label='Loading' role='progressbar' className={styles.box}>
      <div className={styles.swing}>
        <div className={styles['swing-l']}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles['swing-r']}></div>
      </div>
      <div className={styles.shadow}>
        <div className={styles['shadow-l']}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles['shadow-r']}></div>
      </div>
    </div>
  );
};
