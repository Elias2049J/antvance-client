import React, { useState } from 'react';
import './InspeccionForm.css'; 

const InspeccionForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    tipo: 'PREVENTIVA',
    fecha: '',
    kilometraje: '',
    resultado: 'APROBADO',
    observacion: '',
    vehiculoId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) {
      await onSubmit(form);
    }
  };

  return (
    <form className="inspeccion-form" onSubmit={handleSubmit}>
      <h2>Crear Inspección</h2>
      <label>
        Tipo:
        <select name="tipo" value={form.tipo} onChange={handleChange}>
          <option value="PREVENTIVA">Preventiva</option>
          <option value="CORRECTIVA">Correctiva</option>
        </select>
      </label>
      <label>
        Fecha:
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Kilometraje:
        <input
          type="number"
          name="kilometraje"
          value={form.kilometraje}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Resultado:
        <select name="resultado" value={form.resultado} onChange={handleChange}>
          <option value="APROBADO">Aprobado</option>
          <option value="RECHAZADO">Rechazado</option>
        </select>
      </label>
      <label>
        Observación:
        <input
          type="text"
          name="observacion"
          value={form.observacion}
          onChange={handleChange}
        />
      </label>
      <label>
        Vehículo ID:
        <input
          type="text"
          name="vehiculoId"
          value={form.vehiculoId}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Crear</button>
    </form>
  );
};

export default InspeccionForm;