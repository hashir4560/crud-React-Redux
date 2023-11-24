import "./App.css";
import React from "react"; // Import React
import { useDispatch, useSelector } from "react-redux"; // Fix the import

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch(); // Add useDispatch to dispatch actions

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name ..." />
        <input type="text" placeholder="UserName..." />
        <button>Add User </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
