import { getImageByName } from '../../utils/imgLoader';

export default function News() {
    return (
        <div className= "news-container">
            <div className= "divider-line"></div>
            <div className="content-container-large">
                <img className="news-image" src={getImageByName("Concussion1.JPEG")}></img>
                <div className="news-text-container">
                    <div className="news-text-title">
                        In the News
                    </div>
                    <div className="news-text-1">
                        Concussion from sports is the same as concussion in domestic, intimate partner and family violence. 
                        Learn more in this week’s edition of <a className="link" href="https://www.nytimes.com/2022/03/01/magazine/brain-trauma-domestic-violence.html?referringSource=articleShare">New York Times.</a>
                    </div>
                    <div className="news-text-2">
                        <a className="link" href="https://safelivingspace.org/tools">(Also see Resources)</a>
                    </div>
                    
                </div>
                <img className="news-image" src={getImageByName("Concussion2.JPEG")}></img>
            </div>
            <div className= "divider-line"></div>
            <style jsx>
                {`
                    @media screen and (max-width: 900px) {
                        .news-text-title {
                            font-weight: 390 !important;
                            word-spacing: 1px !important;
                            letter-spacing: 0.5px !important;
                            font-size: 22px !important;
                            paddint-top: 15px !important;
                        }
                        .news-text-1 {
                            font-size: 16px !important;
                        }
                        .news-text-2 {
                            font-size: 16px !important;
                            paddint-top: 5px !important;
                        }
                        .news-image {
                            height: 200px !important;
                        }
                        .news-text-1 {
                            padding-top: 15px !important;
                        }
                        .news-text-2 {
                            padding-top: 15px !important;
                            padding-bottom: 15px !important;
                        }
                    }
                    @media screen and (max-width: 630px) {
                        .news-text-title {
                            padding-top: 15px;
                        }
                        .news-image {
                            display: none !important;
                        }
                        .news-text-container {
                            width: 100% !important; 
                        }
                        .news-text-1 {
                            font-size: 22px !important;
                        }
                    }
                    .link {
                        color: #370F7A;
                    }
                    .news-container {
                        width: 100%;
                        justify-contnet: center
                        align-items: center;
                        text-align: center;
                    }
                    .content-container-large {
                        flex-direction: row;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .news-text-container {
                        width: 40%;
                    }
                    .news-image {
                        height: 300px;
                    }
                    .divider-line {
                        width: 100%;
                        height: 5px;
                        background-color: #370F7A;
                    }
    
                    .news-text-title {
                        font-weight: 590;
                        word-spacing: 2px;
                        letter-spacing: 1px;
                        font-size: 42px;
                        color: #370F7A;
                    }
                    .news-text-1 {
                        display: inline-block;
                        font-weight: 390;
                        word-spacing: 2px;
                        color: black;
                        letter-spacing: 1px;
                        justify-content: center;
                        text-align: center;
                        font-size: 24px;
                        padding-top: 30px;
                        padding-left: 10%;
                        padding-right: 10%;
                    }
                    .news-text-2 {
                        font-weight: 390;
                        word-spacing: 2px;
                        color: black;
                        letter-spacing: 1px;
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        font-size: 24px;
                        padding-top: 30px;
                        padding-left: 10%;
                        padding-right: 10%;
                    }
                `}
            </style>
        </div>
    )
}