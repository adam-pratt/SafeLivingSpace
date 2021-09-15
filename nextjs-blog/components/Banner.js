import Image from 'next/Image';
import NavBar from './NavBar';
import Logo from '../public/images/SlsLogo.jpg'

export default function Banner() {
    return(
      <div>
        <div className="banner">
          <div className='banner-logo'>
            <Image width="40px" height="40px" src={Logo}></Image>
            <h1 className='banner-text'> Safe Living Space</h1>
          </div>
          <a className='donate-button' href="https://www.paypal.com/donate/?hosted_button_id=X7CELSBLXK9VQ">Donate</a>
        </div>
        <div className='nav-bar-wrapper'>
          { NavBar()}
        </div>
        <div className="header-spacer"/>
        <style jsx>{`
          .nav-bar-wrapper {
            justify-content: center;
            display: flex;
          }
          .banner {
            margin: 0 5% 0 5%;
            width: 90%;
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
          }

          .donate-button {
            border-radius: 16px;
            background-color: #573494;
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
            background-color: #573494;
          }
        `}</style>
      </div>
    )
  }
