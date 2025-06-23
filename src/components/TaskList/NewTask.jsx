import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='p-5 flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl'>
            
            <div className='w-full h-fit flex items-center justify-between'>
                <h3 className=' px-3 py-1 text-sm bg-red-600 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2 '>
               {data.description}
            </p>

            <div className='mt-4'>
                <button className='bg-green-500 py-1 px-2 text-m border-none rounded'>Aceept Task</button>
            </div>
        </div>
  )
}

export default NewTask