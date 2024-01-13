import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Diego",
      username: "Constante",
      email: "dsconstante@",
      phone: "0999999999",
      website: "Goshira.com",
    },
    {
      id: 2,
      name: "Saul",
      username: "Rubio",
      email: "Sralonso@",
      phone: "0199999999",
      website: "EXEn.com",
    },
    {
      id: 3,
      name: "Sam",
      username: "Drew",
      email: "Sam@",
      phone: "0989999999",
      website: "Sam.com",
    },
  ]);

  useEffect(() => {
    const dataUser = async () => {
      const tempUser = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(tempUser.data);
    };
    dataUser();
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Lista de Usuarios</h1>
      <table
        style={{ margin: "auto", textAlign: "left", borderSpacing: "20px" }}
      >
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Sitio Web</th>
        </tr>
        {users.map((user, element) => (
          <tr>
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
}

export default App;
