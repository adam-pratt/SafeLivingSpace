import { getImageByName } from '../../utils/imgLoader'

const MeetTheAwardees = () => {
    return(
        <div>
            <div className="meet-the-awardees-container">
                <div className="meet-the-awardees-title"> Meet the Awardees </div>
                <div className="line-wrapper-left">
                    <div className="thin-purple-line"></div>
                </div>
                <div className="doc-section">
                    <div className="docImageContainer">
                        <img className="docImage" src={getImageByName("Ramirez+Headshot.jpg")}></img>
                        <div className="docImageText"> Eve Valera, PhD </div>
                        <div className="docImageSubText"> Associate Professor of Psychiatry, HMS </div>
                    </div>
                    <div className="meet-the-awardees-text-right"> 
                        Rachel Ramirez, LISW-S, RA, is the Founder and Director of the Center on Partner-Inflicted Brain Injury within the Ohio Domestic Violence Network (ODVN). 
                        The Center provides statewide, national, and international leadership expertise to increase system-level collaboration and raise awareness for the unaddressed public health crisis of brain injury caused by violence. 
                        Under Rachel’s leadership, the Center has developed numerous resources, virtual trainings, and an in-person training and technical assistance series that has helped DV professionals in over 25 states, 4 countries, and at multiple national and international conferences. 
                        In her 14 years at ODVN, Rachel has also spearheaded initiatives on mental health and substance abuse and helped DV programs implement trauma-informed approaches in their work. 
                        She co-authored the ODVN’s publication “Trauma-Informed Approaches: Promising Practices and Protocols for Ohio’s Domestic Violence Programs” in 2010, with revisions published in 2019, as well as multiple journal articles on the experience of brain injury among survivors and the perceptions of this experience among DV service providers. 
                        As a bilingual licensed independent social worker and a registered advocate in Ohio, Rachel has been able to provide comprehensive services at the individual and organizational levels throughout her career.
                    </div>
                </div>
                <div className="line-wrapper-right">
                    <div className="thin-purple-line"></div>
                </div>
                <div className="doc-section">
                    <div className="meet-the-awardees-text-left"> 
                        Dr. Carrie Esopenko is a prominent researcher and educator in the field of IPV-related brain injury.
                        As the principal investigator of an R01-funded study for the National Institute of Neurological Disorders and Stroke (NINDS), Dr. Esopenko investigates the sub-acute and chronic effects of repetitive head impacts on the psychological, cognitive, and neural health of women with IPV-related head trauma, military sexual trauma, and blast-related injury. 
                        She is also developing sex-specific prevention and assessment strategies for sports-related head injury. 
                        She represents Rutgers University as the Co-Principal Investigator of the Ivy League/Big Ten Epidemiology of Concussion Study and the Big Ten Cardiac Registry. 
                        In addition to her research, Dr. Esopenko is the Lead Investigator of the ENIGMA Intimate Partner Violence (IPV) Working Group, a global collaborative effort to explore the effects of IPV-related brain injury, and the ENIGMA Sports-Related Brian Injury, Military, and TBI Working Group. 
                        She pays this knowledge forward to future doctors and researchers as an Associate Professor of Brain Injury Research Center at Mount Sinai’s Icahn School of Medicine in New York City.
                    </div>
                    <div className="docImageContainer">
                        <img className="docImage" src={getImageByName("ISMMS_Headshot_V3.jpeg")}></img>
                        <div className="docImageText"> Katherine Snedaker, LCSW </div>
                        <div className="docImageSubText"> CEO And Founder, PINK Concussions </div>
                    </div>
                </div>
            </div>
            <div className="meet-the-awardees-container-mobile">
                <div className="meet-the-awardees-title"> Meet the Awardees </div>
                <div className="doc-section-mobile">
                    <div className="docImageContainerMobile">
                        <img className="docImage" src={getImageByName("Ramirez+Headshot.jpg")}></img>
                        <div className="docImageText"> Eve Valera, PhD </div>
                        <div className="docImageSubText"> Associate Professor of Psychiatry, HMS </div>
                    </div>
                    <div className="line-wrapper-left">
                    <div className="thin-purple-line"></div>
                </div>
                    <div className="meet-the-awardees-text-right-mobile"> 
                        Dr. Carrie Esopenko is a prominent researcher and educator in the field of IPV-related brain injury.
                        As the principal investigator of an R01-funded study for the National Institute of Neurological Disorders and Stroke (NINDS), Dr. Esopenko investigates the sub-acute and chronic effects of repetitive head impacts on the psychological, cognitive, and neural health of women with IPV-related head trauma, military sexual trauma, and blast-related injury. 
                        She is also developing sex-specific prevention and assessment strategies for sports-related head injury. 
                        She represents Rutgers University as the Co-Principal Investigator of the Ivy League/Big Ten Epidemiology of Concussion Study and the Big Ten Cardiac Registry. 
                        In addition to her research, Dr. Esopenko is the Lead Investigator of the ENIGMA Intimate Partner Violence (IPV) Working Group, a global collaborative effort to explore the effects of IPV-related brain injury, and the ENIGMA Sports-Related Brian Injury, Military, and TBI Working Group. 
                        She pays this knowledge forward to future doctors and researchers as an Associate Professor of Brain Injury Research Center at Mount Sinai’s Icahn School of Medicine in New York City.
                    </div>
                </div>
                <div className="doc-section-mobile">
                    <div className="docImageContainerMobile">
                        <img className="docImage" src={getImageByName("ISMMS_Headshot_V3.jpeg")}></img>
                        <div className="docImageText"> Katherine Snedaker, LCSW </div>
                        <div className="docImageSubText"> CEO And Founder, PINK Concussions </div>
                    </div>
                    <div className="line-wrapper-right">
                        <div className="thin-purple-line"></div>
                    </div>  
                    <div className="meet-the-awardees-text-left-mobile"> 
                        Dr. Carrie Esopenko is a prominent researcher and educator in the field of IPV-related brain injury.
                        As the principal investigator of an R01-funded study for the National Institute of Neurological Disorders and Stroke (NINDS), Dr. Esopenko investigates the sub-acute and chronic effects of repetitive head impacts on the psychological, cognitive, and neural health of women with IPV-related head trauma, military sexual trauma, and blast-related injury. 
                        She is also developing sex-specific prevention and assessment strategies for sports-related head injury. 
                        She represents Rutgers University as the Co-Principal Investigator of the Ivy League/Big Ten Epidemiology of Concussion Study and the Big Ten Cardiac Registry. 
                        In addition to her research, Dr. Esopenko is the Lead Investigator of the ENIGMA Intimate Partner Violence (IPV) Working Group, a global collaborative effort to explore the effects of IPV-related brain injury, and the ENIGMA Sports-Related Brian Injury, Military, and TBI Working Group. 
                        She pays this knowledge forward to future doctors and researchers as an Associate Professor of Brain Injury Research Center at Mount Sinai’s Icahn School of Medicine in New York City.
                    </div>
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
                }

                .docImageContainerMobile {
                    margin-left: 90px;
                    margin-right: 90px;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
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

                .doc-section-mobile {
                    display: flex;
                    flex-direction: column;
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
                .meet-the-awardees-text-right-mobile {
                    display: flex;
                    color: #370F7A;
                    font-size: 20px;
                    margin-top: 5px;
                    margin-bottom: 25px;
                    word-spacing: 5px;
                    padding: 20px;
                    text-align: center;
                }
                .meet-the-awardees-text-left-mobile {
                    display: flex;
                    color: #370F7A;
                    font-size: 20px;
                    margin-top: 5px;
                    word-spacing: 5px;
                    margin-bottom: 30px;
                    padding: 20px;
                    text-align: center;
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
                    word-spacing: 10px;
                }
                .meet-the-awardees-container-mobile {
                    display: none;
                }

                @media only screen and (max-width: 1200px) {
                    .docImageContainer { 
                        font-size: 60px;
                    }
                    .meet-the-awardees-text-right {
                        margin-left: 0px;
                    }
                    .meet-the-awardees-text-left {
                        margin-right: 0px;
                    }
                    .meet-the-awardees-container {
                        display: none;
                    }
                    .meet-the-awardees-container-mobile {
                        display: block;
                    }
                }
                @media only screen and (max-width: 700px) {
                    .meet-the-awardees-title {
                        font-size: 40px;
                    }
                }

                
            `}</style>
        </div>
    )
}

export default MeetTheAwardees;