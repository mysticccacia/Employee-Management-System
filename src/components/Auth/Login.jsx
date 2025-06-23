import React, { useState } from 'react';

const Login = ({ HandleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    HandleLogin(email, password);
    setEmail('');
    setpassword('');
  };

  return (
    <div className="h-screen w-screen flex bg-gradient-to-br from-zinc-900 to-gray-800 text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-zinc-950">
        <h1 className="text-5xl font-bold text-emerald-400 mb-4 animate-text leading-tight">
            <div className="flex flex-wrap text-center gap-2">
                <span className="word delay-0">Employee</span>
                <span className="word delay-1">Management</span>
                <span className="word delay-2">System</span>
            </div>
            </h1>


        <p className="text-gray-300 text-lg">
          Manage your team's tasks, performance, and productivity in one place.
        </p>
        {/* <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/team-work-6771121-5614396.png"
          alt="team"
          className="mt-10 w-[80%]"
        /> */}
      </div>

      {/* Right Section - Login */}
      <div className="w-1/2 flex items-center justify-center relative">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-10 py-12 w-[80%] shadow-lg">
          <h2 className="text-3xl font-bold text-emerald-400 text-center mb-6">Welcome Back</h2>
          <form onSubmit={submitHandler} className="flex flex-col gap-5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="bg-transparent border-b-2 border-emerald-500 py-3 px-2 outline-none placeholder:text-white text-white"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className="bg-transparent border-b-2 border-emerald-500 py-3 px-2 outline-none placeholder:text-white text-white"
            />
            <button
              type="submit"
              className="mt-6 py-3 text-lg bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 transition-all text-white font-semibold rounded-full"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
