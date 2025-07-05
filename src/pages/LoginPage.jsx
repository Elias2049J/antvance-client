import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <form className="login-form">
        <label>
          Usuario:
          <input type="text" name="username" autoComplete="username" />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" autoComplete="current-password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;