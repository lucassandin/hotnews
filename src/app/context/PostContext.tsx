"use client"
import { createContext, useContext, useState } from 'react';
import { PostProps, SubredditProps } from '../interfaces/interfaces';
import { toQueryParams } from '../util/toQueryParams';
import { formatTimeAgo } from '../util/formatTimeAgo';

interface PostsProviderProps {
  posts: PostProps[];
  getPosts: (params?:SubredditProps) => void;
  params: SubredditProps;
}

const PostsContext = createContext<PostsProviderProps>({} as PostsProviderProps);

const defaultPosts: PostProps[] = [];
const defaultParams: SubredditProps = {
  q: 'hot',
  limit: 10,
}

export function PostsProvider({ children }: { children: React.ReactNode}) {
  const [posts, setPosts] = useState<PostProps[]>(defaultPosts);
  const [params, setParams] = useState<SubredditProps>(defaultParams);
  const URL_BASE = 'https://www.reddit.com/subreddits/search.json';

  const getPosts = async (queryParams: SubredditProps = defaultParams) => {
    const now = new Date();
    const response = await fetch(`${URL_BASE}?${toQueryParams(queryParams)}`);
    const data = await response.json();

    const results: PostProps[] = data.data.children.map((post: any): PostProps => {
      const subtitleTimestamp = post.data.created_utc;
      const subtitleDatetime = new Date(subtitleTimestamp * 1000);
      const timeDifference = now.getTime() - subtitleDatetime.getTime();
      const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
      const subtitle = formatTimeAgo(hoursAgo);

      return {
        title: post.data.title,
        user: post.data.display_name,
        subtitle,
        domain: post.data.display_name_prefixed,
        thumbnail: post.data.icon_img,
      };
    });
    
    setParams(queryParams);
    setPosts(results);
  }

  return (
    <PostsContext.Provider value={{
      posts,
      getPosts,
      params
    }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) throw new Error('UsePosts must be used within a PostsContext');

  return context;
}