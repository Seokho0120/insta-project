import { searchUsers } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { keyword: string };
};
export async function GET(_: NextRequest, context: Context) {
  // 사용하지 않는 인자는 _ 언더바로 자주 사용함

  return searchUsers(context.params.keyword) //
    .then((data) => NextResponse.json(data));
}
