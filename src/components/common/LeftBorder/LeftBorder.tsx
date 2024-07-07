import styles from './LeftBorder.module.scss';
import { LeftBorderProps } from './LeftBorder.types';

const LeftBorder = ({ color: background }: LeftBorderProps) => (
  <span className={styles.border} style={{ background }} />
);

export default LeftBorder;
