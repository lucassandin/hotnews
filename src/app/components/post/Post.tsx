import { PostProps } from "@/app/interfaces/interfaces";

export default function Post({ title, subtitle, user, domain, thumbnail }: PostProps ) {
  return (
    <div className="flex flex-row xs-flex-wrap justify-start py-3 border-t-[1px] border-light-grey">
      <div className="">
        <div className="w-20 h-20 bg-light-grey rounded-lg mr-3">
          {thumbnail !== "" && (
            <img src={thumbnail} alt={title} className="w-20 h-20 object-cover rounded-lg" />
          )}
        </div>
      </div>
      <div className="w-full overflow-auto">
        <p className="font-semibold dark:text-dark-font-white text-xl">{title}</p>
        <p className="text-light-font-gray-dark2 dark:text-dark-font-white text-xs">{subtitle} <a href={`https://www.reddit.com/r/${user}/`} target="_blank" className="text-dark-font-purple">{user}</a></p>
        <p className="font-bold mt-2 dark:text-dark-font-white text-xs">{domain}</p>
      </div>
    </div>
  )
}