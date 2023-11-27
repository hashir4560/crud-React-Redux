import "./App.css";
import React, { useState } from "react"; // Import React
import { useDispatch, useSelector } from "react-redux"; // Fix the import
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch(); // Add useDispatch to dispatch actions
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newusername, setNewUsername] = useState("");
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name ..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="UserName..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const lastUserId =
              userList.length > 0 ? userList[userList.length - 1].id : 0;
            dispatch(
              addUser({
                id: lastUserId + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type="text"
              placeholder="New Username ..."
              onChange={(event) => {
                setNewUsername(event.target.value);
              }}
            />
            <button
              onClick={() => {
                dispatch(
                  updateUsername({ id: user.id, username: newusername })
                );
              }}
            >
              Update Username
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
