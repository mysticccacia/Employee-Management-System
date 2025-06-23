import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="w-full h-screen p-10">
      <Header changeUser={props.changeUser} data = {props.data} />
    <CreateTask></CreateTask>
     <AllTask></AllTask>
    </div>
  );
};

export default AdminDashboard;
