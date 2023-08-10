
import { FaPlus } from 'react-icons/fa';
import Hotkeys from './components/Hotkeys';
import Posts from './components/Posts';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hotkeys />

      <Posts />

      <button className='flex justify-center gap-2 items-center w-full rounded-lg bg-light-purple h-12 text-light-font-white mt-2'>
        <FaPlus size={16} />
        Ver mais
      </button>
    </div>
  )
}
