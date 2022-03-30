import React from "react";
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/thor_apps_png_1.webp';
import ContactModal from '../ContactModal';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

function Header() {

    const [scroll, setScroll] = React.useState('paper');


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (scrollType) => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end" style={{ width: "100%" }}>
                    <Nav className="d-flex">
                        <Nav className="navbar mx-3"><Link to='/'>Online</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/on-premise'>On-Premise</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/pricing'>Pricing</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/case-studies'>Case Studies</Link></Nav>
                        <Nav className="navbar mx-3"><a href="https://support.thorapps.com/">Support</a></Nav>
                        <Nav className="navbar mx-3"><Link to='/faq'>FAQ</Link></Nav>
                        <Nav className="navbar mx-3"><Link to='/supportpolicy'>Support Policy</Link></Nav>
                        <Nav className="navbar mx-3"><button className="contact-us-btn" onClick={handleClickOpen}>Contact Us</button></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ContactModal open={open} onClose={handleClose} ransitionComponent={Transition} />
        </Navbar>
    )
}

export default Header;