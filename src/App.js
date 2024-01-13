import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [user, setuser] = useState([
    {
      id: 1,
      name: "bryan",
      username: "bspillajo",
      email: "pillajob100",
      number: "0984028126",
      web: "bryan.com",
    },
    {
      id: 2,
      name: "andrea",
      username: "anherrera",
      email: "estefania",
      number: "0098402515",
      web: "andrea.com",
    },
    {
      id: 3,
      name: "andres",
      username: "anperez",
      email: "andes12",
      number: "09151632545",
      web: "andres.com",
    },
  ]);

  useEffect(() => {
    const fetchuser = async () => {
      const tempuser = await axios.get("https://jsonplaceholder.typicode.com/users"

      );
      setuser(tempuser.data);
    };
    fetchuser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Lista de Usuarios</header>
      <table>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>nombre de usuario</th>
          <th>Email</th>
          <th>numero</th>
          <th>web</th>
        </tr>
        {user.map((user, index) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.number}</td>
            <td>{user.web}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;