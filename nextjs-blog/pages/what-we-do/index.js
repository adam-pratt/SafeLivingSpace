import Head from 'next/head'

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function WhoWeAre() {
    return (
        <div className='who-we-are-container'>
            <Head>
                <title>What We Do</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper">{Banner()}</div>
            <div className="banner-spacer"/>
            <h1 className='title'>
                What We Do
            </h1>
            <divv className="text">
                Because everyone deserves to be safe where they live,
                Safe Living Space serves as the agent to coordinate multiple
                stakeholders who are healthcare, safety, and subject matter experts.
                These dynamic and diverse individuals team together to provide YOU 
                education, information, research, and data to identify, treat, and
                prevent traumatic brain injury and concussion secondary to the experience
                of domestic, intimate partner, and family violence
            </divv>
            <h1 className='title'>
                Projects
            </h1>
            <h3 className="sub-title">Vignette of Concussion Self-Screening Tool</h3>
            <div className="text">
                We’re developing novel tools dedicated to screening for concussion secondary to domestic, intimate partner, and family violence.                
            </div>
            <a href="http://safelivingspace.org/concussion-screening-tool">Learn More UnderConcussion Toolkit</a>
            <h3 className="sub-title">First Responders Tool</h3>
            <div className="text">
                    Coming Soon!
            </div>
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
                a {
                    font-weight: 190;
                    word-spacing: 2px;
                    color: #573494;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                    font-weigth: 200;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                .sub-title {
                    font-weight: 250;
                    word-spacing: 2px;
                    color: #573494;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                }
                .who-we-are-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .banner-wrapper {
                    width: 100%;
                    padding: 10px 0 10px 0;
                }

                .banner-spacer {
                    width: 100%;
                    height: 10px;
                    background-image: linear-gradient(to bottom right, #573494, #973494);
                }

                .title {
                    display: felx;
                    justify-content: center;
                    margin: 30px 0 30px 0;
                    color: #573494;
                    font-size: 60px;
                }

                .text {
                    width: 80%;
                    font-weight: 190;
                    word-spacing: 2px;
                    color: #222222;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                }

                footer {
                    margin-top: 30px;
                    width: 100%;
                }
            `}
            </style>

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