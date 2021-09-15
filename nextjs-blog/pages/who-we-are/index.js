import Link from 'next/link'
import Head from 'next/head'
import Banner from '../../components/Banner';

export default function WhoWeAre() {
    return (
        <div>
            <Head>
                <title>Who We Are</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper">{Banner()}</div>
            <div className="main-container">
                <div className='section-container'>
                    <h1>Board of Directors</h1>
                    <h3>Edie Zusman, MD, MBA   CEO and Executive Director</h3>
                    <h3>Judy Robinson   Secretary</h3>
                    <h3>Catherine Ndungo-Case   Treasurer</h3>
                    <h3>Adam Pratt   Director at Large</h3>
                    <h3>Stacie G. Buchanan   Director at Large</h3>
                </div>
                <div className='section-container'>
                    <h1>Advisory Board</h1>
                    <h3>Jahmal Miller, MHA</h3>
                    <h3>Katie Kaffka, Medical Social Work</h3>
                    <h3>Joshua Kuluva,  Neurology and Psychiatry</h3>
                    <h3>Nanci Tucker,  Pediatrics and Board of Casa De Las Madres</h3>
                    <h3>Rebecca Henrickson, RN</h3>
                    <h3>Kasey Holbert, Veterinary Student</h3>
                    <h3>Jonathan Karpa, Law Enforcement</h3>
                    <h3>Gretchen Hess, Speech and Cognitive Therapy</h3>
                    <h3>Saint-Aaron Morris, Military Neurosurgeon USAF</h3>
                    <h3>Andrew Reisner, Pediatric TBI Expert</h3>
                    <h3>Rachel Plouse, TBI Research</h3>
                    <h3>Elliott Block, Physical Medicine and Rehabilitation</h3>
                    <h3>Jordan Glassman,  Equestrian, Medical Student</h3>
                    <h3>Jessica Almgren-Bell, Premed</h3>
                    <h3>Yuriy Vinokur, Medical Director Primary Care, Tribal Health System</h3>
                    <h3>Heather Theaux, RN, MS, TCRN, Director Emergency Services/Trauma Program NorthBay Healthcare</h3>
                    <h3>Jane A. Petro, MD</h3>
                    <h3>Loc Nguyen, MD, Internal Medicine Central Valley</h3>
                </div>
                <Link href="/">
                    <a> Back Home</a>
                </Link>
            </div>
            <style jsx> {`
                h1 {
                    color: #573494;
                    text-decoration: underline;
                }

                h3 {
                    color: #444444;
                }

                .section-container {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
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