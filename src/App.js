import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const tempUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(tempUsers.data);
      } catch (error) {
        console.error("No se encontró ningún usuario:", error);
      }
    }
    fetchUsers();
  }, [users]);

  return (
    <div className="App container">
      <h1 className="display-4 fw-semibold text-dark text-center my-5">
        <center>Lista de Usuario</center>  
      </h1>
      <table className="table table-bordered mt-5">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
