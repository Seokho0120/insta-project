import NewPost from '@/components/NewPost';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'New Post',
  description: 'Creat a new post',
};

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/auth/signin');
  }

  return <NewPost user={session.user} />;
}
