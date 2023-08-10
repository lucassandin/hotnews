"use client"
import Post from "./Post";
import { PostProps } from "../interfaces/interfaces";
import { usePosts } from "../context/PostContext";
import { useEffect } from "react";

export default function Posts() {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts && posts.map((post: PostProps) => {
        return (
          <Post
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