'use client';

import { ProfileUser } from '@/model/user';
import { useState } from 'react';
import PostGrid from './PostGrid';
import BookMarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import PostIcon from './ui/icons/PostIcon';

type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: 'posts', icon: <PostIcon /> },
  { type: 'saved', icon: <BookMarkIcon className='w-3 h-3' /> },
  { type: 'liked', icon: <HeartIcon className='w-3 h-3' /> },
];

export default function UserPosts({ user: { username } }: Props) {
  // tab 3개
  // 1. /api/users/${username}/posts - 사용자의 포스트
  // 2. /api/users/${username}/liked - 사용자가 좋아한 포스트
  // 3. /api/users/${username}/bookmarks - 사용자 북마크

  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul>
        {tabs.map(({ type, icon }) => (
          <li key={type} onClick={() => setQuery(type)}>
            <button>{icon}</button>
            <span>{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
}
