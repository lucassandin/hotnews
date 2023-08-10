
"use client"
import { FaPlus } from 'react-icons/fa';
import Posts from './components/Posts';
import { usePosts } from './context/PostContext';
import { SubredditProps } from './interfaces/interfaces';
import { ButtonRoot } from './components/button';

export default function Home() {
  const { params, getPosts } = usePosts();

  const handleGetPosts = (search: string, limit: number) => {
    const defaultParams: SubredditProps = {
      limit,
      q: search,
    }
    getPosts(defaultParams);
  }

  return (
    <div className="container mx-auto px-4">
      <ButtonRoot.buttons>
        <ButtonRoot.button onClick={() => handleGetPosts("hot", 10)} text="Hot" />
        <ButtonRoot.button onClick={() => handleGetPosts("new", 10)} text="News" />
        <ButtonRoot.button onClick={() => handleGetPosts("rising", 10)} text="Rising" />
      </ButtonRoot.buttons>

      <Posts />

      <ButtonRoot.button 
        onClick={() => handleGetPosts(params.q, (params.limit + 10))} 
        text='Ver mais' 
        icon={FaPlus} 
        className='flex justify-center gap-2 items-center w-full rounded-lg bg-light-purple h-12 text-light-font-white mt-2'
      />
    </div>
  )
}
