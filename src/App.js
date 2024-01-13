import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "kevin",
      username: "ilinkzzx",
      email: "ilinkzzx@gmail.com",
      phone: "0992883356"
    }
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      const tempUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(tempUsers.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        Lista de contacto
        <table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Nombre
              </th>
              <th>
                Username
              </th>
              <th>
                Email
              </th>
              <th>
                Telefono
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              <tr key={index}>
                <td >{user.id}</td>
                <td >{user.name}</td>
                <td >{user.username}</td>
                <td >{user.email}</td>
                <td >{user.phone}</td>
              </tr>
            )}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
