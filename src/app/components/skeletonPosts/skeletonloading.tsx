"use client"
import { usePosts } from "@/app/context/PostContext";

export default function SkeletonLoading() {
  const { params } = usePosts();

  return (
    <div className="container mx-auto px-4">
      {Array.from({ length: params.limit }).map((_, i) => (
        <div key={i} className="animate-pulse flex flex-row xs-flex-wrap justify-start py-3 border-t-[1px] border-light-grey">
          <div className="">
            <div className="w-20 h-20 bg-light-grey rounded-lg mr-3"></div>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-light-grey rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-light-grey rounded-full dark:bg-gray-700 max-w-[480px] mt-5"></div>
            <div className="h-2 bg-light-grey rounded-full dark:bg-gray-700 max-w-[280px] mt-8"></div>
          </div>
        </div>
      ))}
    </div>
  )
}