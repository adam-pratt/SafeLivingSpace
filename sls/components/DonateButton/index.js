function DonateButton() {
    return (
        <div>
            <a className='donate-button' href="https://www.paypal.com/donate/?hosted_button_id=X7CELSBLXK9VQ">Donate</a>
            <style jsx>{`
                 .donate-button {
                    border-radius: 16px;
                    background-color: #370F7A;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                }
                          
                .donate-button:hover {
                    opacity: 0.8;
                }
                @media only screen and (max-width: 1400px) {
                    .donate-button {
                      display: none;
                    }
                }
            `}
            </style>
       </div>
    )
}

export default DonateButton;