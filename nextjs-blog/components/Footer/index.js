import { getImageByName } from '../../utils/imgLoader';

export default function Footer() {
    return(
      <div>
        <div className="footer-container">
          <div className='socail-container'>
            <a href="https://www.instagram.com/safelivingspace/?hl=en"><img height='40px' width='40px' src={getImageByName('linkedin-white.png')}></img></a>
            <a href="https://www.facebook.com/safelivingspace "><img height='40px' width='40px' src={getImageByName('facebook-white.png')}></img></a>
            <a href="https://www.instagram.com/safelivingspace/?hl=en"><img  height='40px' width='40px'src={getImageByName('insta-white.png')}></img></a>
          </div>
          
        </div>
        <style jsx> {`

          .socail-container {
            margin-right 40px;
          }

          .footer-container {
            height: 100px;
            width: 100%;
            background-color: #370F7A;
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
