import React from 'react'


const AcceptTask = ({data}) => {
  return (
    <div className='p-5 flex-shrink-0 h-full w-[300px] bg-orange-400 rounded-xl'>
            
            <div className='w-full h-fit flex items-center justify-between'>
                <h3 className=' px-3 py-1 text-sm bg-violet-600 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2 '>
               {data.description}
            </p>

            <div className='flex text-sm justify-between mt-4 '>
                <button className='bg-green-500 py-1 px-2 border-none text-m rounded'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-m rounded border-none'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask