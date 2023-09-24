function AreaContent({ children }) {
  return (
    <div className="area__content">
      <h2 className="area__content-title">Glavne osobine</h2>
      <div className="area__content-box">{children}</div>
    </div>
  );
}

export default AreaContent;
