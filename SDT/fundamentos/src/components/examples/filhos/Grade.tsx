import React from 'react'

function Grade(props: any) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {props.children}
    </div>
  )
}

export default Grade