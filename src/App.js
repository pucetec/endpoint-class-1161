import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Josue",
      username: "Josue0724",
      email: "jeauquilla@puce.edu.ec",
      phone: "0995702068",
      website: "JosueA0724",
    },
    {
      id: 2,
      name: "Andres",
      username: "Andres1125",
      email: "auquilla07@hotmail.es",
      phone: "0983996652",
      website: "Andy.com.es",
    },
    {
      id: 3,
      name: "Jorge",
      username: "jorgeauquilla@gmail.com",
      email: "gramiro121",
      phone: "0983906688",
      website: "SolucionesTec.com",
    },
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      const tempUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(tempUsers.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{textAlign:'center'}}> Lista de Usuarios</h1>
      </header>
      <table style={{paddingRight: 'center', background:'skyblue'}}>
        <tr>
          <th>#ID</th>
          <th>Nombre</th>
          <th>Username</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Website</th>
        </tr>
        {users.map((user) => (
          <tr style={{textAlign:'center'}}>
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