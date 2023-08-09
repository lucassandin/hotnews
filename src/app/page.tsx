
import { FaPlus } from 'react-icons/fa';
import Hotkeys from './components/hotkeys/Hotkeys';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hotkeys />

        {/* lista */}
        <div className="flex flex-row justify-start py-3 border-t-[1px] border-light-grey">
          <div className="w-20 h-20 bg-light-grey rounded-lg mr-3"></div>
          <div>
            <p className="font-semibold dark:text-dark-font-white">Título do post</p>
            <p className="text-light-font-gray-dark2 dark:text-dark-font-white">enviado há 6 horas por <a href="#" className="text-dark-font-purple">usuário_nickname</a></p>
            <p className="font-bold mt-2 dark:text-dark-font-white">dominio.io</p>
          </div>
        </div>

        <button className='flex justify-center gap-2 items-center w-full rounded-lg bg-light-purple h-12 text-light-font-white mt-2'>
          <FaPlus size={16} />
          Ver mais
        </button>
      </div>
    </>
  )
}
