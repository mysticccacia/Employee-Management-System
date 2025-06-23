import React from 'react';

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  const name = data?.name ? data.name.split(' ')[0] : 'User';
  const isAdmin = data?.email === 'admin@example.com'; // or use data.role === 'admin' if you store that

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {isAdmin ? `Admin ${name}` : name} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
