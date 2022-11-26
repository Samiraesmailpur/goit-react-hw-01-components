import styled from '@emotion/styled';

const Section = styled.section`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  width: 300px;
`;

const Title = styled.h2`
  background-color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px;
`;

const Statlist = styled.ul`
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { Section, Title, Statlist, Item };
