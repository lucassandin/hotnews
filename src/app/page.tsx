import Header from "@/components/header";
import Hotkeys from "@/components/hotkeys";

import { FaPlus } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Header />
      <Hotkeys />
      
      <div className="container">
        {/* lista */}
        <div className="flex flex-row justify-start py-3 border-t-[1px] border-colors-gray-dark2">
          <div className="w-20 h-20 bg-grey rounded-lg mr-3"></div>
          <div>
            <p className="font-semibold">Título do post</p>
            <p className="text-colors-gray-dark2">enviado há 6 horas por <a href="#" className="text-purple">usuário_nickname</a></p>
            <p className="font-bold mt-2">dominio.io</p>
          </div>
        </div>
        
        <button className='flex justify-center gap-2 items-center w-full rounded-lg bg-purple h-12 text-colors-white mt-2'>
          <FaPlus size={16} /> 
          Ver mais
        </button>
      </div>
    </>
  )
}
