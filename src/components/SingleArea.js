import Icon from "../images/right-arrow.png";

function SingleArea({ photo, title, bio }) {
  return (
    <div className="singleArea__item">
      <figure className="singleArea__item-figure">
        <img className="singleArea__item-figure-img" src={photo} alt={title} />
        <figcaption className="singleArea__item-figure-caption">
          {title}
        </figcaption>
        <p className="singleArea__item-figure-text">{bio}</p>
      </figure>
      <p className="singleArea__item-link">
        Vidi više{" "}
        <img src={Icon} alt="Icon" className="singleArea__item-icon" />
      </p>
    </div>
  );
}

export default SingleArea;
