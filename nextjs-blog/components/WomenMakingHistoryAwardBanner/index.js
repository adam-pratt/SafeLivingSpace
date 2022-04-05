const WomenMakingHistoryAwardBanner = () => {
    return(
        <div className="make-history-container">
            <div className="make-history-title"> Women Making Histroy Award 2022 </div>
            <div className="make-history-text"> Recognizing women making strides in fields related to concussion/TBI, domestic violence, and/or safety in the home</div>
            <style jsx>{`
                .make-history-title {
                    color: #36107A;
                    font-size: 70px;
                    text-align: center;
                    padding-top: 20px;
                    font-weight: 690;
                    padding-left: 20%;
                    padding-right: 20%;
                    padding-top: 38px;
                }
                .make-history-text {
                    color: #36107A;
                    font-size: 45px;
                    text-align: center;
                    padding-top: 20px;
                    font-style: italic;
                    padding-left: 10%;
                    padding-right: 10%;
                }
                .make-history-container {
                    width: 100%;
                    border-top: 5px;
                    border-bottom: 5px;
                    border-left: 0px;
                    border-right: 0px;
                    border-color: #36107A;
                    background-color: #F5EFFC;
                    height: 400px;
                    border-style: solid;
                }
                @media only screen and (max-width: 1400px) {
                    .make-history-title { 
                        font-size: 60px;
                    }
                    .make-history-text {
                        font-size: 40px;
                    }
                }
                @media only screen and (max-width: 1000px) {
                    .make-history-title { 
                        font-size: 40px;
                    }
                    .make-history-text {
                        font-size: 30px;
                    }
                    .make-history-container {
                        height: 300px;
                    }
                }
                @media only screen and (max-width: 700px) {
                    .make-history-title { 
                        font-size: 30px;
                    }
                    .make-history-text {
                        font-size: 20px;
                    }
                    .make-history-container {
                        height: 250px;
                    }
                }
            `}</style>
        </div>
    )
}

export default WomenMakingHistoryAwardBanner;