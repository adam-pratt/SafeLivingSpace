import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CustomDonateButton from '../components/CustomDonateButton';
import { getImageByName } from '../utils/imgLoader';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Safe Living Space</title>
        <link rel="icon" href="/images/SlsLogo.jpg" />
      </Head>
      <div className="banner-wrapper"><Banner/></div>
      <main>
        <img className="homepageImage" src={getImageByName('SLS_5K_Website_Banner.svg')}></img>
        <div className="thinGreyLine"></div>
        <p className="mission-text">In honor of Domestic Violence Awareness Month, Safe Living Space is hosting a <b>5K - Your Way Fundraiser</b> for brain injury awareness and education.  Join us the weekend of October 29 - 30th for a 5K - Your Way!
          <br></br>
          <br></br>
            All proceeds will support Safe Living Space, a 501c3 organization (EIN 86-3054747).
        </p>
        <div className='button-wrapper'/>
        <CustomDonateButton name='Register - Free' link='https://reactjs.org/docs/forms.html'/>
        <div className='button-wrapper'/>
        <CustomDonateButton name='Register - Free' link='https://reactjs.org/docs/forms.html'/>
        <div className='button-wrapper'/>
        <div className='join-us-container'>
          <img width="50%" height="40%" src={getImageByName('Screen Shot 2022-10-11 at 11.02.03 PM.png')}></img>
          <div className='join-us-words-container'>
            <p className='join-us-text'>
            At registration, you will have the opportunity to order a shirt to support the SLS Brain Injury 5K. You can also order through the link  below!
            </p>
            <CustomDonateButton name='Register - Free' link='https://reactjs.org/docs/forms.html'/>
          </div>
        </div>
      </main>
      <footer>
        {Footer()}
      </footer>

      <style jsx>{`
        .homepageImage {
          display: block;
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
        @media only screen and (max-width: 1400px) {
          .homepageImage {
            display: block;
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
        }
        .thinGreyLine {
          width: 100%;
          background-color: #E5E3DD;
          height: 1px;
        }        
        .button-wrapper {
          padding: 10px 0px 10px 0px;
        }
        .banner-wrapper {
          width: 100%;
          padding: 10px 0 10px 0;
        }
        .join-us-words-container {
          margin: 0 4% 0 4%;
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        .join-us-text {
          font-weight: 390;
          word-spacing: 2px;
          letter-spacing: 1px;
          font-size: 24px;
          color: #333333;
          text-align: center;
        }
        .join-us-container {
          margin: 0 0 0 2%;
          display: flex;
          align-items: center;
          width: 92%;
          color: #333333;
          padding: 30px 0 20px 0;
        }
        .join-us-title {
          color: #370F7A;
          font-size: 60px;
        }

        
        .mission-title {
          color: #370F7A;
          font-size: 50px;
          margin-bottom: 0px;
          margin-top: 10px;
        }
     
        .mission-text {
          width: 840px;
          font-weight: 390;
          word-spacing: 2px;
          color: #222222;
          letter-spacing: 1px;
          justify-content: center;
          text-align: center;
          font-size: 24px;
          padding-top: 20px;
        }
        .slsLogo {
          height: 10px;
          width: 10px;
        }
        .banner {
          padding: 15px 0 0 20px;
          width: 100%;
          display:flex;
          align-items:center;
          display: flex;
          justify-content: space-between;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}