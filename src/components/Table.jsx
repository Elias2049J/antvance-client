import { useState, useMemo } from "react";
import "./Table.css";

const PAGE_SIZE = 5;

function Table({
  datos = [],
  opcionesFiltro = [],
  keyFiltro = [],
  columnas = [],
  renderRow,
}) {
  const [sortBy, setSortBy] = useState(columnas[0]?.accessor || "id");
  const [sortDir, setSortDir] = useState("asc");
  const [filterValue, setFilterValue] = useState("Todas");
  const [page, setPage] = useState(1);

  const cambiarOrden = (col) => {
    if (sortBy === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(col);
      setSortDir("asc");
    }
  };

  const cambiarFiltro = (e) => {
    setFilterValue(e.target.value);
    setPage(1);
  };

  const cambiarPágina = (nuevaPag, totalPags) => {
    if (nuevaPag >= 1 && nuevaPag <= totalPags) setPage(nuevaPag);
  };

  const datosFiltrados = useMemo(() => {
    return datos.filter(
      (row) => filterValue === "Todas" || row[keyFiltro] === filterValue
    );
  }, [datos, filterValue, keyFiltro]);

  const datosOrdenados = useMemo(() => {
    return [...datosFiltrados].sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();
      if (valA < valB) return sortDir === "asc" ? -1 : 1;
      if (valA > valB) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [datosFiltrados, sortBy, sortDir]);

  const totalPags = Math.ceil(datosOrdenados.length / PAGE_SIZE);
  const datosPaginados = datosOrdenados.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="table-container">
      {opcionesFiltro.length > 0 && (
        <div className="table-controls">
          <label>
            Filtrar por {keyFiltro}:{" "}
            <select value={filterValue} onChange={cambiarFiltro}>
              {["Todas", ...opcionesFiltro].map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </label>
        </div>
      )}

      <table className="custom-table">
        <thead>
          <tr>
            {columnas.map(col => (
              <th key={col.accessor} onClick={() => cambiarOrden(col.accessor)}>
                {col.label} {sortBy === col.accessor ? (sortDir === "asc" ? "▲" : "▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datosPaginados.length === 0 ? (
            <tr>
              <td colSpan={columnas.length} className="no-datos">Sin datos</td>
            </tr>
          ) : (
            datosPaginados.map((row, rowIndex) =>
              renderRow
                ? renderRow(row, rowIndex, columnas)
                : (
                  <tr key={row.id ?? rowIndex}>
                    {columnas.map((col) => (
                      <td key={`${row.id ?? rowIndex}-${col.accessor}`}>
                        {row[col.accessor]}
                      </td>
                    ))}
                  </tr>
                )
            )
          )}
        </tbody>
      </table>

      <div className="table-pagination">
        <button onClick={() => cambiarPágina(page - 1, totalPags)} disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page} de {totalPags}</span>
        <button onClick={() => cambiarPágina(page + 1, totalPags)} disabled={page === totalPags}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Table;