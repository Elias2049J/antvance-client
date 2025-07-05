import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Table from "../components/Table";
import { getAlerts } from "../services/alerts";
import "./AlertLayouts.css";

function useAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlerts().then((data) => {
      setAlerts(data);
      setLoading(false);
    });
  }, []);

  return { alerts, loading };
}

function AlertLayouts() {
  const { alerts, loading } = useAlerts();
  const navigate = useNavigate();
  const location = useLocation();

  const columnas = [
    { label: "ID", accessor: "id" },
    { label: "Tipo", accessor: "tipo" },
    { label: "Mensaje", accessor: "mensaje" },
    { label: "Fecha", accessor: "fecha" },
    { label: "Estado", accessor: "estado" },
    { label: "Hora", accessor: "hora" },
    { label: "Ubicación", accessor: "ubicacion" },
    { label: "Prioridad", accessor: "prioridad" }
  ];

  const isDetail = location.pathname.match(/\/alertas\/\d+$/);

  const selectedId = location.pathname.split("/").pop();

  const handleRowClick = (alerta) => {
    navigate(`${alerta.id}`);
  };

  if (isDetail) {
    return <Outlet />;
  }

  return (
    <>
      <div className="alert-layouts-table" style={{ display: "flex", gap: "32px" }}>
        <div style={{ flex: 1 }}>
          <h3>Historial de Alertas</h3>
          {loading ? (
            <div className="alert-list-empty">Cargando alertas...</div>
          ) : alerts.length === 0 ? (
            <div className="alert-list-empty">No hay alertas registradas.</div>
          ) : (
            <Table
              datos={alerts}
              columnas={columnas}
              opcionesFiltro={["Pendiente", "Resuelto"]}
              keyFiltro="estado"
              renderRow={(row, rowIndex, cols) => (
                <tr
                  key={row.id ?? rowIndex}
                  style={{
                    cursor: "pointer",
                    background:
                      String(row.id) === selectedId
                        ? "#e0f7ff"
                        : undefined,
                  }}
                  onClick={() => handleRowClick(row)}
                >
                  {cols.map((col) => (
                    <td key={`${row.id ?? rowIndex}-${col.accessor}`}>
                      {row[col.accessor]}
                    </td>
                  ))}
                </tr>
              )}
            />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default AlertLayouts;