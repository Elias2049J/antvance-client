export async function getAlerts() {
  try {
    const response = await fetch("http://localhost:8080/admin/alerts");
    if (!response.ok) {
      throw new Error("Error al obtener alertas");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getAlerts:", error);
    return [];
  }
}