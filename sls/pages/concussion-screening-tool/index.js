import Head from 'next/head'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import { getImageByName } from '../../utils/imgLoader'
import PageTitle from '../../components/PageTitle';

export default function GetInvolved() {
    const pageTitle = "Resources";
    return (
        <div className='get-involved-container'>
            <Head>
                <title>Resources</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper"><Banner/></div>
            {PageTitle(pageTitle)}
            <img width="80%" height="80%" src={getImageByName('concussion-screening-tools.png')}></img>
            <br/>
            <br/>
            <br/>
            <img width="80%" height="80%" src={getImageByName('return-to-play-guide.png')}></img>
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
                .banner-wrapper {
                    width: 100%;
                    padding: 10px 0 10px 0;
                }
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
                    width: 35%;
                    justify-content: space-between;
                    margin: 30px 0 0 0;
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
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                }

                footer {
                    width: 100%;
                }
                @media only screen and (max-width: 900px) {
                    .title {
                        font-size: 40px;
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