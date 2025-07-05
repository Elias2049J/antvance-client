import { NavLink, Outlet } from "react-router-dom";
import "./ReportLayouts.css"
import "../components/Table";

function ReportLayouts() {
  return (
    <>
      <div className="reportes-nav">
        <NavLink to="." end className={({isActive}) => `nav-button ${isActive ? 'active-link' : ''}`}>Consumo y Distribución</NavLink>
        <NavLink to="calidad-agua" className={({isActive}) => `nav-button ${isActive ? 'active-link' : ''}`}>Calidad del Agua</NavLink>
        <NavLink to="mantenimiento" className={({isActive}) => `nav-button ${isActive ? 'active-link' : ''}`}>Mantenimiento</NavLink>
        <NavLink to="presion-caudal" className={({isActive}) => `nav-button ${isActive ? 'active-link' : ''}`}>Presión y Caudal</NavLink>
        <NavLink to="energia-costos" className={({isActive}) => `nav-button ${isActive ? 'active-link' : ''}`}>Energía y Costos</NavLink>
        <NavLink to="usuarios" className={({isActive}) => `nav-button ${isActive ? 'active-link' : ''}`}>Usuarios</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default ReportLayouts;