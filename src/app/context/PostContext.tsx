"use client"
import { createContext, useContext, useState } from 'react';
import { PostProps, SubredditProps } from '../interfaces/interfaces';
import { toQueryParams } from '../util/toQueryParams';
import { formatTimeAgo } from '../util/getTime';

interface PostsProviderProps {
  posts: PostProps[];
  getPosts: () => void;
}

const PostsContext = createContext<PostsProviderProps>({} as PostsProviderProps);

const defaultPosts: PostProps[] = [];
const defaultParams: SubredditProps = {
  q: 'new',
  limit: 10,
}

export function PostsProvider({ children }: { children: React.ReactNode}) {
  const [posts, setPosts] = useState<PostProps[]>(defaultPosts);
  const URL_BASE = 'https://www.reddit.com/subreddits/search.json';

  const getPosts = async (params: SubredditProps = defaultParams) => {
    const now = new Date();
    const response = await fetch(`${URL_BASE}?${toQueryParams(params)}`);
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
        domain: `https://www.reddit.com/r/${post.data.display_name}/`,
        thumbnail: post.data.icon_img,
      };
    });
    
    setPosts(results);
  }

  return (
    <PostsContext.Provider value={{
      posts,
      getPosts,
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