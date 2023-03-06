import { getImageByName } from '../../utils/imgLoader'

export default function WorkSection() {
    return(
        <div>
            <div className="work-container-mobile">
                <h1 className="work-title">Our Work</h1>
                <div className="work-mobile-container">
                    <div className="work-subtitle-mobile">Resources</div>
                    <img className="work-icon-mobile" width="120px" height="120px" src={getImageByName('icon1.png')}></img>
                    <div className="work-text-mobile">Provide innovative concussion screening tools
                    for individuals and first responders to aid in the detection of concussion from
                    domestic, intimate partner, and family violence</div>
                </div>
                <div className="work-mobile-container">
                    <div className="work-subtitle-mobile">Community</div>
                    <img className="work-icon-mobile" width="140px" height="120px" src={getImageByName('icon2.png')}></img>
                    <div className="work-text-mobile">Uniting healthcare workers, first responders,
                    policy makers, the legal system, the public at large, and anyone who has
                    experienced violence where they live</div>
                </div>
                <div className="work-mobile-container">
                    <div className="work-subtitle-mobile">Advocacy</div>
                    <img className="work-icon-mobile" width="140px" height="120px" src={getImageByName('icon3.png')}></img>
                    <div className="work-text-mobile">We are a source of education for leaders and
                    policymakers on identifying, preventing, and treating concussion
                    and brain injury as a result of domestic,
                    intimate partner, and family violence</div>
                </div>
            </div>
            <style jsx>
            {`
                @media screen and (min-width: 900px) {
                    .work-container-mobile {
                        display: none;
                    }
                }
                .work-container-mobile {
                    width: 100%;
                    align-items: center;
                    justify-contnet: center;
                    text-align: center;
                }
                .work-text-mobile {
                    font-size: 22px;
                    word-spacing: 2px;
                    color: black;
                    letter-spacing: 1px;
                    color: black;
                    margin-bottom: 30px;
                    margin-right: 5%;
                    margin-left: 5%;
                }
                .work-subtitle-mobile {
                    font-size: 32px;
                    font-weight: 390;
                    background-color: #370F7A;
                    width: 100%;
                    color: white;
                }
                .work-icon-left {
                    margin: 0 10% 0 3%;
                    width: 120px;
                    height: 120px;
                }
                .work-icon-middle {
                    margin: 0 14% 0 14%;
                    width: 140px;
                    height: 120px;
                }
                .work-icon-right {
                    margin: 0 3% 0 10%;
                    width: 120px;
                    height: 120px;
                }
                .work-icon-container {
                    justify-content: space-between;
                }
                .work-text-container {
                    display: flex;
                    margin-bottom: 3%;
                    margin-top: 3%;
                }
                .work-subtitle {
                    font-size: 42px;
                    font-weight: 390;
                    color: white;
                    margin: 0 10% 0 10%;
                }
                .work-subtitle-container {
                    background-color: #370F7A;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                .work-text {
                    flex-basis: 100%;
                    text-align: center;
                    font-weight: 390;
                    word-spacing: 2px;
                    color: black;
                    letter-spacing: 1px;
                    font-size: 24px;
                    margin: 0 1% 0 1%;
                }
                .work-header {
                    font-style: italic;
                    font-size: 50px;
                }
                .work-title {
                    margin: 0 0 24px 0;
                    font-size: 60px;
                }
                .work-box {
                    padding: 0 10px 0 10px;
                    width 33.33%;
                    height: 100%;
                }
                .work-box-container {
                    width 100%;
                    height: 400px;
                    display: flex;
                    align-items: center;
                }
                .work-container {
                    text-align: center;
                    color: white;
                    width: 100%;
                }   
                .work-title {
                    color: #370F7A;
                    font-size: 50px;
                }
            `}
            </style>
            <div className="work-container">
                <h1 className="work-title">Our Work</h1>
                <div className="work-icon-container">
                <img className="work-icon-left" width="120px" height="120px" src={getImageByName('icon1.png')}></img>
                <img className="work-icon-middle" width="140px" height="120px" src={getImageByName('icon2.png')}></img>
                <img className="work-icon-right" width="140px" height="120px" src={getImageByName('icon3.png')}></img>
                </div>
                <div className="work-subtitle-container">
                <div className="work-subtitle">Resources</div>
                <div className="work-subtitle">Community</div>
                <div className="work-subtitle">Advocacy</div>
                </div>
                <div className="work-text-container">
                <div className="work-text">Provide innovative concussion screening tools
                for individuals and first responders to aid in the detection of concussion from
                domestic, intimate partner, and family violence</div>
                <div className="work-text">Uniting healthcare workers, first responders,
                policy makers, the legal system, the public at large, and anyone who has
                experienced violence where they live</div>
                <div className="work-text">We are a source of education for leaders and
                policymakers on identifying, preventing, and treating concussion
                and brain injury as a result of domestic,
                intimate partner, and family violence</div>
                </div>
            </div>
            <style jsx>
            {`
                @media screen and (max-width: 900px) {
                    .work-container {
                        display: none;
                    }
                }
                .work-icon-left {
                    margin: 0 10% 0 3%;
                    width: 120px;
                    height: 120px;
                }
                .work-icon-middle {
                    margin: 0 14% 0 14%;
                    width: 140px;
                    height: 120px;
                }
                .work-icon-right {
                    margin: 0 3% 0 10%;
                    width: 120px;
                    height: 120px;
                }
                .work-icon-container {
                    justify-content: space-between;
                }
                .work-text-container {
                    display: flex;
                    margin-bottom: 3%;
                    margin-top: 3%;
                }
                .work-subtitle {
                    font-size: 42px;
                    font-weight: 390;
                    color: white;
                    margin: 0 10% 0 10%;
                }
                .work-subtitle-container {
                    background-color: #370F7A;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                .work-text {
                    flex-basis: 100%;
                    text-align: center;
                    font-weight: 390;
                    word-spacing: 2px;
                    color: black;
                    letter-spacing: 1px;
                    font-size: 24px;
                    margin: 0 1% 0 1%;
                }
                .work-header {
                    font-style: italic;
                    font-size: 50px;
                }
                .work-title {
                    margin: 0 0 24px 0;
                    font-size: 60px;
                }
                .work-box {
                    padding: 0 10px 0 10px;
                    width 33.33%;
                    height: 100%;
                }
                .work-box-container {
                    width 100%;
                    height: 400px;
                    display: flex;
                    align-items: center;
                }
                .work-container {
                    text-align: center;
                    color: white;
                    width: 100%;
                }   
                .work-title {
                    color: #370F7A;
                    font-size: 50px;
                }
            `}
            </style>
        </div>
    )
}