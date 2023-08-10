import { PostProps } from "../interfaces/interfaces";

export default function Post({ title, subtitle, user, domain, thumbnail }: PostProps ) {
  return (
    <div className="flex flex-row justify-start py-3 border-t-[1px] border-light-grey">
      <div className="w-20 h-20 bg-light-grey rounded-lg mr-3">
        {thumbnail !== "" && (
          <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded-lg" />
        )}
      </div>
      <div>
        <p className="font-semibold dark:text-dark-font-white">{title}</p>
        <p className="text-light-font-gray-dark2 dark:text-dark-font-white">{subtitle} <a href={`https://www.reddit.com/r/${user}/`} target="_blank" className="text-dark-font-purple">{user}</a></p>
        <p className="font-bold mt-2 dark:text-dark-font-white">{domain}</p>
      </div>
    </div>
  )
}