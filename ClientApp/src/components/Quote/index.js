import React, {useState} from "react";
import circle from '../../assets/svgs/circle.svg';
import right from '../../assets/svgs/right.svg';
import axios from 'axios';
import config from '../../config/keys';
function Quote() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${config.REACT_APP_SERVER_URL}/api/mail`, JSON.stringify({firstName, lastName, email, jobTitle, phone, company, country, message}))
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return(
        <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-md-6 contact-us">
                    <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="contact-title">
                            <img src={circle} alt='circle' width='25px' /> &nbsp;
                            <h5 className="text-white contact-title-text">Get started today! </h5>
                        </div>
                        <div className="contact-description">
                            <h1 className="text-white contact-title-text">Request a quote for our<br/> On-premise apps &nbsp;<img src={right} alt='right' width='20px' /></h1>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" style={{marginRight: '20px'}} />
                            <input type="text" className="form-control" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" style={{marginLeft: '20px'}}/>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control" name="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Job Title" style={{marginRight: '20px'}} />
                            <input type="text" className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" style={{marginLeft: '20px'}}/>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control"  value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" style={{marginRight: '20px'}} />
                            <input type="text" className="form-control"  value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" style={{marginLeft: '20px'}}/>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add message" style={{height: '150px'}} />
                        </div>
                        <input type="submit" value="Request Quote" className="btn btn-send mt-5" />
                    </form>
                    <div className="d-flex flex-row mt-5">
                        <a href='mailto:info@thorapps.com' className="link">info@thorapps.com</a>
                        <p className="link">|</p>
                        <div className="link">Tel: +61 403 349 647</div>
                        <p className="link">|</p>
                        <div className="link">
                            Adelaide, South Australia<br/>
                            Australia
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;