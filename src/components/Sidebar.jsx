import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from '../assets/logo.jpg'

const Sidebar = () => (
  <nav className="sidebar">
    <div className="sidebar-header">AntVance</div>
    <ul className="sidebar-list">
      <li>
        <Link to="/" className="sidebar-link">
          Principal
        </Link>
      </li>
      <li>
        <Link to="/reportes" className="sidebar-link">
          Transacciones
        </Link>
      </li>
      <li>
        <Link to="/alertas" className="sidebar-link">
          Rutas y Viajes
        </Link>
      </li>
      <li>
        <Link to="/inspeccion" className="sidebar-link">
          Inspecciones
        </Link>
      </li>
    </ul>
    <img className="sidebar-logo" src={logo} alt="antvance-logo" />
    <div className="sidebar-footer">© 2025 AntVance</div>
  </nav>
);

export default Sidebar;