export interface PostProps {
  title: string;
  subtitle: string;
  user: string;
  domain: string;
  thumbnail: string;
}

export interface SubredditProps {
  q: string
  limit: number
}