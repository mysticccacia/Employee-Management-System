import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


const AllTask = () => {

     const { userData } = useContext(AuthContext);

    if (!userData || !userData.employees) {
    return <div className="text-white p-4">Loading tasks...</div>;
  }
    // const authData = useContext(AuthContext)
    // console.log(authData.employees)
  return (
<>
    
    <div className='bg-[#1c1c1c] h-fit   rounded mt-3 p-5'>
         <div className='bg-green-700 mb-2 flex justify-between rounded py-2 px-4'>
            <h2 className='w-1/5 font-bold'>Employee's Name</h2>
            <h3 className='w-1/5 font-bold'>New Tasks</h3>
            <h5 className='w-1/5 font-bold'>Active</h5>
            <h5 className='w-1/5 font-bold'>Completed</h5>
            <h5 className='w-1/5 font-bold'>Failed</h5>
        </div>
        {userData.employees.map((elem,idx)=>{
            return  <div key={idx} className='border  w-full mb-2 flex justify-between rounded py-2 px-4'>
            <h2 className='w-1/5 font-bold'>{elem.name}</h2>
            <h3 className='w-1/5 font-bold '>{elem.taskStats.new || 0}</h3>
            <h5 className='w-1/5 font-bold'>{elem.taskStats.active || 0}</h5>
            <h5 className='w-1/5 font-bold'>{elem.taskStats.completed || 0}</h5>
            <h5 className='w-1/5 font-bold'>{elem.taskStats.failed || 0}</h5>
        </div>
        })}  
    </div>
    </>
  )
}

export default AllTask