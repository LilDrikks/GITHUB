import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Linha({ children }: Props) {
  return (
    <div className='flex flex-wrap justify-center gap-20'>
      {children}
    </div>
  )
}

export default Linha