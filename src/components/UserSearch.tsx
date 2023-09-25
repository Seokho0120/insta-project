'use client';

import { ProfileUser } from '@/model/user';
import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          autoFocus
          placeholder='Search for a username or name'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>뭔가 잘못 됫음다🤔</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>찾는 사용자가 없어요 🥲</p>
      )}
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <p>{user.username}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
