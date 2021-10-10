import { getImageByName } from '../../utils/imgLoader';
import NavBar from '../Navbar';
import DonateButton from '../DonateButton';
import HambergerMenu from '../HambMenu';

export default function Banner() {
    return(
      <div>
        <div className="banner">
            <a className='banner-logo' href='http://safelivingspace.org/'>
              <img width="40px" height="40px" src={getImageByName('SlsLogo.jpg')}></img>
              <h1 className='banner-text'> Safe Living Space</h1>
            </a>
          { NavBar()}
          <div className='donate-button-wrapper'>{DonateButton()}</div>
          <div className="mobile-menu">{HambergerMenu()}</div>
        </div>
        <style jsx>{`
          @media only screen and (min-width: 1400px) {
            .mobile-menu {
              display: none;
            }
          }

          @media only screen and (max-width: 1400px) {
            .donate-button-wrapper {
              display: none;
            }
          }
          
          a {
            text-decoration: none;
          }
          .banner {
            margin: 0 2.5% 0 2.5%;
            width: 95%;
            display: flex;
            justify-content: space-between;
            display: flex;
            align-items: center;
          }
          .banner-logo {
            margin-top: auto;
            display: flex;
            align-items: center;
          }

          .banner-text {
            margin: 5px 0 0 10px;
            color: #370F7A;
            font-weight: 600;
            word-spacing: 2px;
            display: flex;
            align-items: center;
            font-size: 42px;
          }

          .banner-text:hover {
            color: #973494;
          }

          .donate-button {
            border-radius: 16px;
            background-image: linear-gradient(to bottom right, #370F7A, #973494);
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
            background-image: linear-gradient(to bottom right, #370F7A, #973494);
          }
        `}</style>
      </div>
    )
  }
