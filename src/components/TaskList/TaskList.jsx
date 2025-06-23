import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const TaskList = ({data}) => {
   
  return (
    <div id='tasklist' className='flex item-center justify-start gap-5 flex-nowrap mt-10 h-[55%] overflow-x-auto py-5 w-full'>
        {
            data.tasks.map((elem,idx)=>{
                if(elem.active){
                   return <AcceptTask key={idx} data = {elem}/>
                }
                if(elem.newTask=='T'){
                    return <NewTask key={idx} data = {elem} />
                }
                if(elem.completed=='T'){
                    return <CompleteTask key={idx} data = {elem} />
                }
                if(elem.failed=='T'){
                    return <FailedTask key={idx} data = {elem} />
                }
            })
        }

        {/* <AcceptTask/>
        <NewTask/>
       <CompleteTask/>
       <FailedTask/> */}
    </div>
  )
}

export default TaskList