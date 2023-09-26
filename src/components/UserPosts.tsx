'use client';

import { ProfileUser } from '@/model/user';
import { useState } from 'react';
import useSWR from 'swr';

type Props = {
  user: ProfileUser;
};

export default function UserPosts({ user: { username } }: Props) {
  // tab 3개
  // 1. /api/users/${username}/posts - 사용자의 포스트
  // 2. /api/users/${username}/liked - 사용자가 좋아한 포스트
  // 3. /api/users/${username}/bookmarks - 사용자 북마크

  const [tab, setTab] = useState('saved');
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);
  console.log(posts);

  return <></>;
}
