import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(()=> {
    const fetchUsers = async () => {
      const tempUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log({data: tempUsers.data});
      setUser(tempUsers.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Lista de usuarios</header>
      <table>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Username</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Direccion</th>
        </tr>
        {user.map((user, index)=>(
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
