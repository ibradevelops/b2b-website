function AreaIntro({ title, subTitle }) {
  return (
    <div className="area__intro">
      <h2 className="area__intro-title">{title}</h2>
      <h3 className="area__intro-sub-title">
        {subTitle}
      </h3>
      <div className="area__intro-line"></div>
    </div>
  );
}

export default AreaIntro;
