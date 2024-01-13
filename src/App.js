import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const responseUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(responseUsers.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Lista de Usuarios</header>
      <table>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Nommbre Usuario</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Web</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
