"use client"

export default function Error({ error, reset }: any) {
  return (
    <div className="container mx-auto px-4 w-96 mt-6">
      <div role="alert">
        <div className="bg-[#ff0000ab] text-light-font-white font-bold rounded-t px-4 py-2">
          Erro
        </div>
        <div className="border border-t-0 border-[##ff0000ab] rounded-b bg-red-100 px-4 py-3 text-[#9d0101d9]">
          <p>{error.message}</p>
          <div className="flex flex-row justify-end">
            <button onClick={reset} className="bg-[#9d0101d9] text-light-font-white font-bold rounded-lg px-4 py-2 mt-4">Reiniciar aplicação</button>
          </div>
        </div>
      </div>
    </div>
  )
}