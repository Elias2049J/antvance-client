export async function getMetrics() {
  try {
    const response = await fetch("http://localhost:8080/admin/metrics");
    if (!response.ok) {
      throw new Error("Error al obtener métricas");
    }
    return response.json();
  } catch (error) {
    console.error("Error en getMetrics:", error);
    return [];
  }
}