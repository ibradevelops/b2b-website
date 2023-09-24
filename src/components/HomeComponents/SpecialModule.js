function SpecialModule({ photo, title }) {
  return (
    <figure className="specialModues__section-items-figure">
      <img
        className="specialModues__section-items-figure-img"
        src={photo}
        alt={title}
      />
      <figcaption className="specialModues__section-items-figure-title">
        {title}
      </figcaption>
    </figure>
  );
}

export default SpecialModule;
