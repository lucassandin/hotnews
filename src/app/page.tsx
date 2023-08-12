
"use client"
import { FaPlus } from 'react-icons/fa';
import { usePosts } from './context/PostContext';
import { ButtonRoot } from './components/button';
import { PostRoot } from './components/post';
import SkeletonLoading from './components/skeletonPosts';
import { useFetchPosts } from './hook/useFetchPosts';

const Home = () => {
  const { params, setParams } = usePosts();
  const { data, error } = useFetchPosts(params);
  
  if(error) return <div>Erro ao carregar os posts</div>

  return (
    <div className="container mx-auto px-4">
      <ButtonRoot.buttons>
        <ButtonRoot.button onClick={() => setParams({ q: "hot", limit: 10 })} text="Hot" />
        <ButtonRoot.button onClick={() => setParams({ q: "new", limit: 10 })} text="News" />
        <ButtonRoot.button onClick={() => setParams({ q: "rising", limit: 10 })} text="Rising" />
      </ButtonRoot.buttons>

      {!data && (
        <SkeletonLoading />
      )}

      <PostRoot.posts posts={data} />

      <ButtonRoot.button 
        onClick={() => setParams({ q: "hot", limit: (params.limit + 10) })}
        text='Ver mais' 
        icon={FaPlus} 
        className='flex justify-center gap-2 items-center w-full rounded-lg bg-light-purple h-12 text-light-font-white mt-2'
      />
    </div>
  )
}

export default Home;