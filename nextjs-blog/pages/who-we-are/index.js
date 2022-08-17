import Head from 'next/head'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

export default function WhoWeAre() {
    const pageTitle = "Who We Are";
    return (
        <div className="wrapper">
            <Head>
                <title>Who We Are</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper"><Banner/></div>
            {PageTitle(pageTitle)}
            <div className="main-container">
                <div className='section-container'>
                    <h3 className='intro-text'>
                        We are a dynamic, diverse group of individuals bringing
                        together our expertise and experience in medicine, nursing,
                        emergency response, law, social work, public health, media, and more.
                        We are passionate about changing the landscape of screening, treatment,
                        and prevention of concussion and brain injury secondary to the
                        experience of domestic, partner, intimate partner, and family violence.
                    </h3>
                    <h1 className="title">Board of Directors</h1>
                    <h3 className="text">
                        Edie Zusman, MD, MBA <br/>
                        Neurosurgeon and Director of TBI & Concussion Clinic<br/>
                        Safe Living Space CEO and Executive Director
                    </h3>
                    <h3 className="text">
                        Judy Robinson, MA<br/>
                        Former Sustainability and 2020 Census Manager, Sacramento County<br/>
                        Secretary
                    </h3>
                    <h3 className="text">
                        Catherine Ndungo-Case, MS<br/>
                        Director, Precision Medicine; Portfolio and Program Management, AbbVie<br/>
                        Founder and Board President, Cheza Nami Foundation, Inc.<br/>
                        Treasurer
                    </h3>
                    <h3 className="text">
                        Adam Pratt, BS<br/>
                        Senior Engineer, Zocdoc<br/>
                        Director at Large
                    </h3>
                    <h3 className="text">
                        Stacie G. Buchanan, MSW<br/>
                        Former Senior Director at Casey<br/>
                        Family Programs - Foster Care
                        Director at Large
                    </h3>
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
                .intro-text {
                    font-weight: 390;
                    word-spacing: 2px;
                    color: #222222;
                    letter-spacing: 1px;
                    font-size: 24px;
                    text-align: center;
                }
                .wrapper {
                    overflow: hidden;
                }
                .title {
                    margin: 20px 0 0 0;
                    color: #370F7A;
                    font-size: 60px;
                }

                .text {
                    font-weight: 390;
                    word-spacing: 2px;
                    color: #222222;
                    letter-spacing: 1px;
                    font-size: 24px;
                    margin: 25px 0 0 0;
                    letter-spacing: 1px;
                    display: flex;
                    text-align: left;
                }

                .banner-spacer {
                    margin-top: 10px;
                    width: 100%;
                    height: 10px;
                    background-image: linear-gradient(to bottom right, #370F7A, #973494);
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
                    padding: 10px 0 10px 0;
                    width: 100%;
                }

                footer {
                    width: 100%;
                }
                @media only screen and (max-width: 900px) {
                    .title {
                        font-size: 40px;
                    }
                    .text {
                        font-size: 18px;
                    }
                    .section-container {
                        width: 70%;
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