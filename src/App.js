import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([{
    id: 1,
    name: "John",
    username: "John123",
    email: "john@john",
    phone: "0999999999",
    website: "john.com",
  },
  {
    id: 2,
    name: "Jane",
    username: "Jane123",
    email: "jane@jane",
    phone: "0999999999",
    website: "jane.com",
  },
  {
    id: 3,
    name: "Mark",
    username: "Mark123",
    email: "mark@mark",
    phone: "0999999999",
    website: "mark.com",
  },]);

  useEffect(() => {
    const fetchUsers = async () => {

      const tempUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(tempUsers.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      <h1>
        Lista de Usuarios
      </h1>
      <table className=" ">
        <thead className=" ">
          <tr>
            <th >#</th>
            <th >Nombre</th>
            <th >Usuario</th>
            <th >Correo electrónico</th>
            <th >Teléfono</th>
            <th >Sitio web</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
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