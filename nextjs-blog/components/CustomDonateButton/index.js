function CustomDonateButton(props) {
    return (
        <div>
            <a className='donate-button' href={props.link}> {props.name} </a>
            <style jsx>{`
                 .donate-button {
                    border-radius: 16px;
                    background-color: #370F7A;
                    border: none;
                    color: white;
                    padding: 10px 40px 10px 40px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 26px;
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