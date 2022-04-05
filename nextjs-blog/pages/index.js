import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import WorkSection from '../components/WorkSection';
import News from '../components/News';
import WomenMakingHistoryAwardBanner from '../components/WomenMakingHistoryAwardBanner';
import DocImageSection from '../components/DocImgSection';
import MeetTheAwardees from '../components/MeetTheAwardees';
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
        <div className="thinGreyLine"></div>
        {DocImageSection()}
        {WomenMakingHistoryAwardBanner()}
        {MeetTheAwardees()}
        {/* <h3 className="mission-title">Mission</h3>
        <p className="mission-text">Safe Living Space is dedicated to creating a world where everyone is safe where they live.
        <br></br>
        <br></br>
            We coordinate the expertise of healthcare, safety, and subject matter experts to integrate cutting-edge education 
            and research to identify, prevent, and treat traumatic brain injury and concussion secondary to the experience of 
            domestic, intimate partner, and family violence.
        </p>
        
        {WorkSection()}
        {News()}
        <div className='join-us-container'>
          <div className='join-us-words-container'>
            <h1 className='join-us-title'>Join Us</h1>
            <p className='join-us-text'>
            We are looking for dedicated and passionate people
            who want to make a difference by improving the detection,
            treatment and prevention of domestic violence.
            </p>
            <p className='join-us-text'>
            If you would like to help us achieve our mission or have other
            inquiries with our team, please email us at <b>edie@safelivingspace.org</b>
            </p>
          </div>
          <img width="50%" height="40%" src={getImageByName('hand-img.png')}></img>
        </div> */}
      </main>
      <footer>
        {Footer()}
      </footer>

      <style jsx>{`

        .thinGreyLine {
          margin-top: 10px;
          width: 100%;
          background-color: #E5E3DD;
          height: 1px;
        }        

        .banner-wrapper {
          width: 100%;
          padding: 10px 0 10px 0;
        }
        .join-us-words-container {
          margin: 0 4% 0 4%;
        }
        .join-us-text {
          font-weight: 390;
          word-spacing: 2px;
          letter-spacing: 1px;
          font-size: 24px;
          color: #333333;
        }
        .join-us-container {
          margin: 0 0 0 2%;
          display: flex;
          align-items: center;
          width: 92%;
          color: #333333;
        }
        .join-us-title {
          color: #370F7A;
          font-size: 60px;
        }

        
        .mission-title {
          color: #370F7A;
          font-size: 50px;
          margin-bottom: 0px;
        }
     
        .mission-text {
          width: 80%;
          font-weight: 390;
          word-spacing: 2px;
          color: #222222;
          letter-spacing: 1px;
          display: flex;
          justify-content: center;
          text-align: center;
          font-size: 24px;
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