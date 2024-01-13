// React
import React, { useState, useEffect } from "react";

// Axios
import axios from "axios";

const getDefaultUsers = () => [
  {
    id: 1,
    name: "Usuario Predeterminado",
    username: "default_user",
    email: "default@example.com",
    phone: "123-456-7890",
    website: "example.com",
  },
  {
    "id": 2,
    "name": "Usuario Secundario",
    "username": "secondary_user",
    "email": "secondary@example.com",
    "phone": "987-654-3210",
    "website": "secondaryuser.com"
  },
  {
    "id": 3,
    "name": "Usuario Adicional",
    "username": "additional_user",
    "email": "additional@example.com",
    "phone": "555-123-4567",
    "website": "additionaluser.com"
  }
];

function App() {

  // Lógica
  const [users, setUsers] = useState(getDefaultUsers);

  useEffect(() => {

    const UsersFetch = async () => {
      try {
        const Users = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(Users.data);
      } catch (error) {
        console.error("No se encontró ningún usuario:", error);
      }
    }
    UsersFetch();
  }, [users]);

  return (
    <div className="App container">
      <h1 className="display-4 fw-semibold text-dark text-center mt-5">
        Lista de Usuario
      </h1>
      <table className="table table-bordered mt-5">
        <thead className="table-primary">
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
