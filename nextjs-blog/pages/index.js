import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import Logo from '../public/images/SlsLogo.jpg';
import MissionLogo1 from '../public/images/missionLogo1.png';
import MissionLogo2 from '../public/images/missionLogo2.png';
import MissionLogo3 from '../public/images/missionLogo3.png';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Safe Living Space</title>
        <link rel="icon" href="/images/SlsLogo.jpg" />
      </Head>
      <div className="banner">
        <div className='banner-logo'>
          <Image width="40px" height="40px" src={Logo}></Image>
          <h1 className='bannerText'> Safe Living Space</h1>
        </div>
        <a className='donate-button' href="https://www.paypal.com/donate/?hosted_button_id=X7CELSBLXK9VQ">Donate</a>
      </div>
      { NavBar()}
      <div className="header-spacer"/>
      <main>
        {Carousel()}
        <h3 className="tagline">Everyone Deserves To Feel Safe Where They Live</h3>
        <div className="mission-background">
          <div className="mission-container">
            <h1 className="mission-title">Our Mission</h1>
            <div className="mission-box-container">
              <div className="mission-box"> 
              <Image width="80px" height="80px" src={MissionLogo1}></Image>
                <h3 className="mission-header"> Resources </h3>
                <p className="mission-text">Providing innovative training for first
                  responders and state of the art educational
                  resources to victims of domestic violence</p>
              </div>
              <div className="mission-box"> 
              <Image width="80px" height="80px" src={MissionLogo2}></Image>
                <h3 className="mission-header"> Community </h3>
                <p className="mission-text">
                Uniting healthcare workers, policy makers,
                victims and the general public against domestic
                violence
                </p>
              </div>
              <div className="mission-box">
              <Image width="80px" height="80px" src={MissionLogo3}></Image>
                <h3 className="mission-header"> Advocacy </h3>
                <p className="mission-text">Pushing for systemic reform in the detection,
                  prevention and treatment of domestic violence</p>
              </div>
            </div>
          </div>
        </div>
        <div className='join-us'>
          <h1 className="mission-title">Join Us</h1>
          <p className="mission-text">
          We are looking for dedicated and passionate people
          who want to make a difference by improving the detection,
          treatment and prevention of domestic violence.

          If you would like to help us achieve our mission or have other
          inquiries with our team, please email us at edie@safelivingspace.org
          </p>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>

      <style jsx>{`
        .banner-logo {
          display: flex;
          align-items: center;
        }
        .donate-button {
          background-color: #573494;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-right 100px;
        }

        .donate-button:hover {
          background-color: #973494;
        }
        .mission-text {
          font-size: 24px;
        }
        .mission-header {
          font-style: italic;
          font-size: 40px;
        }
        .mission-title {
          color #222222;
          font-size: 70px;
          margin-top: 20px;
        }
        .mission-background {
          margin-top: 40px;
          background-color: #E5F2E9;
          width: 100%;
          display: felx;
          justify-content: center;
        }
        .mission-box {
          padding: 0 10px 0 10px;
          width 33.33%;
          height: 100%;
        }
        .mission-box-container {
          color #222222;
          width 100%;
          height: 400px;
          display: flex;
          align-items: center;
        }
        .mission-container {
          text-align: center;
          color: #573494;
          width: 90%;
        }
        .tagline {
          color: #573494;
          font-size: 32px;
          padding-top: 30px
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

        .bannerText {
          margin: 5px 0 0 10px;
          color: #573494
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .header-spacer {
          margin-top: 10px;
          width: 100%;
          height: 10px;
          background-color: #573494;
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
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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