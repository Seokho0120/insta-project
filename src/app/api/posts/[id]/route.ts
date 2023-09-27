import { getPost } from '@/service/posts';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async () => {
    return getPost(context.params.id) //
      .then((data) => NextResponse.json(data));
  });
}
