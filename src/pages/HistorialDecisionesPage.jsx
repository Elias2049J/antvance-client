import "./HistorialDecisionesPage.css";
import Header from "../components/Header";
import Notification from "../components/Notification";
import { useEffect, useState } from "react";

const acciones_tomadas = [
  { id: 1, status: "exito", mensaje: "Bomba principal activada automáticamente para mantener el nivel óptimo del tanque de almacenamiento." },
  { id: 2, status: "alerta", mensaje: "Ajuste automático del caudal por detección de presión baja en la red de distribución." },
  { id: 3, status: "info", mensaje: "Reporte diario generado y enviado al supervisor de planta." },
  { id: 4, status: "peligro", mensaje: "Fallo crítico en sensor de pH, se activó protocolo de respaldo y se notificó a mantenimiento." },
  { id: 5, status: "atencion", mensaje: "Incremento de turbidez detectado, se aumentó la frecuencia de retrolavado de filtros." },
  { id: 6, status: "exito", mensaje: "Proceso de desinfección completado exitosamente con ajuste automático de cloro." },
  { id: 7, status: "info", mensaje: "Balance de cargas eléctricas realizado en motores principales." },
  { id: 8, status: "alerta", mensaje: "Nivel bajo en tanque de reserva, se activó bomba secundaria." },
  { id: 9, status: "peligro", mensaje: "Fuga detectada en sector 3, válvula de aislamiento cerrada automáticamente." },
  { id: 10, status: "exito", mensaje: "Optimización energética: reducción de consumo tras ajuste de horarios de bombeo." },
  { id: 11, status: "atencion", mensaje: "Alcalinidad fuera de rango, dosificación de reactivo ajustada automáticamente." },
  { id: 12, status: "info", mensaje: "Autodiagnóstico de sensores completado, todos los sistemas operativos." },
  { id: 13, status: "alerta", mensaje: "Tendencia de aumento en consumo detectada, sugerida revisión de la red." },
  { id: 14, status: "exito", mensaje: "Mantenimiento preventivo ejecutado en válvulas automáticas." },
  { id: 15, status: "peligro", mensaje: "Fallo en sistema de monitoreo remoto, activado monitoreo local de emergencia." },
  { id: 16, status: "atencion", mensaje: "Dureza elevada detectada, proceso de ablandamiento ajustado." },
  { id: 17, status: "info", mensaje: "Ajuste automático de válvulas para equilibrar el flujo entre sectores." },
  { id: 18, status: "exito", mensaje: "Estabilización de pH lograda tras ajuste automático de dosificación." },
  { id: 19, status: "alerta", mensaje: "Presión alta detectada en línea secundaria, caudal reducido automáticamente." },
  { id: 20, status: "info", mensaje: "Backwash automático realizado en filtros de arena." }
];

function HistorialDecisionesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-page">
      <Header title="Panel Principal" />
      <div className="dashboard-content">
        <h2>Bienvenido</h2>
        <p>Resumen de decisiones, acciones y resultados del sistema experto</p>
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <div className="notificaciones-lista">
            {acciones_tomadas.length === 0 ? (
              <p>No hay notificaciones registradas.</p>
            ) : (
              acciones_tomadas.map((accion) => (
                <Notification
                  key={accion.id}
                  status={accion.status}
                  message={accion.mensaje}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HistorialDecisionesPage;