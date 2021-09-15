import Image from 'next/Image';
import boximg1 from '../public/images/boximg1.jpg'
import boximg2 from '../public/images/boximg2.jpg'
import boximg3 from '../public/images/boximg3.jpg'
import boximg4 from '../public/images/boximg4.jpg'
import boximg5 from '../public/images/boximg5.jpg'

export default function Carousel() {
    return(
      <div className="carouselContainer">
        <div className="carouselBox"><Image src={boximg1} height="300px" width="300px"/></div>
        <div className="carouselBox"><Image src={boximg2} height="300px" width="300px"/></div>
        <div className="carouselBox"><Image src={boximg3} height="300px" width="300px"/></div>
        <div className="carouselBox"><Image src={boximg4} height="300px" width="300px"/></div>
        <div className="carouselBox"><Image src={boximg5} height="300px" width="300px"/></div>
        <style jsx> {`
          .carouselBox {
            margin: 0 20px 0 20px;
          }

          .carouselContainer {
            display: flex;
            align-items: center;
          }
        `}
          
        </style>
      </div>
    )
  }
