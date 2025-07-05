import "../Table.css";

function MantenimientoReport() {
  const fallas = [
    { equipo: "Bomba 1", tipo: "Vibración alta", fecha: "2025-05-10", estado: "Pendiente" },
    { equipo: "Válvula 3", tipo: "Fuga detectada", fecha: "2025-05-12", estado: "Resuelto" },
  ];

  return (
    <div className="table-container">
      <h3>Fallas y Mantenimiento</h3>
      <p>Detecta anomalías en bombas y válvulas. Programa mantenimiento preventivo basado en datos históricos.</p>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Tipo de Falla</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {fallas.map((row, i) => (
            <tr key={i}>
              <td>{row.equipo}</td>
              <td>{row.tipo}</td>
              <td>{row.fecha}</td>
              <td>
                {row.estado === "Resuelto"
                  ? <span className="activo">{row.estado}</span>
                  : <span className="inactivo">{row.estado}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MantenimientoReport;