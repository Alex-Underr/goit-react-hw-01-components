import PropTypes from 'prop-types';
import StatsItem from './StatItem';

export default function stats({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(item => (
          <StatsItem
            label={item.label}
            id={item.id}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
stats.propTypes = { title: PropTypes.string };
