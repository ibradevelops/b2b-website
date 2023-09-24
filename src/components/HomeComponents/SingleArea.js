import { Link } from "react-router-dom";
import Icon from "../../images/right-arrow.png";

function SingleArea({ photo, title, bio, href }) {
  return (
    <div className="singleArea__item">
      <figure className="singleArea__item-figure">
        <img className="singleArea__item-figure-img" src={photo} alt={title} />
        <figcaption className="singleArea__item-figure-caption">
          {title}
        </figcaption>
        <p className="singleArea__item-figure-text">{bio}</p>
      </figure>
      <Link to={href} className="singleArea__item-link">
        <p>Vidi više</p>
        <img src={Icon} alt="Icon" className="singleArea__item-icon" />
      </Link>
    </div>
  );
}

export default SingleArea;
