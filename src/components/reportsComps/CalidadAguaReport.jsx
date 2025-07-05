import "../Table.css";

function CalidadAguaReport() {
  // datos ejemplo
  const calidadAgua = [
    { sector: "Magdalena", cloro: 0.7, turbiedad: 0.8, ph: 7.2 },
    { sector: "San Juan de Lurigancho", cloro: 0.5, turbiedad: 1.2, ph: 6.8 },
  ];

  return (
    <div className="table-container">
      <h3>Calidad del Agua</h3>
      <p>Registra niveles de cloro, turbiedad y pH en tiempo real. Genera alertas si los valores están fuera de rango.</p>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Sector</th>
            <th>Cloro (mg/L)</th>
            <th>Turbiedad (NTU)</th>
            <th>pH</th>
            <th>Alerta</th>
          </tr>
        </thead>
        <tbody>
          {calidadAgua.map((row) => (
            <tr key={row.sector}>
              <td>{row.sector}</td>
              <td>{row.cloro}</td>
              <td>{row.turbiedad}</td>
              <td>{row.ph}</td>
              <td>
                {(row.cloro < 0.5 || row.cloro > 1.5 || row.turbiedad > 1.0 || row.ph < 6.5 || row.ph > 8.5)
                  ? <span className="inactivo">Fuera de rango</span>
                  : <span className="activo">OK</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalidadAguaReport;