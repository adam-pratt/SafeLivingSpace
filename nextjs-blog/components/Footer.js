import Image from 'next/Image';
import LinkedLogo from '../public/images/linkedin-white.png'
import FacebookLogo from '../public/images/facebook-white.png'
import InstaLogo from '../public/images/insta-white.png'

export default function Footer() {
    return(
      <div>
        <div className="footer-container">
          <div className='socail-container'>
            <a href="#"><Image height='40px' width='40px' src={LinkedLogo}></Image></a>
            <a href="#"><Image height='40px' width='40px' src={FacebookLogo}></Image></a>
            <a href="#"><Image  height='40px' width='40px'src={InstaLogo}></Image></a>
          </div>
          
        </div>
        <style jsx> {`

          .socail-container {
            margin-right 40px;
          }
          .footer-container {
            height: 100px;
            width: 100%;
            background-color: grey;
            justify-content: right;
            display: flex;
            align-items: center;
          }
          a {
            padding-right: 30px;
          }
        `}
        </style>
      </div>
    )
  }
