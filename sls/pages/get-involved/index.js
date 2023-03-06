import Head from 'next/head'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';
import ContactForm from '../../components/ContactForm';

export default function GetInvolved() {
    const pageName = "Get Involved";
    return (
        <div className='get-involved-container'>
            <Head>
                <title>Donate</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper"><Banner/></div>
            {PageTitle(pageName)}

            <div className='sub-title'>
                Donate
            </div>
            <div className="text">
                All donations directly fund Safe Living Space educational programs dedicated to
                the identification, prevention, and treatment of TBI and concussion as a result of
                the experience of domestic, intimate partner, and family violence.
            </div>
            <div className="text">
                Safe Living Space is a 501c3 tax exepct organization. Our EIN is: 86-3-54747
            </div>
            <div className="text">
                Our Address is 548 Market Street PMB 98385 San Francisco, C 94104-5401
            </div>
            <div className='button-wrapper'>
                <a href='https://www.paypal.com/donate?hosted_button_id=X7CELSBLXK9VQ' className='paypal'>
                    Paypal
                </a>
                <div className='venmo'>
                    <div className='venmo-header'>Venmo</div>
                    <div className='venmo-name'>@Safe-Living-Space</div>
                </div>
            </div>
            <div className='sub-title'>
                Join Us!
            </div>
            <div className="text">
                We are looking for dedicated and passionate people who want
                to make a difference by improving the detection, treatment,
                and prevention of concussion in the context of domestic,
                intimate partner, and family violence.
            </div>
            {ContactForm()}
            <br></br>
            <br></br>
            <br></br>
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
                .venmo-header {
                    text-align: center;
                    padding-top: 20px;
                }
                .venmo-name {
                    padding-top: 10px;
                    text-align: center;
                    font-size: 16px;
                    width: 180px;
                }
                .button-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 30px 0 30px 0;
                }
                .paypal {
                    border-radius: 28px;
                    text-decoration: none;
                    background-image: linear-gradient(to bottom right, #370F7A, #973494);
                    border-width: 2px;
                    padding: 25px 90px 25px 90px;
                    font-weight: 190;
                    word-spacing: 2px;
                    letter-spacing: 1px;
                    font-size: 30px;
                    weigth: 200px;
                    color: white;
                    display: flex;
                    align-items: center;
                    margin-right: 40px;
                }

                .paypal:hover {
                    opacity: 0.8;
                }

                .venmo {
                    border-radius: 28px;
                    background-color: white;
                    border-width: 2px;
                    padding: 23px 38px 23px 38px;
                    border-color: #370F7A;
                    border-style: solid;
                    font-weight: 190;
                    word-spacing: 2px;
                    color: #370F7A;
                    letter-spacing: 1px;
                    font-size: 30px;
                    weigth: 200px;
                }

                .get-involved-container {
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
                    margin-top: 30px;
                    margin-bottom: 30px;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 90px;
                    background-color: #370F7A;
                }

                .sub-title {
                    font-weight: 370;
                    word-spacing: 2px;
                    margin-top: 7px;
                    display: felx;
                    justify-content: center;
                    color: #370F7A;
                    font-size: 40px;
                    margin-bottom: 30px;
                }

                .title {
                    font-weight: 370;
                    word-spacing: 2px;
                    margin-top: 7px;
                    display: felx;
                    justify-content: center;
                    color: white;
                    font-size: 60px;
                }

                .text {
                    font-weight: 390;
                    word-spacing: 2px;
                    color: #222222;
                    letter-spacing: 1px;
                    font-size: 24px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    margin-bottom: 30px;
                    width: 80%;
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