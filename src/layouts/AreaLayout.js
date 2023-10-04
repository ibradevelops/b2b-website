import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AreaBackground from "../components/AreaComponents/AreaBackground";
import AreaCharacteristic from "../components/AreaComponents/AreaCharacteristic";
import AreaImage from "../components/AreaComponents/AreaImage";
import AreaMain from "../components/AreaComponents/AreaMain";
import AreaQuestions from "../components/AreaComponents/AreaQuestions";
import AreaIntro from "../components/AreaComponents/AreaIntro";
import AreaBox from "../components/AreaComponents/AreaBox";
import AreaList from "../components/AreaComponents/AreaList";
import AreaText from "../components/AreaComponents/AreaText";
import AreaContent from "../components/AreaComponents/AreaContent";
import AreaApplicationItems from "../components/GlobalComponents/AreaApplicationItems";
import AreaCarousel from "../components/AreaComponents/AreaCarousel";
//
const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

//
function AreaLayout({
  imageOne,
  imageTwo,
  logo,
  title,
  subTitle,
  textBox,
  questions,
  texts,
  list,
  textOne,
  textTwo,
}) {
  const { pathname: url } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <section className="area">
      <AreaMain>
        <AreaImage imageOne={imageOne} />
        <header className="area__main-header">
          <AreaIntro title={title} subTitle={subTitle} />
          <AreaBox logo={logo} textBox={textBox} />
        </header>
      </AreaMain>
      <AreaQuestions questions={questions} />
      <AreaBackground imageTwo={imageTwo} />
      <AreaContent>
        {textOne && textTwo && !texts.length && (
          <>
            <AreaText>{textOne}</AreaText>
            <AreaList list={list} />
            <AreaText>{textTwo}</AreaText>
          </>
        )}
        {!textOne && !textOne && !list.length && (
          <AreaCharacteristic texts={texts} />
        )}
        {!textOne && !textTwo && !texts.length && <AreaList list={list} />}
      </AreaContent>
      {/* <AreaApplicationItems /> */}
      <AreaCarousel />
    </section>
  );
}

export default AreaLayout;
