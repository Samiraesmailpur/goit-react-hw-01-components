import styled from '@emotion/styled';

const FriendsItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const ImageFriend = styled.img`
  margin-right: 20px;
`;

const bgColor = props => {
  switch (props.type) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'black';
  }
};

const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 20px;
  background-color: ${bgColor};
`;

export { FriendsItem, ImageFriend, Status };
