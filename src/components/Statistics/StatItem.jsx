import PropTypes from 'prop-types';
import styles from './statistic.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function StatItem({ id, label, percentage }) {
  return (
    <li
      style={{ backgroundColor: getRandomHexColor(), padding: '20px' }}
      id={id}
    >
      <span className={styles.label}>
        {label}
        <br></br>
      </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
