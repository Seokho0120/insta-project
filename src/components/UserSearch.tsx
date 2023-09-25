'use client';

import { useState } from 'react';
import useSWR from 'swr';

export default function UserSearch() {
  // 사용자가 키워드를 입력하면 api/search/${keyword} 호출
  // api route에서는 검색하는 keyword가 있다면 /api/seacrh/bob -> 사용자의 유저네임이나 네임에 bob이 있다면 찾아서 리턴해줌
  // 검색하는 keyword가 없다면 /api/seacrh -> 전체 유저 리턴

  const [keyword, setKeyword] = useState('');
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log('data', data);
  return <></>;
}
