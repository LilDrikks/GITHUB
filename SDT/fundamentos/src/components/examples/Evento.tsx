import React, { useState } from 'react'
import { IconPlus, IconMinus } from "@tabler/icons-react";

function Evento() {
  const [valor, setValor] = useState(0)
  return (
    <div className='flex flex-col h-screen bg-black text-white justify-center items-center gap-4'>
      <span className='text-3xl'><b>Valor:</b> {valor}</span>
      <div className='flex gap-2'>
      <button className='border py-2 px-10 rounded-lg hover:bg-slate-700' onClick={() => setValor(valor + 1)}>
        <IconPlus />
      </button>
      <button className='border py-2 px-10 rounded-lg hover:bg-slate-700' onClick={() => setValor(valor - 1)}>
        <IconMinus />
      </button>
      </div>
    </div>
  )
}

export default Evento