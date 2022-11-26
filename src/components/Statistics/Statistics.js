import PropTypes from 'prop-types';
import { Section, Title, Statlist, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section class="statistics">
      {title ? <Title>{title}</Title> : ''}
      <Statlist>
        {stats.map(({ id, label, percentage }) => (
          <Item
            class="item"
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </Item>
        ))}
      </Statlist>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
