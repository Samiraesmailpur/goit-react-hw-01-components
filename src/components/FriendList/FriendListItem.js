import { FriendsItem, ImageFriend, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsItem class="item" key={id}>
      <Status type={isOnline}>{isOnline}</Status>
      <ImageFriend class="avatar" src={avatar} alt="User avatar" width="60" />
      <p class="name">{name}</p>
    </FriendsItem>
  );
};
