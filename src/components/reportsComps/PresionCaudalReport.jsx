import "../Table.css";

function promedio(arr, key) {
  if (!arr.length) return 0;
  return (arr.reduce((sum, x) => sum + (x[key] ?? 0), 0) / arr.length).toFixed(2);
}

function PresionCaudalReport() {
  const presion = [
    { sector: "Magdalena", presion: 2.8, caudal: 120 },
    { sector: "San Juan de Lurigancho", presion: 2.1, caudal: 98 },
  ];

  return (
    <div className="table-container">
      <h3>Presión y Caudal</h3>
      <p>Analiza la presión en tuberías y estaciones de rebombeo. Ajusta automáticamente el suministro según la demanda.</p>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Sector</th>
            <th>Presión (bar)</th>
            <th>Caudal (L/s)</th>
          </tr>
        </thead>
        <tbody>
          {presion.map((row) => (
            <tr key={row.sector}>
              <td>{row.sector}</td>
              <td>{row.presion}</td>
              <td>{row.caudal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Presión promedio: {promedio(presion, "presion")} psi. Caudal promedio: {promedio(presion, "caudal")} L/s.
      </p>
    </div>
  );
}

export default PresionCaudalReport;