import { useEffect, useState } from "react";
import "../Table.css";

function ConsumoDistribucionReport() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLidar = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/lidar");
        const dataLidar = await res.json();
        setData(dataLidar);
      } catch (error) {
        setData([]);
        console.log("Error al obtener datos del servidor: ", error);
      }
      setLoading(false);
    };
    fetchLidar();
  }, []);

  // patrones de consumo y posibles fugas usando datos lidar fake
  const resumenClasificacion = {};
  data.forEach((row) => {
    resumenClasificacion[row.clasificacion] = (resumenClasificacion[row.clasificacion] || 0) + 1;
  });

  if (loading) {
    return <div className="table-container">Cargando reportes...</div>;
  }

  return (
    <div className="table-container">
      <h3>Consumo y Distribución</h3>
      <p>Monitorea el flujo de agua en diferentes sectores e identifica patrones de consumo y posibles fugas.</p>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Clasificación</th>
            <th>Cantidad de puntos</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(resumenClasificacion).map(([clas, cant]) => (
            <tr key={clas}>
              <td>{clas}</td>
              <td>{cant}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        {resumenClasificacion["Terreno"] && resumenClasificacion["Terreno"] < 3
          ? "Posible fuga detectada en Terreno."
          : "No se detectan fugas significativas."}
      </p>
    </div>
  );
}

export default ConsumoDistribucionReport;