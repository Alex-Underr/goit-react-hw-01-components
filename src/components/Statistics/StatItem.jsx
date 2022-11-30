import PropTypes from 'prop-types';

export default function statItem({ id, label, percentage }) {
  return (
    <li class="item" id={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}

statItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
