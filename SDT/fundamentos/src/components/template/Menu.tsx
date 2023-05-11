import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

function Menu({children}: Props) {
  return (
    <div className='flex flex-col flex-wrap gap-20'>
      {children}
    </div>
  )
}

export default Menu