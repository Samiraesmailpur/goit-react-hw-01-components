import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: auto;
  width: 300px;
  justify-content: space-between;
  box-shadow: 0 0 5px 1px;
  margin-bottom: 50px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  margin-bottom: 5px;
`;

const Tad = styled.p`
  margin-bottom: 5px;
`;

const Location = styled.p`
  margin-bottom: 20px;
`;

const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: #dcdcdc;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export {
  ProfileContainer,
  Description,
  Avatar,
  Stats,
  Name,
  Tad,
  Item,
  Location,
};
