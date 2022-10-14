function CustomDonateButton(props) {
    return (
        <div>
            <a className='donate-button' href={props.link}> {props.name} </a>
            <style jsx>{`
                @media only screen and (max-width: 900px) {
                    .donate-button {
                        width: 220px !important;
                        font-size: 18px !important;
                    }
                }
                 .donate-button {
                    border-radius: 16px;
                    background-color: #370F7A;
                    border: none;
                    color: white;
                    width: 450px;
                    height: 50px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 26px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                          
                .donate-button:hover {
                    opacity: 0.8;
                }
            `}
            </style>
       </div>
    )
}

export default CustomDonateButton;