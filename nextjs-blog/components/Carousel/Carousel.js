import Image from 'next/Image';
import boximg1 from '../../public/images/boximg1.jpg'
import boximg2 from '../../public/images/boximg2.jpg'
import boximg3 from '../../public/images/boximg3.jpg'
import boximg4 from '../../public/images/boximg4.jpg'
import boximg5 from '../../public/images/boximg5.jpg'

export default function Carousel() {
  const boxSize = '450px';
    return(
      <div className="carouselContainer">
        <div className="carouselBoxTransparent"><Image src={boximg1} height={boxSize} width={boxSize}/></div>
        <div className="carouselBox"><Image src={boximg2} height={boxSize} width={boxSize}/></div>
        <div className="carouselBox"><Image src={boximg3} height={boxSize} width={boxSize}/></div>
        <div className="carouselBox"><Image src={boximg4} height={boxSize} width={boxSize}/></div>
        <div className="carouselBoxTransparent"><Image src={boximg5} height={boxSize} width={boxSize}/></div>
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
            width: 250%;
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
