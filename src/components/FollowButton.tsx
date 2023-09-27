'use client';

import useMe from '@/hooks/me';
import { ProfileUser } from '@/model/user';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { PulseLoader } from 'react-spinners';
import Button from './ui/Button';

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInuser, toggleFollow } = useMe();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isUpdating = isPending || isFetching;

  const showButton = loggedInuser && loggedInuser.username !== username;
  const following =
    loggedInuser &&
    loggedInuser.following.find((item) => item.username === username);

  const text = following ? 'Unfollow' : 'Follow';

  const handleFollow = async () => {
    setIsFetching(true);
    await toggleFollow(user.id, !following);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      {showButton && (
        <div className='relative'>
          {isUpdating && (
            <div className='absolute z-20 inset-0 flex justify-center items-center'>
              <PulseLoader size={6} />
            </div>
          )}
          <Button
            disabled={isUpdating}
            text={text}
            onClick={handleFollow}
            red={text === 'Unfollow'}
          />
        </div>
      )}
    </>
  );
}
