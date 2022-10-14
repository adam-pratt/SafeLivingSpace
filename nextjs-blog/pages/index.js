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
        <img className="homepageImage" src={getImageByName('SLS5KWebsiteBanner.svg')}></img>
        <div className="thinGreyLine"></div>
        <p className="mission-text">In honor of Domestic Violence Awareness Month, Safe Living Space is hosting a <b>5K - Your Way Fundraiser</b> for brain injury awareness and education.  Join us the weekend of October 29 - 30th for a 5K - Your Way!
          <br></br>
          <br></br>
            All proceeds will support Safe Living Space, a 501c3 organization (EIN 86-3054747).
        </p>
        <div className='button-wrapper'/>
        <CustomDonateButton name='Register - Free' link=' https://docs.google.com/forms/d/e/1FAIpQLSefUR10ipF4gtxT1XMnixFGKx26raNA3b3oGacwabvkUP5rZQ/viewform?usp=sf_link'/>
        <div className='button-wrapper'/>
        <CustomDonateButton name='Donate to 5K Fundraiser' link='https://www.paypal.com/donate/?hosted_button_id=X7CELSBLXK9VQ'/>
        <div className='button-wrapper'/>
        <div className='join-us-container'>
          <img className='shirt-img' src={getImageByName('Shirt back.png')}></img>
          <div className='join-us-words-container'>
            <p className='mission-text'>
            At registration, you will have the opportunity to order a shirt to support the SLS Brain Injury 5K. You can also order through the link  below!
            </p>
            <CustomDonateButton name='Order T-shirt - Coming Soon'/>
          </div>
        </div>
        <div className="focus-section">
          <div className="title-text"> THE FOCUS </div>
          <div className="mission-text">
            This year, the SLS Brain Injury 5K - Your Way will be completed in support of brain injury awareness and education. According to recent statistics, millions of people in the U.S. experience a new brain injury every year.
            These injuries can have many causes, not limited to falls, motor vehicle accidents, sports, and domestic violence, and can range in severity from mild to severe brain injuries (TBIs).
            <br></br>
            <br></br>
            <br></br>
            Our goal is to promote education and awareness about brain injury
            so that more people have the tools to keep their brains safe! 
          </div>
        </div>
      </main>
      <footer>
        {Footer()}
      </footer>

      <style jsx>{`
        .focus-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 80px;
          margin-top: 80px;
        }
        .title-text {
          color: #370F7A;
          align-items: center;
          font-size: 24px;
        }
        .homepageImage {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .shirt-img {
          width: 50%;
          height: 50%;
          max-width: 600px; 
          max-height: 600px; 
        }
        @media only screen and (max-width: 900px) {
          .mission-text {
            font-size: 18px !important;
          }
          .title-text {
            align-items: center;
            font-size: 18px;
          }
          .focus-section {
            margin-bottom: 40px !important;
            margin-top: 40px !important;
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
          margin: 0 0 0 0;
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
          width: 92%;
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
          width: 100%;
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