import Link from 'next/link'
import Head from 'next/head'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function WhoWeAre() {
    return (
        <div>
            <Head>
                <title>Who We Are</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper">{Banner()}</div>
            <div className="banner-spacer"/>
            <div className="main-container">
                <div className='section-container'>
                    <h1 className="title">Board of Directors</h1>
                    <h3 className="text">Edie Zusman, MD, MBA   CEO and Executive Director</h3>
                    <h3 className="text">Judy Robinson   Secretary</h3>
                    <h3 className="text"> Catherine Ndungo-Case   Treasurer</h3>
                    <h3 className="text">Adam Pratt   Director at Large</h3>
                    <h3 className="text">Stacie G. Buchanan   Director at Large</h3>
                </div>
                <div className='section-container'>
                    <h1 className="title">Advisory Board</h1>
                    <h3 className="text">Jahmal Miller, MHA</h3>
                    <h3 className="text">Katie Kaffka, Medical Social Work</h3>
                    <h3 className="text">Joshua Kuluva,  Neurology and Psychiatry</h3>
                    <h3 className="text">Nanci Tucker,  Pediatrics and Board of Casa De Las Madres</h3>
                    <h3 className="text">Rebecca Henrickson, RN</h3>
                    <h3 className="text">Kasey Holbert, Veterinary Student</h3>
                    <h3 className="text">Jonathan Karpa, Law Enforcement</h3>
                    <h3 className="text">Gretchen Hess, Speech and Cognitive Therapy</h3>
                    <h3 className="text">Saint-Aaron Morris, Military Neurosurgeon USAF</h3>
                    <h3 className="text">Andrew Reisner, Pediatric TBI Expert</h3>
                    <h3 className="text">Rachel Plouse, TBI Research</h3>
                    <h3 className="text">Elliott Block, Physical Medicine and Rehabilitation</h3>
                    <h3 className="text">Jordan Glassman,  Equestrian, Medical Student</h3>
                    <h3 className="text">Jessica Almgren-Bell, Premed</h3>
                    <h3 className="text">Yuriy Vinokur, Medical Director Primary Care, Tribal Health System</h3>
                    <h3 className="text">Heather Theaux, RN, MS, TCRN, Director Emergency Services/Trauma Program NorthBay Healthcare</h3>
                    <h3 className="text">Jane A. Petro, MD</h3>
                    <h3 className="text">Loc Nguyen, MD, Internal Medicine Central Valley</h3>
                </div>
            </div>
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
                .title {
                    margin: 20px 0 0 0;
                    color: #573494;
                    font-size: 60px;
                }

                .text {
                    margin: 25px 0 0 0;
                    font-weight: 190;
                    word-spacing: 2px;
                    color: #222222;
                    letter-spacing: 1px;
                    display: flex;
                    text-align: left;
                    font-size: 24px;
                }

                .banner-spacer {
                    margin-top: 10px;
                    width: 100%;
                    height: 10px;
                    background-image: linear-gradient(to bottom right, #573494, #973494);
                }

                .section-container {
                    width: 50%;
                    padding-bottom: 20px;
                }
                .main-container {
                    align-items: center;
                    width 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .banner-wrapper {
                    margin-top: 10px;
                    width: 100%;
                }

                footer {
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