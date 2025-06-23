import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthContext";
import { getLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const { userData } = useContext(AuthContext); // ✅ From context

  const isLoading = !userData?.employees?.length;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setuser(parsed.role);
      setloggedInUserData(parsed.data);
    }
  }, []);

  const HandleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    // 🔍 Check admin login dynamically
    const adminMatch = admin?.find((a) => a.email === email && a.password === password);
    if (adminMatch) {
      setuser("admin");
      setloggedInUserData(adminMatch);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: adminMatch }));
      return;
    }

    // 🔍 Check employee login dynamically
    const employeeMatch = employees?.find((e) => e.email === email && e.password === password);
    if (employeeMatch) {
      setuser("employee");
      setloggedInUserData(employeeMatch);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employeeMatch }));
      return;
    }

    alert("Invalid email or password");
  };

  if (isLoading && !user) {
    return <div className="text-white text-center mt-10">Loading employee data...</div>;
  }

  return (
    <>
      {!user ? (
        <Login HandleLogin={HandleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setuser} data={loggedInUserData} />
      ) : (
        <EmployeeDashboard changeUser={setuser} data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
