import { getImageByName } from '../utils/imgLoader';
import Link from 'next/Link';
import NavBar from './NavBar';
import DonateButton from './DonateButton';

export default function Banner() {
    return(
      <div>
        <div className="banner">
          <Link href='/'>
            <a className='banner-logo'>
              <img width="40px" height="40px" src={getImageByName('SlsLogo.jpg')}></img>
              <h1 className='banner-text'> Safe Living Space</h1>
            </a>
          </Link>
          {DonateButton()}
        </div>
        <div className='nav-bar-wrapper'>
          { NavBar()}
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
          }
          .nav-bar-wrapper {
            justify-content: center;
            display: flex;
          }
          .banner {
            margin: 0 2.5% 0 2.5%;
            width: 95%;
            display: flex;
            justify-content: space-between;
          }
          .banner-logo {
            display: flex;
            align-items: center;
          }

          .banner-text {
            margin: 5px 0 0 10px;
            color: #573494
            font-weight: 170;
            word-spacing: 2px;
          }

          .banner-text:hover {
            color: #973494;
          }

          .donate-button {
            border-radius: 16px;
            background-image: linear-gradient(to bottom right, #573494, #973494);
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }

          .header-spacer {
            margin-top: 10px;
            width: 100%;
            height: 10px;
            background-image: linear-gradient(to bottom right, #573494, #973494);
          }
        `}</style>
      </div>
    )
  }
