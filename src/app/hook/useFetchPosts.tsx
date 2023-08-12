import useSWR from "swr";
import { PostProps, SubredditProps } from "../interfaces/interfaces";
import { formatTimeAgo } from "../util/formatTimeAgo";

export interface FetchProps {
  data: any | undefined;
  error: any;
}

export function useFetchPosts(params: SubredditProps): FetchProps {
  try {
    const redditApiUrl = process.env.NEXT_PUBLIC_REDDIT;
    const url = `${redditApiUrl}?q=${params.q}&limit=${params.limit}`;
  
    const { data, error } = useSWR(url, async (url) => {
      const response = await fetch(url);
      const resultset = await response.json();
  
      const data: PostProps[] = resultset.data.children.map((post: any): PostProps => {
        const subtitleTimestamp = post.data.created_utc;
        const subtitleDatetime = new Date(subtitleTimestamp * 1000);
        const timeDifference = new Date().getTime() - subtitleDatetime.getTime();
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
  
      return data;
    })
  
    return { data, error };
  } catch (error) {
    throw new Error('Erro ao consultar Reddit')
  }
}