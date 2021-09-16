import Image from 'next/Image';
import LinkedLogo from '../public/images/linkedin-white.png'
import FacebookLogo from '../public/images/facebook-white.png'
import InstaLogo from '../public/images/insta-white.png'

export default function Footer() {
    return(
      <div>
        <div className="footer-container">
          <div className='socail-container'>
            <a href="https://www.instagram.com/safelivingspace/?hl=en"><Image height='40px' width='40px' src={LinkedLogo}></Image></a>
            <a href="https://www.facebook.com/safelivingspace "><Image height='40px' width='40px' src={FacebookLogo}></Image></a>
            <a href="https://www.instagram.com/safelivingspace/?hl=en"><Image  height='40px' width='40px'src={InstaLogo}></Image></a>
          </div>
          
        </div>
        <style jsx> {`

          .socail-container {
            margin-right 40px;
          }

          .footer-container {
            height: 100px;
            width: 100%;
            background-image: linear-gradient(to bottom right, #573494, #973494);
            justify-content: right;
            display: flex;
            align-items: center;
          }

          a {
            padding-right: 30px;
          }

          a:hover {
            opacity: 0.85;
          }
        `}
        </style>
      </div>
    )
  }
