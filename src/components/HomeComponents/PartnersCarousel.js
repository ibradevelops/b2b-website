import "../../styling/carousel.css";
import Carousel from "react-elastic-carousel";

import Partner1 from "../../images/partner-1.png";
import Partner3 from "../../images/partner-3.png";
import Partner4 from "../../images/partner-4.png";
import Partner5 from "../../images/partner-5.png";
import Partner6 from "../../images/partner-6.png";
import Partner7 from "../../images/partner-7.png";
import Partner8 from "../../images/partner-8.png";
import Partner9 from "../../images/partner-9.png";
import Partner10 from "../../images/partner-10.png";
import Partner11 from "../../images/partner-11.png";
import Partner12 from "../../images/partner-12.png";
import Partner13 from "../../images/partner-13.png";
import Partner14 from "../../images/partner-14.png";
import Partner15 from "../../images/partner-15.png";
import Partner16 from "../../images/partner-16.png";
import Partner17 from "../../images/partner-17.png";
import Partner18 from "../../images/partner-18.png";
import Partner19 from "../../images/partner-19.png";
import Partner20 from "../../images/partner-20.png";
import Partner21 from "../../images/partner-21.png";
// partner 2 deleted

const images = [
  { image: Partner1 },
  { image: Partner3 },
  { image: Partner4 },
  { image: Partner5 },
  { image: Partner6 },
  { image: Partner7 },
  { image: Partner8 },
  { image: Partner9 },
  { image: Partner10 },
  { image: Partner11 },
  { image: Partner12 },
  { image: Partner13 },
  { image: Partner14 },
  { image: Partner15 },
  { image: Partner16 },
  { image: Partner17 },
  { image: Partner18 },
  { image: Partner19 },
  { image: Partner20 },
  { image: Partner21 },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function PartnersCarousel() {
  return (
    <div className="partners__section">
      <div className="partners__section-line"></div>
      <Carousel breakPoints={breakPoints} pagination={false}>
        {images.map((val) => (
          <img
            key={crypto.randomUUID()}
            src={val.image}
            alt="Partner"
            className="partners__section-gallery-photo"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default PartnersCarousel;
