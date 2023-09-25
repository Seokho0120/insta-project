import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { username: string };
};

export default async function UserPage({ params: { username } }: Props) {
  // 상단: 사용자의 프로필 이미지와 정보(username, name, 숫자)
  // 하단: 3개의 탭(posts, liked, bookmarks)
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }

  return <UserProfile user={user} />;
}
