import { useEffect, useState } from "react";
import Table from "../Table";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoadingUsers(true);
      try {
        const res = await fetch("http://localhost:8000/admin/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setUsers([]);
        console.error("Error al obtener usuarios:", error);
      }
      setLoadingUsers(false);
    };
    fetchUsers();
  }, []);

  return { users, loadingUsers };
}

function UsuariosReport() {
  const { users, loadingUsers } = useUsers();

  const columnas = [
    { label: "ID_Usuario", accessor: "id_user" },
    { label: "Dni", accessor: "dni" },
    { label: "Nombre", accessor: "name" },
    { label: "Apellido", accessor: "lastname" },
    { label: "Edad", accessor: "age" },
    { label: "Correo", accessor: "email" },
    { label: "Telefono", accessor: "phone_num" },
    { label: "Direccion", accessor: "address" },
    { label: "Rol", accessor: "role" },
    { label: "Activo", accessor: "active" },
    { label: "Fecha de Registro", accessor: "created_at" },
  ];

  const roles = [...new Set(users.map(u => u.role))];

  return (
    <div className="table-container">
      <h3>Usuarios (Prueba)</h3>
      <p>Tabla usuarios totales</p>
      {loadingUsers ? (
        <p>Cargando usuarios...</p>
      ) : (
        <Table
          datos={users}
          columnas={columnas}
          opcionesFiltro={roles}
          keyFiltro="role"
        />
      )}
    </div>
  );
}

export default UsuariosReport;
