import { getUserByUsername } from '@/service/user';
import { withSessionUser } from '@/util/session';
import { NextResponse } from 'next/server';

export async function GET() {
  return withSessionUser(async (user) =>
    getUserByUsername(user.username) //
      .then((data) => NextResponse.json(data))
  );
}
