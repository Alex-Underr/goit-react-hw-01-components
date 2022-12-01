import PropTypes from 'prop-types';
import StatsItem from './StatItem';
import styles from './statistic.module.css';
export default function Statistic({ title, stats }) {
  return (
    <section className={styles.statList}>
      {title && <h2 class={styles.title}>{title}</h2>}

      <ul className={styles.statItem}>
        {stats.map(item => (
          <StatsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
Statistic.propTypes = { title: PropTypes.string };
