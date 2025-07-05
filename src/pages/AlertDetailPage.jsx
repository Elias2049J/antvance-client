import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlerts } from "../services/alerts";
import "./AlertDetailPage.css";

function AlertDetailPage() {
  const { alertId } = useParams();
  const [alerta, setAlerta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlert = async () => {
      setLoading(true);
      try {
        const alerts = await getAlerts();
        const found = alerts.find(a => String(a.id) === String(alertId));
        setAlerta(found || null);
      } catch (error) {
        setAlerta(null);
        console.error("Error al cargar la alerta:", error);
      }
      setLoading(false);
    };
    fetchAlert();
  }, [alertId]);

  if (loading) {
    return (
      <main className="alert-detail-page">
        <h2>Cargando detalles...</h2>
      </main>
    );
  }

  if (!alerta) {
    return (
      <main className="alert-detail-page">
        <h2>Detalle de Alerta</h2>
        <p>No se encontró la alerta seleccionada.</p>
      </main>
    );
  }

  return (
    <main className="alert-detail-page">
      <h2>Detalle de Alerta #{alerta.id}</h2>
      <ul>
        <li><strong>Tipo:</strong> {alerta.tipo}</li>
        <li><strong>Mensaje:</strong> {alerta.mensaje}</li>
        <li><strong>Fecha:</strong> {alerta.fecha}</li>
        <li><strong>Hora:</strong> {alerta.hora}</li>
        <li><strong>Ubicación:</strong> {alerta.ubicacion}</li>
        <li><strong>Estado:</strong> {alerta.estado}</li>
        <li><strong>Prioridad:</strong> {alerta.prioridad}</li>
      </ul>
    </main>
  );
}

export default AlertDetailPage;