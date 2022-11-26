import PropTypes from 'prop-types';
import { Table, TableBody, TrBody, TrHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
      <thead>
        <TrHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TrHead>
      </thead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TrBody key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TrBody>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
