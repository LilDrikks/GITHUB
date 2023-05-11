import React from 'react'

function Caixa(props: any) {
  return (
    <div className='flex flex-col p-4 bg-red-400 rounded-xl cursor-pointer'>
      {props.children}
    </div>
  )
}

export default Caixa