"use client"
import { createContext, useContext, useState } from 'react';
import { SubredditProps } from '../interfaces/interfaces';

interface PostsProviderProps {
  params: SubredditProps;
  setParams: (params: SubredditProps) => void;
}

const PostsContext = createContext<PostsProviderProps>({} as PostsProviderProps);

const defaultParams: SubredditProps = {
  q: 'hot',
  limit: 10,
}

export function PostsProvider({ children }: { children: React.ReactNode}) {
  const [params, setParams] = useState<SubredditProps>(defaultParams);

  return (
    <PostsContext.Provider value={{
      params,
      setParams,
    }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) throw new Error('Error when using usePosts');

  return context;
}