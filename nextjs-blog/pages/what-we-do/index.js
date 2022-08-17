import Head from 'next/head'

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';
import WomenMakingHistoryAwardBanner from '../../components/WomenMakingHistoryAwardBanner';
import DocImageSection from '../../components/DocImgSection';
import MeetTheAwardees from '../../components/MeetTheAwardees';

export default function WhoWeAre() {
    //TODO: ADD VID
    const pageTitle = "Projects"
    return (
        <div className='who-we-are-container'>
            <Head>
                <title>What We Do</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper"><Banner/></div>
            {PageTitle(pageTitle)}
            <a className="sub-title" href="https://safelivingspace.org/tools">Concussion Screening Tools</a>
            <div className="text">
                The concussion experts at Safe Living Space recognized that no concussion screening tools existed for quickly assessing the status of individuals experiencing domestic/intimate
                partner/family violence. They also recognized that many injured individuals are unable to access medical care due to both COVID-19 and the intimidating/controlling nature of partner and family violence.     
            </div>
            <div className="text">
                <div className="bold-text">In response, the team developed two novel screening tools:</div>
                <div className="bold-text">1. The first responder screening tool</div> based on current standards for screening sports concussions, such as MMA and football. 
                <div className="bold-text">2. The self-screening tool</div> for individuals. 
                The team also developed a tool that individuals can use on their own to assess their risk of concussion following an injury to the head or neck. Please note, this tool is not designed to diagnose, but rather to assess relative concussion risk. Individuals are encouraged to share their results with a medical provider for proper diagnosis and treatment.
                <br></br>
                <br></br>
                <div className="sub-title">Concussion Research in DV/IPV/FV</div>
                In partnership with WEAVE, NorthBay, ThinkFirst, Stanford, and many others, Dr. Zusman and team are advancing concussion research, including assessment of concussion and whiplash in individuals with certain types of migraine headaches, Chronic Pain Syndromes, Fibromyalgia, and Alzheimer’s
            </div>
            <iframe className='youtube-container'  src="https://www.youtube.com/embed/WdxYw2itR0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="homepageDesktop">
                <div className="thinGreyLine"></div>
                {DocImageSection()}
            </div>
            {WomenMakingHistoryAwardBanner()}
            {MeetTheAwardees()}
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
                @media only screen and (max-width: 1400px) {
                    .homepageDesktop { 
                        display: none !important
                    }
                }
                .thinGreyLine {
                    width: 100%;
                    background-color: #E5E3DD;
                    height: 1px;
                }  
                .youtube-container {
                    width: 1200px;
                    height: 600px;
                }
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
                    opacity: 0.8;
                }
                .bold-text {
                    font-weight: 400;
                    word-spacing: 2px;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                .sub-title {
                    font-weight: 300;
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
                @media only screen and (max-width: 900px) {
                    .youtube-container {
                        width: 400px;
                        height: 200px;
                    }
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