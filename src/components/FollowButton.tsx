'use client';

import useMe from '@/hooks/me';
import { ProfileUser } from '@/model/user';
import Button from './ui/Button';

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInuser, toggleFollow } = useMe();

  const showButton = loggedInuser && loggedInuser.username !== username;
  const following =
    loggedInuser &&
    loggedInuser.following.find((item) => item.username === username);
  const text = following ? 'Unfollow' : 'Follow';

  const handleFollow = () => {
    toggleFollow(user.id, !following);
  };

  return (
    <>
      {showButton && (
        <Button text={text} onClick={handleFollow} red={text === 'Unfollow'} />
      )}
    </>
  );
}
