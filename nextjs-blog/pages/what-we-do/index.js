import Head from 'next/head'

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

export default function WhoWeAre() {
    //TODO: ADD VID
    const pageTitle = "Projects"
    return (
        <div className='who-we-are-container'>
            <Head>
                <title>What We Do</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper">{Banner()}</div>
            {PageTitle(pageTitle)}
            <a className="sub-title" href="http://safelivingspace.org/concussion-screening-tool">Concussion Screening Tools</a>
            <div className="text">
                The concussion experts at Safe Living Space recognized that no concussion screening tools existed for quickly assessing the status of individuals experiencing domestic/intimate
                partner/family violence. They also recognized that many injured individuals are unable to access medical care due to both COVID-19 and the intimating/controlling nature of partner and family violence.     
            </div>
            <div className="text">
                <div className="bold-text">In response, the team developed two novel screening tools:</div>
                <b>1. The first responder screening tool</b> based on current standards for screening sports concussions, such as MMA and football. 
                <br></br>
                <br></br>
                <b>2. The self-screening tool</b> for individuals. 
                <br></br>
                <br></br>
                The team also developed guidance for managing an individual’s return to sport following a concussion, which may serve as a guide for evaluating the appropriate point in time for an individual’s return to the social environment in which injuries occurred.
                <br></br>
                <br></br>
                <div className="sub-title">Concussion Research in DV/IPV/FV</div>
                In partnership with WEAVE, NorthBay, ThinkFirst, Stanford, and many others, Dr. Zusman and team are advancing concussion research, including assessment of concussion and whiplash in individuals with certain types of migraine headaches, Chronic Pain Syndromes, Fibromyalgia, and Alzheimer’s
            </div>
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
                a {
                    font-weight: 190;
                    word-spacing: 2px;
                    color: #370F7A;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                    font-weigth: 200;
                }
                a:hover {
                    opacity: 0.5;
                }
                .bold-text {
                    font-weight: 200;
                    word-spacing: 2px;
                    color: #370F7A;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 24px;
                    margin-top: 24px;
                }

                .sub-title {
                    font-weight: 300;
                    word-spacing: 2px;
                    color: #370F7A;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 28px;
                    margin-bottom: 24px;
                    margin-top: 24px;
                }
                .who-we-are-container {
                    overflow: hidden;
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
                    background-image: linear-gradient(to bottom right, #370F7A, #973494);
                }

                .title {
                    display: felx;
                    justify-content: center;
                    margin: 30px 0 30px 0;
                    color: #370F7A;
                    font-size: 60px;
                }

                .text {
                    width: 80%;
                    font-weight: 190;
                    word-spacing: 2px;
                    color: #222222;
                    letter-spacing: 1px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 24px;
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