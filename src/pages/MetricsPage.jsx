import { useEffect, useState } from "react";
import Table from "../components/Table";
import { getMetrics } from "../services/metrics";
import "./MetricsPage.css";

function useMetrics() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMetrics().then((data) => {
      setMetrics(data);
      setLoading(false);
    });
  }, []);

  return { metrics, loading };
}

function MetricsPage() {
  const { metrics, loading } = useMetrics();

  const metricsRows =
    metrics.length > 0
      ? Object.entries(metrics[0]).map(([key, value]) => ({
          metrica: key.replace(/_/g, " "),
          valor: value,
        }))
      : [];

  const columnas = [
    { label: "Métrica", accessor: "metrica" },
    { label: "Valor", accessor: "valor" },
  ];

  return (
    <div className="metrics-layouts-table" style={{ display: "flex", gap: "32px", justifyContent: "center" }}>
      <div style={{ flex: 1, maxWidth: 600 }}>
        <h3>Métricas del Sistema</h3>
        {loading ? (
          <div className="alert-list-empty">Cargando métricas...</div>
        ) : metricsRows.length === 0 ? (
          <div className="alert-list-empty">No hay métricas registradas.</div>
        ) : (
          <Table
            datos={metricsRows}
            columnas={columnas}
            opcionesFiltro={[]}
            keyFiltro=""
          />
        )}
      </div>
    </div>
  );
}

export default MetricsPage;