import Head from 'next/head'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

export default function Tools() {
    //TODO RENAME THIS TO TOOLS WHEN THE DROPDOWN WORKS
    const pageTitle = "Resources"
    return (
        <div className='tools-container'>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <div className="banner-wrapper">
                {Banner()}
            </div>
            {PageTitle(pageTitle)}
            <div className="content-container">
                <div className="title-text">
                    Concussion Self-Screening Tool
                </div>
                <div className="description-text">
                    This tool is intended to be used by those who believe they may have sustained a concussion. We encourage you to bring this form with you to your next visit with your healthcare team.
                    <br></br>
                    <br></br>
                    Please note, this tool is intended to educate individuals and help them assess their risk of experiencing a concussion. This tool does not diagnose concussion.
                </div>
                <a className="download-here" href="https://s3.us-west-1.amazonaws.com/safelivingspace.org/Documents/Concussion+Screening+Self-Assessment+Tool-090921.pdf" target="_blank" rel="noopener noreferrer">View Tool</a>
                <div className="title-text">
                    First Responders Concussion Screening Tool
                </div>
                <div className="description-text">
                    This tool is intended to be used by first responders to screen individuals for concussion. This tool does not diagnose concussion.
                </div>
                <a className="download-here" href="https://s3.us-west-1.amazonaws.com/safelivingspace.org/Documents/First+Responder+Screening+Tool.pdf" target="_blank" rel="noopener noreferrer">View Tool</a>
                <div className="title-text">
                    Sports Concussion Screening
                </div>
                <div className="description-text">
                    The following questions are to be asked of MMA participants immediately after an injury is suspected. If the participant is unable to respond correctly to any of these questions, then the ringside physician shall conduct a focused neurological evaluation.
                    <br></br>
                    <br></br>
                    Safe Living Space’s DV/IPV/FV concussion screening tools were modeled after these guidelines.
                </div>
                <a className="download-here" href="https://s3.us-west-1.amazonaws.com/safelivingspace.org/Documents/sports-concussion-screening-tools.pdf" target="_blank" rel="noopener noreferrer">View Tool</a>
                {/* <div className="title-text">
                    Return To Sports Guidelines
                </div>
                <a className="download-here" href="https://s3.us-west-1.amazonaws.com/safelivingspace.org/Documents/return-to-play-guide.pdf" target="_blank" rel="noopener noreferrer">View Tool</a> */}
                <div className="boxed-content">
                    Please feel free to use these documents and modify them to your liking.
                    If you choose to modify them, please send a copy of your revisions to edie@safelivingspace.org, so we can feature your work ad add to our collective
                    knowledge of and resources for concussion screening.
                </div>
            </div>
            <footer>
                {Footer()}
            </footer>
            
            <style jsx>
                {`
                .boxed-content {
                    margin-top: 60px;
                    font-weight: 500;
                    font-size: 26px;
                    border-color: #370F7A;
                    border-width: 6px;
                    border-style: solid;
                    padding: 25px 25px 25px 25px;
                }
                .download-here {
                    font-weight: 500;
                    color: #370F7A;
                    font-size: 26px;
                    text-decoration: underline;
                }
                .download-here:hover {
                    opacity: 0.7;
                    cursor: pointer;
                }
                .content-container {
                    width: 60%;
                    text-align: center;
                }
                .title-text {
                    font-weight: 600;
                    color: #370F7A;
                    font-size: 50px;
                    margin-top: 60px;
                    margin-bottom: 30px;
                }
                .description-text {
                    font-weight: 500;
                    font-size: 26px;
                    margin-bottom: 30px;
                }
                .banner-wrapper {
                    width: 100%;
                    padding: 10px 0 10px 0;
                }

                .tools-container {
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                footer {
                    margin-top: 40px;
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