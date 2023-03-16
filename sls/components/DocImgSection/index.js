import { getImageByName } from '../../utils/imgLoader'

const DocImageSection = () => {
  return (
    <div className="docImageHeaderSection">
      <div className="docImageContainer">
        <img className="docImage" src={getImageByName("Ramirez+Headshot.jpg")}></img>
        <div className="docImageText"> Rachel Ramirez,LISW-S, RS</div>
        <div className="awardWinnerText"> Award Winner</div>
      </div>
      <img className="homepageImage" src={getImageByName('hands.png')}></img>
      <div className="docImageContainer">
        <img className="docImage" src={getImageByName("ISMMS_Headshot_V3.jpeg")}></img>
        <div className="docImageText"> Carrie Esopenko, PhD</div>
        <div className="awardWinnerText"> Award Winner</div>
      </div>
      <style jsx>{`
        .homepageImage {
          display: block;
          width: 45%;
          height: 360px;
          object-fit: cover;
        }

        .docImageContainer {
          justify-content: center;
          text-align: center;
          width: 385px;
        }

        .docImageHeaderSection {
          padding: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .docImage{
          height: 275px;
          width: 275px;
          border-radius: 50%;
        }

        .docImageText{
          padding-top: 10px;
          font-weight: 590;
          word-spacing: 1px;
          letter-spacing: 0.5px;
          font-size: 30px;
          paddint-top: 15px;
          color: #36107A;
        }

        .awardWinnerText{
          padding-top: 10px;
          font-weight: 290;
          word-spacing: 1px;
          letter-spacing: 0.5px;
          font-size: 25px;
          paddint-top: 15px;
          color: #36107A;
        }

        @media only screen and (max-width: 1200px) {
          .docImageHeaderSection {
            display: none;
          }
        }
    `}</style>
    </div>   
  )
}

export default DocImageSection;