function SingleResult({ num, txt }) {
  return (
    <figure className="results__section-single">
      <h2 className="results__section-single-title">{num}</h2>
      <figcaption className="results__section-single-text">{txt}</figcaption>
    </figure>
  );
}

export default SingleResult;
