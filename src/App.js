import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "David",
      username: "David123",
      email: "david@david",
      phone: "098898124",
      website: "www.david.com",
    },
    {
      id: 2,
      name: "Joseph",
      username: "joseph123",
      email: "joseph@joseph",
      phone: "095646524",
      website: "joseph.com",
    },
    {
      id: 3,
      name: "Mark",
      username: "Mark123",
      email: "mark@mark",
      phone: "094656604",
      website: "mark.com",
    },
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      const finalUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(finalUsers.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Lista de usuarios</h1>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Nombre de usuario</th>
            <th>E-mail</th>
            <th>telefono</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default App;
