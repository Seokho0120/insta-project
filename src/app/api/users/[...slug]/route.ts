import { getLikedPostsOf, getPostOf, getSavedPostsOf } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { slug: string[] }; // slug/slug/slug.. 처럼 뒤에 계속 붙어야되므로
};

export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if ((!slug && !Array.isArray(slug)) || slug.length < 2) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  const [username, query] = slug;

  let request = getPostOf;
  if (query === 'saved') {
    request = getSavedPostsOf;
  } else if (query === 'liked') {
    request = getLikedPostsOf;
  }

  return request(username).then((data) => NextResponse.json(data));
}
