import { getImageByName } from '../../utils/imgLoader';

export default function Carousel() {
  const boxSize = '450px';
    return(
      <div className="carouselContainer">
        {/* <div className="carouselBoxTransparent"><img src={getImageByName('boximg1.jpg')} height={boxSize} width={boxSize}/></div> */}
        <div><img className="carouselBox" src={getImageByName('boximg3.jpg')} /></div>
        <div><img className="carouselBox" src={getImageByName('boximg4.jpg')} /></div>
        <div><img className="carouselBox" src={getImageByName('boximg5.jpg')} /></div>
        {/* <div className="carouselBoxTransparent"><img src={getImageByName('boximg5.jpg')} height={boxSize} width={boxSize}/></div> */}
        <style jsx> {`

        @media only screen and (max-width: 1000px) {
          carouselBox {
            margin 0 20px 0 20px;
            height: 250px;
            width: 250px;
            }
        }

        .carouselBox {
          margin 0 20px 0 20px;
          height: 450px;
          width: 450px;
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
