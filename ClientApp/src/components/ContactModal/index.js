import React, {useState} from "react";
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import config from '../../config/keys';

const useStyles = makeStyles({
	newPosOfDialog: {
		left: "60%",
		float: "right !important",
		height: '100%',
		width: '50%',
		background: 'rgb(98, 1, 255) !important'
	}
});

function ContactModal ({ open, onClose, ransitionComponent}) {

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


	
	const classes = useStyles();
    return (
		<Dialog classes={{
			paper: classes.newPosOfDialog
		  }}
		fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={ransitionComponent}>
			<div className="contact-modal">
			<Toolbar>
				<IconButton
					// edge="start"
					// color="inherit"
					onClick={onClose}
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>
			</Toolbar>

			<DialogTitle><p className="contact-modal-title">AWESOME!</p></DialogTitle>

			<DialogContentText>
				<div className="contact-modal-content">Get in touch to learn more about our annual plans for Online Apps:</div>
			</DialogContentText>
			<DialogContent>
				<form  onSubmit={(e) => handleSubmit(e)}>
					<div className="d-flex justify-content-between">
						<input type="text" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}  className="contact-input form-control" placeholder="First Name" required/>
						<input type="text" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} className="contact-input form-control" placeholder="Last Name" required/>
					</div>
					<div className="d-flex">
						<input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="contact-input form-control" placeholder="Email" required/>
					</div>
					<div className="d-flex justify-content-between">
						<input type="text" name='jobTitle' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="contact-input form-control" placeholder="Job Title" required/>
						<input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="contact-input form-control" placeholder="Phone" required/>
					</div>
					<div className="d-flex justify-content-between">
						<input type="text" name='company' value={company} onChange={(e) => setCompany(e.target.value)} className="contact-input form-control" placeholder="Company" required/>
						<input type="text" name='country' value={country} onChange={(e) => setCountry(e.target.value)} className="contact-input form-control" placeholder="Country" required/>
					</div>
					
					<div className="d-flex">
						<input type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} className="contact-input contact-message form-control" placeholder="Message" required/>
					</div>
					<input type="submit" className="submit-btn form-control" value="SUBMIT" />
				</form>
			</DialogContent>
			</div>
		</Dialog>
    )
}

export default ContactModal