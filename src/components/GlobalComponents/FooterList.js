import { Link, useLocation } from "react-router-dom";

function FooterList({
  order,
  textOne,
  textTwo,
  textThree,
  textFour,
  navigateOne,
  navigateTwo,
  navigateThree,
  navigateFour,
  navigateFive,
  textFive
}) {
  const { pathname } = useLocation();
  return (
    <ul className={`footer__right-box-${order}-list`}>
      <Link
        className={`footer__right-box-${order}-list-item`}
        to={navigateOne ? navigateOne : pathname}
      >
        <li>{textOne}</li>
      </Link>
      <Link
        className={`footer__right-box-${order}-list-item`}
        to={navigateTwo ? navigateTwo : pathname}
      >
        <li>{textTwo}</li>
      </Link>
      <Link
        className={`footer__right-box-${order}-list-item`}
        to={navigateThree ? navigateThree : pathname}
      >
        <li>{textThree}</li>
      </Link>
      <Link
        className={`footer__right-box-${order}-list-item`}
        to={navigateFour ? navigateFour : pathname}
      >
        <li>{textFour}</li>
      </Link>
      <Link
        className={`footer__right-box-${order}-list-item`}
        to={navigateFive ? navigateFive : pathname}
      >
        <li>{textFive}</li>
      </Link>
    </ul>
  );
}

export default FooterList;
