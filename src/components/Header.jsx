import "./Header.css";

function Header({ title, onLogout }) {
  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <div>
        <button className="header-logout" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}

export default Header;