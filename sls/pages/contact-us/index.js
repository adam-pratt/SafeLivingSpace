import Head from 'next/head'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import PageTitle from '../../components/PageTitle';

export default function ContactUs() {
    const pageTitle = "Contact Us"
    return (
        <div className='get-involved-container'>
            <Head>
                <title>Contant Us</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper"><Banner/></div>
            {PageTitle(pageTitle)}
            <div className="text">
                <p>
                    If you would like to help us achieve our mission or have other inquiries about our team,
                    please send us a message by filling out the form below
                    <br></br>
                    <br></br>
                    We look forward to hearing from you.
                </p>
            </div>
            {ContactForm()}
            <br></br>
            <br></br>
            <footer>
                {Footer()}
            </footer>
            <style jsx> {`
                .get-involved-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                .banner-wrapper {
                    width: 100%;
                    padding: 10px 0 10px 0;
                }

                .text {
                    width: 80%;
                    font-weight: 390;
                    word-spacing: 2px;
                    color: #222222;
                    letter-spacing: 1px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 24px;
                    flex-direction: row;
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