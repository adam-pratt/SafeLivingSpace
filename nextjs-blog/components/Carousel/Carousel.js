import { getImageByName } from '../../utils/imgLoader';

export default function Carousel() {
  const boxSize = '450px';
    return(
      <div className="carouselContainer">
        {/* <div className="carouselBoxTransparent"><img src={getImageByName('boximg1.jpg')} height={boxSize} width={boxSize}/></div> */}
        <div className="carouselBox"><img src={getImageByName('boximg2.jpg')} height={boxSize} width={boxSize}/></div>
        <div className="carouselBox"><img src={getImageByName('boximg3.jpg')} height={boxSize} width={boxSize}/></div>
        <div className="carouselBox"><img src={getImageByName('boximg4.jpg')} height={boxSize} width={boxSize}/></div>
        {/* <div className="carouselBoxTransparent"><img src={getImageByName('boximg5.jpg')} height={boxSize} width={boxSize}/></div> */}
        <style jsx> {`
          .carouselBox {
           margin 0 20px 0 20px;
          }
          .carouselBoxTransparent {
            opacity: 0.7;
            margin 0 20px 0 20px;
          }

          .carouselBoxTransparent:hover {
            opacity: 1;
          }

          .carouselContainer {
            width: 100%;
            overflow-x: hidden;
            padding: 40px 0 40px 0;
            background-image: linear-gradient(to bottom right, #573494, #973494);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
          
        </style>
      </div>
    )
  }
