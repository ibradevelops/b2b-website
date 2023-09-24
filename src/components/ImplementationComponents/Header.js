function Header({ children }) {
  return (
    <header className="implementation__header">
      {children}
      <div className="implementation__header-box">
        <h1 className="implementation__header-box-title">Implementacija</h1>
        <h2 className="implementation__header-box-sub-title">
          Brinemo o svakom Vašem detalju
        </h2>
        <div className="implementation__header-box-line"></div>
      </div>
    </header>
  );
}

export default Header;
