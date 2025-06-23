import React, { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
const CreateTask = () => {

  const { userData, setUserData } = useContext(AuthContext);


  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')
  // const [newTask, setNewTask] = useState({})

  

  const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category,
    active: true,
    newTask: "T",
    completed: "F",
    failed: "F"
  };

  const data = JSON.parse(localStorage.getItem('employees'));

   const updatedEmployees = data.map((emp) => {
    if (assignTo.trim().toLowerCase() === emp.name.toLowerCase()) {
      const updatedTasks = [...emp.tasks, newTask];

      const updatedStats = {
        ...emp.taskStats,
        active: emp.taskStats.active + 1,
        new: emp.taskStats.new + 1,
      };

      return {
        ...emp,
        tasks: updatedTasks,
        taskStats: updatedStats
      };
    }
    return emp;
  });

  // Save to localStorage
  localStorage.setItem('employees', JSON.stringify(updatedEmployees));

  // Update context (triggers UI update in AllTask)
  setUserData({
    ...userData,
    employees: updatedEmployees
  });

  // Clear form
  settaskTitle('');
  settaskDescription('');
  settaskDate('');
  setassignTo('');
  setcategory('');
};


  return (
     <div>
         <form onSubmit={(e)=>{
          submitHandler(e)
         }} className="mt-10 rounded-s-md p-5 flex flex-wrap w-full bg-[#1c1c1c] item-start justify-between">

          <div className="w-1/2">

            <div className="">
              <h3 className="font-semibold mb-1.5">Task Title</h3>

              <input onChange={(e)=>{settaskTitle(e.target.value)}} name='Title' type="text" className=" border-amber-50 outline-none border-1 rounded-sm  p-1.5 placeholder:text-white w-[75%]" placeholder="Make a UI/UX Design" value={taskTitle} />

            </div>

            <div>
              <h3  className="font-semibold mb-1.5">Date</h3>

              <input onChange={(e)=>{settaskDate(e.target.value)}} value={taskDate} name='Date' className=" border-amber-50 border-1 outline-none  rounded-sm  p-1.5 placeholder:text-white w-[75%]" type="date" />

            </div>

            <div>
              <h3  className="font-semibold mb-1.5">Assign to</h3>

              <input onChange={(e)=>{setassignTo(e.target.value)}} value={assignTo} name='Assign' className=" border-amber-50 border-1 outline-none  rounded-sm  p-1.5 placeholder:text-white w-[75%]" type="text" placeholder="Employee Name" />

            </div>

            <div>
              <h3  className="font-semibold mb-1.5">Category</h3>

              <input onChange={(e)=>{setcategory(e.target.value)}} value={category} className=" border-amber-50 border-1 outline-none  rounded-sm  p-1.5 placeholder:text-white w-[75%]" type="text" placeholder="Design/Dev..etc" name="Category" id="" />

            </div>
          </div>

          <div className="w-1/2 flex flex-col">
            <h3>Description</h3>

            <textarea onChange={(e)=>{settaskDescription(e.target.value)}} value={taskDescription}  name="Description" cols="30" rows="10" id="desc" className='mt-1.5 bg-gray-700 rounded-sm p-1.5 border-none'>

            </textarea>

          <button  className="active:bg-green-800 mt-2 p-1.5 bg-green-700 rounded-sm">Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask


