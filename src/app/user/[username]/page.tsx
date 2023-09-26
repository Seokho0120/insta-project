import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React, { cache } from 'react';

type Props = { params: { username: string } };

const getUser = cache(async (username: string) => getUserForProfile(username));
// metadata에서도 getUserForProfile함수 호출, UserPage에서도 getUserForProfile함수 호출함
// 한번 렌더링되는 사이클내에서 여러번 사용하지 않고 재사용하려면? cache를 쓰면됨
// 전달하는 username이 변하지 않으면, 동일한 사용자한에서 캐싱된 username을 사용함

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <section className='w-full'>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);

  return {
    title: `${user?.name} (@${user?.username}) · Instantgram Photos`,
    description: `${user?.name}'s all Instantgram posts`,
  };
}
