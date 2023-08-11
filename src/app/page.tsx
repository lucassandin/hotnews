
"use client"
import { FaPlus } from 'react-icons/fa';
import { usePosts } from './context/PostContext';
import { SubredditProps } from './interfaces/interfaces';
import { ButtonRoot } from './components/button';
import { PostRoot } from './components/post';
import { useCallback, useEffect, useMemo } from 'react';

export default function Home() {
  const { params, posts, getPosts } = usePosts();

  const handleGetPosts = useCallback((search: string, limit: number) => {
    const defaultParams: SubredditProps = {
      limit,
      q: search,
    };
    getPosts(defaultParams);
  }, [getPosts]);

  const memoizedPosts = useMemo(() => posts, [posts]);

  useEffect(() => {
    handleGetPosts(params.q, params.limit);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <ButtonRoot.buttons>
        <ButtonRoot.button onClick={() => handleGetPosts("hot", 10)} text="Hot" />
        <ButtonRoot.button onClick={() => handleGetPosts("new", 10)} text="News" />
        <ButtonRoot.button onClick={() => handleGetPosts("rising", 10)} text="Rising" />
      </ButtonRoot.buttons>

      <PostRoot.posts posts={memoizedPosts} />

      <ButtonRoot.button 
        onClick={() => handleGetPosts(params.q, (params.limit + 10))} 
        text='Ver mais' 
        icon={FaPlus} 
        className='flex justify-center gap-2 items-center w-full rounded-lg bg-light-purple h-12 text-light-font-white mt-2'
      />
    </div>
  )
}
