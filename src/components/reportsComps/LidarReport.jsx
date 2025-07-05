import { useEffect, useState } from "react";
import Tables from "../Table";

const columnas = [
  { label: "ID", accessor: "id" },
  { label: "X", accessor: "x" },
  { label: "Y", accessor: "y" },
  { label: "Z", accessor: "z" },
  { label: "Intensidad", accessor: "intensidad" },
  { label: "Clasificación", accessor: "clasificacion" },
];

function LidarReport() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/lidar");
        const data = await res.json();
        setDatos(data);
      } catch (err) {
        console.error("Error al cargar datos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;

  const clasificaciones = [...new Set(datos.map(d => d.clasificacion))];

  return (
    <Tables
      datos={datos}
      columnas={columnas}
      opcionesFiltro={clasificaciones}
      keyFiltro="clasificacion"
    />
  );
}

export default LidarReport;
