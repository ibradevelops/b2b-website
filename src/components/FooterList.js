function FooterList({ order, textOne, textTwo, textThree, textFour }) {
  return (
    <ul className={`footer__right-box-${order}-list`}>
      <li className={`footer__right-box-${order}-list-item`}>
        <a href="#">{textOne}</a>
      </li>
      <li className={`footer__right-box-${order}-list-item`}>
        <a href="#">{textTwo}</a>
      </li>
      <li className={`footer__right-box-${order}-list-item`}>
        <a href="#">{textThree}</a>
      </li>
      <li className={`footer__right-box-${order}-list-item`}>
        <a href="#">{textFour}</a>
      </li>
    </ul>
  );
}

export default FooterList;
