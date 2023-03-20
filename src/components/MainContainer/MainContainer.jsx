import styles from './MainContainer.module.css';

export const MainContainer = ({ children }) => {
  return <div className={styles.mainContainer}>{children}</div>;
};
