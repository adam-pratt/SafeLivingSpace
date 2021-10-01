import Head from 'next/head'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function ContactUs() {
    return (
        <div className='get-involved-container'>
            <Head>
                <title>Get Involved</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper">
                {Banner()}
            </div>
            <div className="banner-spacer"/>
            <h1 className='title'>
                Get Involved
            </h1>
            <div className="text">
                We are looking for dedicated and passionate people who want to make a difference by improving the detection,
                treatment and prevention of domestic violence.
                <br></br>
                <br></br>
                If you would like to help us achieve our mission or have other inquiries with our team, please email 
                us at edie@safelivingspace.org
            </div>
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
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
                    width: 100%;
                    height: 10px;
                    background-image: linear-gradient(to bottom right, #370F7A, #973494);
                }

                .title {
                    margin: 0;
                    display: felx;
                    justify-content: center;
                    padding: 100px 0 30px 0;
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
                    padding-bottom: 100px;
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