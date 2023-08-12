import { PostProps } from "@/app/interfaces/interfaces";
import { PostRoot } from ".";

interface PostsProps {
  posts: PostProps[] | undefined;
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      {posts && posts.map((post: PostProps) => {
        return (
          <PostRoot.post
            key={post.user}
            title={post.title}
            subtitle={post.subtitle}
            user={post.user}
            domain={post.domain}
            thumbnail={post.thumbnail}
          />
        )
      })}
    </>
  )
}