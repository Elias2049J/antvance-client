import React from 'react';
import InspeccionForm from '../components/InspeccionForm';

const crearInspeccion = async (form) => {
  try {
    const response = await fetch('http://localhost:8080/inspeccion/crear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tipo: form.tipo,
        fecha: form.fecha,
        kilometraje: Number(form.kilometraje),
        resultado: form.resultado,
        observacion: form.observacion,
        vehiculo: { id: form.vehiculoId }
      })
    });
    const data = await response.json();
    alert('Inspección creada correctamente');
    console.log(data);
  } catch (error) {
    alert('Error al crear inspección');
    console.error(error);
  }
};

const InspeccionPage = () => (
  <div>
    <InspeccionForm onSubmit={crearInspeccion} />
  </div>
);

export default InspeccionPage;