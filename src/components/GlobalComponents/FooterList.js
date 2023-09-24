import { Link } from "react-router-dom";

function FooterList({ order, textOne, textTwo, textThree, textFour }) {
  return (
    <ul className={`footer__right-box-${order}-list`}>
      <Link className={`footer__right-box-${order}-list-item`}>
        <li>{textOne}</li>
      </Link>
      <Link className={`footer__right-box-${order}-list-item`}>
        <li>{textTwo}</li>
      </Link>
      <Link className={`footer__right-box-${order}-list-item`}>
        <li>{textThree}</li>
      </Link>
      <Link className={`footer__right-box-${order}-list-item`}>
        <li>{textFour}</li>
      </Link>
    </ul>
  );
}

export default FooterList;
