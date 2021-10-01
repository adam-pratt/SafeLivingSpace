export default function DonateButton() {
    return (
        <div>
            <a className='donate-button' href="https://www.paypal.com/donate/?hosted_button_id=X7CELSBLXK9VQ">Donate</a>
            <style jsx>{`
                 .donate-button {
                    border-radius: 16px;
                    background-image: linear-gradient(to bottom right, #370F7A, #973494);
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                }
                          
                .donate-button:hover {
                    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
                }
            `}
            </style>
       </div>
    )
}