import { useState } from "react";

export default function ContactForm() {
     
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://jbywqajk4h.execute-api.us-west-1.amazonaws.com/Prod/submitForm', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            })
        }).then(response => {
            const status = response.status
            console.log(status)
            const ele = document.getElementById('response');
            if(status === 200) {
                ele.innerHTML='Success, form submitted! You will hear back from us shortly'
                setName("");
                setEmail("");
                setMessage("");
            } else {
                ele.innerHTML='Sorry, there was an error submitting your form, please email edie@safelivingspace.org directly'
            }
        })
    }
    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-name">Name</div>
                    <input type="name" value={name} className="form-input-short"  placeholder="Your name" onChange={(e)=> setName(e.target.value)}/>
                </div> 
                <div className="form-group">
                    <div className="input-name">Email address</div>
                    <input type="email" className="form-input-med" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <div className="input-name">Message</div>
                    <textarea resize="none" type="name" rows="4" value={message} className="form-input-long"  placeholder="Tell us something" onChange={(e)=> setMessage(e.target.value)}/>
                </div>  
                <h4 id="response" className="response"></h4>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <style jsx>{`
            @media only screen and (max-width: 900px) {
                .form-wrapper {
                    width: 300px;
                }
                .form-group {
                    width: 200px !important;
                }
                .form-input-med {
                    width: 300px !important;
                }
                .form-input-long {
                    width: 300px !important;;
                }
            }
             .form-group {
                display: flex;
                flex-direction: column;
                width: 600px;
                margin-top: 20px;
            }
            .form-input-short {
                height: 40px;
                width: 200px;
            }
            .form-input-med {
                height: 40px;
                width: 400px;
            }
            .form-input-long {
                height: 80px;
                width: 600px;
                resize: none;
            }
            .response {
                color: #370F7A;
            }
            .submit-button {
                width: 100%;
                background-color: #370F7A;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .submit-button:hover {
                opacity: 0.8;
            }
            .input-name {
                margin-top: 15px;
                margin-bottom: 15px;
                width: 80%;
                font-weight: 390;
                word-spacing: 2px;
                color: #370F7A;
                letter-spacing: 1px;
                display: flex;
                font-size: 24px;
            }
            `}</style>
        </div>
    )
}