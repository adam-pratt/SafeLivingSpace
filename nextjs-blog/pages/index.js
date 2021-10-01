import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { getImageByName } from '../utils/imgLoader'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Safe Living Space</title>
        <link rel="icon" href="/images/SlsLogo.jpg" />
      </Head>
      <div className="bannerWrapper">{Banner()}</div>
      <main>
        <img className="homepageImage" src={getImageByName('hands.png')}>

        </img>
        <h3 className="mission-title">Mission</h3>
        <p className="mission-text">Safe Living Space is dedicated to creating a world where everyone is safe where they live.
        <br></br>
        <br></br>
            We coordinate the expertise of healthcare, safety, and subject matter experts to integrate cutting-edge education 
            and research to identify, prevent, and treat traumatic brain injury and concussion secondary to the experience of 
            domestic, intimate partner, and family violence.
        </p>
        <div className="work-container">
          <h1 className="work-title">Our Work</h1>
          <div className="work-icon-container">
            <img className="work-icon-left" width="120px" height="120px" src={getImageByName('icon1.png')}></img>
            <img className="work-icon-middle" width="140px" height="120px" src={getImageByName('icon2.png')}></img>
            <img className="work-icon-right" width="140px" height="120px" src={getImageByName('icon3.png')}></img>
          </div>
          <div className="work-subtitle-container">
            <div className="work-subtitle">Resources</div>
            <div className="work-subtitle">Community</div>
            <div className="work-subtitle">Advocacy</div>
          </div>
          <div className="work-text-container">
            <div className="work-text">Provide innovative concussion screening tools
            for individuals and first responders to aid in the detection of concussion from
            domestic, intimate partner, and family violence</div>
            <div className="work-text">Uniting healthcare workers, first responders,
            policy makers, the legal system, the public at large, and anyone who has
            experienced violence where they live</div>
            <div className="work-text">We are a source of education for leaders and
            policymakers on identifying, preventing, and treating concussion
            and traumatic brain injury as a result of domestic,
            intimate partner, and family violence</div>
          </div>
        </div>
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
        </div>
      </main>
      <footer>
        {Footer()}
      </footer>

      <style jsx>{`
        .work-icon-left {
          margin: 0 10% 0 3%;
          width: 120px;
          height: 120px;
        }
        .work-icon-middle {
          margin: 0 14% 0 14%;
          width: 140px;
          height: 120px;
        }
        .work-icon-right {
          margin: 0 3% 0 10%;
          width: 120px;
          height: 120px;
        }
        .work-icon-container {
          justify-content: space-between;
        }
        .homepageImage {
          display: block;
          max-width:100%;
          width: auto;
          height: auto;
        }

        .work-text-container {
          display: flex;
          margin-bottom: 3%;
          margin-top: 3%;
        }
        .work-subtitle {
          font-size: 42px;
          font-weight: 390;
          color: white;
          margin: 0 10% 0 10%;
        }
        .work-subtitle-container {
          background-color: #370F7A;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .bannerWrapper {
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

        .work-text {
          flex-basis: 100%;
          text-align: center;
          font-weight: 390;
          word-spacing: 2px;
          color: black;
          letter-spacing: 1px;
          font-size: 28px;
          margin: 0 1% 0 1%;
        }
        .work-header {
          font-style: italic;
          font-size: 50px;
        }
        .work-title {
          margin: 0 0 24px 0;
          font-size: 60px;
        }
        .work-box {
          padding: 0 10px 0 10px;
          width 33.33%;
          height: 100%;
        }
        .work-box-container {
          width 100%;
          height: 400px;
          display: flex;
          align-items: center;
        }
        .work-container {
          text-align: center;
          color: white;
          width: 100%;
        }
        .mission-title {
          color: #370F7A;
          font-size: 50px;
          margin-bottom: 0px;
        }
        .work-title {
          color: #370F7A;
          font-size: 50px;
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
          font-size: 28px;
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