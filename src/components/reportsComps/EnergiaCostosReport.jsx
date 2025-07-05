import "../Table.css";

function EnergiaCostosReport() {
  const energia = [
    { estacion: "Estación Norte", consumo: 320, costo: 480 },
    { estacion: "Estación Sur", consumo: 280, costo: 420 },
  ];

  return (
    <div className="table-container">
      <h3>Energía y Costos Operativos</h3>
      <p>Evalúa el consumo energético de las estaciones de bombeo y optimiza costos ajustando la operación de equipos.</p>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Estación</th>
            <th>Consumo (kWh)</th>
            <th>Costo (S/)</th>
          </tr>
        </thead>
        <tbody>
          {energia.map((row) => (
            <tr key={row.estacion}>
              <td>{row.estacion}</td>
              <td>{row.consumo}</td>
              <td>{row.costo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Consumo total: {energia.reduce((sum, e) => sum + e.consumo, 0)} kWh. Costo total: S/ {energia.reduce((sum, e) => sum + e.costo, 0)}.
      </p>
    </div>
  );
}

export default EnergiaCostosReport;