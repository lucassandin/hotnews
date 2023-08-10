
"use client"
import { FaPlus } from 'react-icons/fa';
import Hotkeys from './components/Hotkeys';
import Posts from './components/Posts';
import { usePosts } from './context/PostContext';
import { SubredditProps } from './interfaces/interfaces';

export default function Home() {
  const { params, getPosts } = usePosts();

  const handleGetPosts = (limit: number) => {
    const defaultParams: SubredditProps = {
      ...params,
      limit,
    }
    getPosts(defaultParams);
  }

  return (
    <div className="container mx-auto px-4">
      <Hotkeys />

      <Posts />

      <button onClick={() => handleGetPosts((params.limit + 10))} className='flex justify-center gap-2 items-center w-full rounded-lg bg-light-purple h-12 text-light-font-white mt-2'>
        <FaPlus size={16} />
        Ver mais
      </button>
    </div>
  )
}
