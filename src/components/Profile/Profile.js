import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Stats,
  Name,
  Tad,
  Item,
  Location,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tad>@{tag}</Tad>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <Item>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </Item>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
