"use client"
import { usePosts } from "../context/PostContext";
import { SubredditProps } from "../interfaces/interfaces";

export default function Hotkeys() {
  const { getPosts } = usePosts();

  const handleGetPosts = (search: string, limit: number) => {
    const defaultParams: SubredditProps = {
      limit,
      q: search,
    }
    getPosts(defaultParams);
  }

  return (
    <div className='flex justify-center gap-4 my-6'>
      <button onClick={() => handleGetPosts("hot", 10)} className='rounded-lg bg-light-grey focus:bg-light-purple w-52 h-12 text-light-font-white'>Hot</button>
      <button onClick={() => handleGetPosts("new", 10)} className='rounded-lg bg-light-grey focus:bg-light-purple w-52 h-12 text-light-font-white'>News</button>
      <button onClick={() => handleGetPosts("rising", 10)} className='rounded-lg bg-light-grey focus:bg-light-purple w-52 h-12 text-light-font-white'>Rising</button>
    </div>
  )
}