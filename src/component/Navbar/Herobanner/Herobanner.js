import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../../images/img1.jpg";
import Img2 from "../../../images/img2.jpg";
import Img3 from "../../../images/img3.jpg";
import "./Herobanner.css";

const Herobanner = () => {
  // Hero Text
  const HeroTextNum = { text: "numeracy" };
  const HeroTextLit = { text: "literacy" };
  const HeroTextSport = { text: "sport activities" };

//   subText
const HeroSubtextNum = { subText: "THS Pupils during number readiness class using number rods" };
const HeroSubtextLit = { subText: "THS is a place to lay a solid foundation for literacy" };
const HeroSubtextSport = { subText: "Exercise your body.... Its makes you stay healthy" };
  return (
    <>
      <Carousel autoPlay>
        <div>
          <img src={Img1} alt="slider" />
          <p className="legend">{HeroTextNum.text}</p>
          <p className="sub_legend">{HeroSubtextNum.subText}</p>
        </div>
        <div>
          <img src={Img2} alt="slider" />
          <p className="legend">{HeroTextLit.text}</p>
          <p className="sub_legend">{HeroSubtextLit.subText}</p>
        </div>
        <div>
          <img src={Img3} alt="slider" />
          <p className="legend">{HeroTextSport.text}</p>
          <p className="sub_legend">{HeroSubtextSport.subText}</p>
        </div>
      </Carousel>
    </>
  );
};
export default Herobanner;
