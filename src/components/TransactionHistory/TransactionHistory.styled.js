import styled from '@emotion/styled';

const Table = styled.table`
  margin: auto;
  width: 600px;
  box-shadow: 0 0 5px;

  th {
    padding: 20px;
  }
`;

const TableBody = styled.tbody`
  text-align: center;

  td {
    padding: 15px;
  }
`;

const TrBody = styled.tr`
  :nth-child(2n) {
    background-color: #dcdcdc;
  }
  :nth-child(odd) {
    background-color: #fff;
  }

  :hover,
  :focus {
    background-color: #a9a9a9;
  }
`;

const TrHead = styled.tr`
  background-color: #00ced1;
`;

export { Table, TableBody, TrBody, TrHead };
