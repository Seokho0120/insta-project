'use client';
import { SimplePost } from '@/model/post';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import PostDetail from './PostDetail';
import PostModal from './PostModal';
import ModalPortal from './ui/ModalPortal';

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function PostGridCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { image, username } = post;
  const { data: session } = useSession();
  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };

  return (
    <div className='relative w-full aspect-square'>
      <Image
        className='object-cover'
        src={image}
        alt={`photo by ${username}`}
        fill
        priority={priority}
        onClick={handleOpenPost}
      />

      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
