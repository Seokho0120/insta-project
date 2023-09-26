'use client';

import { HomeUser, ProfileUser } from '@/model/user';
import useSWR from 'swr';
import Button from './ui/Button';

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInuser } = useSWR<HomeUser>('/api/me');

  const showButton = loggedInuser && loggedInuser.username !== username;
  const following =
    loggedInuser &&
    loggedInuser.following.find((item) => item.username === username);
  const text = following ? 'Unfollow' : 'Follow';

  return (
    <>
      {showButton && (
        <Button text={text} onClick={() => {}} red={text === 'Unfollow'} />
      )}
    </>
  );
}
