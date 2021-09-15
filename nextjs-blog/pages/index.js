import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/Carousel';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import MissionLogo1 from '../public/images/missionLogo1.png';
import MissionLogo2 from '../public/images/missionLogo2.png';
import MissionLogo3 from '../public/images/missionLogo3.png';
import HandImg from '../public/images/hand-img.png';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Safe Living Space</title>
        <link rel="icon" href="/images/SlsLogo.jpg" />
      </Head>
      <div className="bannerWrapper">{Banner()}</div>
      <main>
        {Carousel()}
        <h3 className="mission-title">Our Mission</h3>
        <p className="mission-text">Because everyone deserves to be safe where they live,
          <br></br>
          <br></br>
          Safe Living Space serves as the agent to coordinate multiple
          stakeholders who are healthcare, safety, and subject matter experts.
          These dynamic and diverse individuals team together to provide YOU 
          education, information, research, and data to identify, treat, and
          prevent traumatic brain injury and concussion secondary to the experience
          of domestic, intimate partner, and family violence</p>
        <div className="work-background">
          <div className="work-container">
            <h1 className="work-title">Our Work</h1>
            <div className="work-box-container">
              <div className="work-box"> 
              <Image width="80px" height="80px" src={MissionLogo1}></Image>
                <h3 className="work-header"> Resources </h3>
                <p className="work-text">Providing innovative training for first
                  responders and state of the art educational
                  resources to victims of domestic violence</p>
              </div>
              <div className="work-box"> 
              <Image width="80px" height="80px" src={MissionLogo2}></Image>
                <h3 className="work-header"> Community </h3>
                <p className="work-text">
                Uniting healthcare workers, policy makers,
                victims and the general public against domestic
                violence
                </p>
              </div>
              <div className="work-box">
              <Image width="80px" height="80px" src={MissionLogo3}></Image>
                <h3 className="work-header"> Advocacy </h3>
                <p className="work-text">Pushing for systemic reform in the detection,
                  prevention and treatment of domestic violence</p>
              </div>
            </div>
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
          <Image width="800px" height="800px" src={HandImg}></Image>
        </div>
      </main>
      <footer>
        {Footer()}
      </footer>

      <style jsx>{`
        .bannerWrapper {
          margin-top: 10px;
          width: 100%;
        }
        .join-us-words-container {
          margin: 0 4% 0 4%;
        }
        .join-us-text {
          font-size: 20px;
          color: #333333;
        }
        .join-us-container {
          margin: 0 0 0 2%;
          display: flex;
          align-items: center;
          width: 90%;
          color: #333333;
        }
        .join-us-title {
          padding-top: 10px;
          font-size: 50px;
        }

        .work-text {
          font-weight: 400;
          font-size: 24px;
        }
        .work-header {
          font-style: italic;
          font-size: 40px;
        }
        .work-title {
          font-size: 70px;
          margin-top: 20px;
        }
        .work-background {
          margin-top: 40px;
          background-image: linear-gradient(to bottom right, #573494, #973494);
          width: 100%;
          display: felx;
          justify-content: center;
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
          width: 90%;
        }
        .mission-title {
          margin: 20px 0 0 0;
          color: #573494;
          font-size: 52px;
        }
        .mission-text {
          width: 60%;
          display: flex;
          justify-content: center;
          text-align: center;
          color: #573494;
          font-size: 21px;
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
        }

        main {
          padding-top: 20px;
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

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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