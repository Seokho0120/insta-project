'use client';
import useSWR from 'swr';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR('/api/me');
  console.log(data);
  // 1. 클 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
  // 4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
  //    (image, username)
  return <p>FollowingBar</p>;
}
