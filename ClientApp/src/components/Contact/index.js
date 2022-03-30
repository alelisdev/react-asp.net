import React, {useState} from "react";
import circle from '../../assets/svgs/circle.svg';
import right from '../../assets/svgs/right.svg';
import axios from 'axios';
import config from '../../config/keys';
function Contact( {propsdata} ) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');

    const { toptitle, title, content, btn_title } = propsdata;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${config.REACT_APP_SERVER_URL}/api/mail`, JSON.stringify({firstName, lastName, email, jobTitle, phone, company, country, message}))
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return(
        <div className="container">
            <div className="row pt-5 justify-content-center">
                <div className="col-md-6 contact-us">
                    <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="contact-title">
                            <img src={circle} alt='circle' width='25px' /> &nbsp;
                            <h5 className="text-white contact-title-text">{toptitle}</h5>
                        </div>
                        <div className="contact-description">
                            <h1 className="text-white contact-title-text">{title} &nbsp;<img src={right} alt='right' width='20px' /> </h1>
                        </div>
                        <div className="contact-description mt-5">
                            <span className="text-white contact-title-content">{content}</span>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder="First Name" style={{marginRight: '20px'}} required />
                            <input type="text" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder="Last Name" style={{marginLeft: '20px'}} required/>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" name="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="form-control" placeholder="Job Title" style={{marginRight: '20px'}} required />
                            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone" style={{marginLeft: '20px'}} required />
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="form-control" placeholder="Company" style={{marginRight: '20px'}} required />
                            <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="form-control" placeholder="Country" style={{marginLeft: '20px'}} required/>
                        </div>
                        <div className="name-input d-flex flex-row">
                            <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Add message" style={{height: '150px'}} required/>
                        </div>
                        <input type="submit" className="btn btn-send mt-5" value={btn_title} />
                    </form>
                    <div className="d-flex mt-5">
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

export default Contact;