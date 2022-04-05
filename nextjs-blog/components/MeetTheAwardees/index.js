import { getImageByName } from '../../utils/imgLoader'

const MeetTheAwardees = () => {
    return(
        <div className="meet-the-awardees-container">
            <div className="meet-the-awardees-title"> Meet the Awardees </div>
            <div className="line-wrapper-left">
                <div className="thin-purple-line"></div>
            </div>
            <div className="doc-section">
                <div className="docImageContainer">
                    <img className="docImage" src={getImageByName("Valera+headshot.png")}></img>
                    <div className="docImageText"> Eve Valera, PhD </div>
                    <div className="docImageSubText"> Associate Professor of Psychiatry, HMS </div>
                </div>
                <div className="meet-the-awardees-text-right"> 
                    Known for her groundbreaking research, Dr. Eve Valera, Associate Professor of Psychiatry 
                    at Harvard Medical School and Research Scientist at MGH, published one of the first studies 
                    to investigate the prevalence and effects of traumatic brain injury (TBI) in women who had 
                    experienced intimate partner violence (IPV). Dr. Valera has authored more than 50 publications 
                    and most recently served as an editor of the first-ever issue of The Journal of Head Trauma Rehabilitation 
                    devoted entirely to IPV and brain injury in January 2022. Recently featured in NY Times Magazine, her 
                    research has been a guiding force of our work at SafeLivingSpace.org to promote concussion screening 
                    for people who have experienced domestic, intimate partner and family violence.
                </div>
            </div>
            <div className="line-wrapper-right">
                <div className="thin-purple-line"></div>
            </div>
            <div className="doc-section">
                <div className="meet-the-awardees-text-left"> 
                    Katherine is an internationally recognized Licensed Clinical Social Worker who has spearheaded a social revolution
                    for equity in concussion diagnosis, treatment, and support for women. In 2013, Katherine founded PINK Concussions,
                    the first ever non-profit organization dedicated to “improv[ing] research, medical care, and community support for
                    females with brain injury.” Katherine has produced over 40 episodes of Casual Conversations, a live video series
                    featuring interviews with brain injury experts across various fields. She also moderates online forums that 
                    support more than 8,000 members of PINK Concussions and has given over 45 presentations on brain injury in women
                    and children. In 2016, Katherine organized two of the first international summits on female concussion, helping
                    to train over 4,000 medical professionals and researchers. She also founded and currently leads the first 
                    International TBI and Domestic Violence Task Force.
                </div>
                <div className="docImageContainer">
                    <img className="docImage" src={getImageByName("Snedaker+headshot.jpeg")}></img>
                    <div className="docImageText"> Katherine Snedaker, LCWS </div>
                    <div className="docImageSubText"> CEO And Founder, PINK Concussions </div>
                </div>
            </div>
            <style jsx>{`
                .docImageSubText {
                    font-weight: 300;
                    word-spacing: 1px;
                    letter-spacing: 0.5px;
                    font-size: 23px;
                    color: #36107A;
                    text-align: center;
                }

                .docImageContainer {
                    margin-left: 90px;
                    margin-right: 90px;
                    justify-content: center;
                }
                .docImageText {
                    padding-top: 10px;
                    font-weight: 590;
                    word-spacing: 1px;
                    letter-spacing: 0.5px;
                    font-size: 23px;
                    paddint-top: 15px;
                    color: #36107A;
                    text-align: center;
                }

                .docImage{
                    height: 225px;
                    width: 225px;
                    border-radius: 50%;
                }
                    
                .doc-section {
                    display: flex;
                    flex-direction: row;
                }

                .line-wrapper-left {
                    display: flex;
                    justify-content: flex-end;
                }

                .line-wrapper-right {
                    display: flex;
                    justify-content: flex-start;
                }

                .thin-purple-line {
                    width: 75%;
                    background-color: #370F7A;
                    height: 3px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }

                .meet-the-awardees-container {
                    color: #370F7A;
                    font-size: 50px;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .meet-the-awardees-title {
                    text-align: center;
                    color: #370F7A;
                    font-size: 60px;
                    margin-top: 30px;
                    margin-bottom: 15px;
                    font-weight: 690;
                }

                .meet-the-awardees-text-right {
                    display: flex;
                    justify-content: flex-end;
                    color: #370F7A;
                    font-size: 30px;
                    margin-top: 5px;
                    word-spacing: 10px;
                    margin-right: 30px;
                    margin-left: 120px;
                }
                .meet-the-awardees-text-left {
                    display: flex;
                    justify-content: flex-start;
                    color: #370F7A;
                    font-size: 30px;
                    margin-top: 5px;
                    margin-left: 30px;
                    margin-right: 120px;
                    margin-bottom: 30px;
                }
            `}</style>
        </div>
    )
}

export default MeetTheAwardees;