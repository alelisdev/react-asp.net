import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import card from '../../assets/svgs/card.svg'
import benefit from '../../assets/svgs/benefit.svg'
import clock from '../../assets/svgs/clock.svg'
import free from '../../assets/svgs/free.svg'
import environment from '../../assets/svgs/environment.svg'
import handshake from '../../assets/svgs/handshake.svg'
import tableMeeting from '../../assets/images/c1a65d_c16c0544d5b1428b9d902bb575ceff04_mv2_d_4000_2667_s_4_2 (1).webp'
import ContactModal from '../../components/ContactModal'
import DownloadModal from '../../components/DownloadModal'
import PricingModal from '../../components/PricingModal'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

function Pricing() {
    const [scroll, setScroll] = React.useState('paper');


    const [open, setOpen] = React.useState(false);
    const [downloadOpen, setDownloadOpen] = React.useState(false);
    const [pricingOpen, setPricingOpen] = React.useState(false);

    const handleClickOpen = (scrollType) => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClickDownloadOpen = (scrollType) => {
        setDownloadOpen(true);
        setScroll(scrollType);
    };

    const handleClickPricingOpen = () => {
        setPricingOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDownloadClose = () => {
        setDownloadOpen(false);
    };

    const handlePricingClose = () => {
        setPricingOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const navigate = useNavigate();

    const redirectToRequestQuote = () => {
        navigate('/on-premise');
    }



    return (
        <div className="main">
            <div className='online-container'>
                <img src={mainBack} alt="mainBack" className='main-back' />
                <div className='centered'>
                    <h4>ONLINE APPS</h4>
                    <p className='title online-title'>CONNECTING PEOPLE TO DATA</p>
                    <div className="d-flex justify-content-center"><p className='middle-border'></p></div>
                    <h4>We streamline the way insight-driven companies experience SharePoint and
                        other Microsoft products
                    </h4>
                </div>
            </div>
            <div className="container my-5 text-center">
                <div className="description">
                    <h4>Create your ThorApps account today and get a $50-plan for free, valid for 30 days. Try out a single product, or trial the full suite of powerful apps to boost your data experience in SharePoint Online.</h4>
                </div>
                <button className="btn calc-price" onClick={handleClickPricingOpen}>LEARN HOW WE CALCULATE THE PRICE</button>
            </div>
            <div className="pricing-cards">
            <div className="container">
                <div className="row justify-content-between pt-5 pb-5">
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={card} alt='card' className="card-size" />
                        <h6 className="card-text">GET STARTED WITHOUT CREDIT CARD</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={benefit} alt='card' className="card-size" />
                        <h6 className="card-text">BENEFIT FROM ALL FEATURES, REGARDLESS OF THE PLAN YOU CHOOSE</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={clock} alt='card' className="card-size" />
                        <h6 className="card-text">NO CONTRACT*: CANCEL, DOWNGRADE OR UPGRADE ANYTIME YOU NEED</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={free} alt='card' className="card-size" />
                        <h6 className="card-text">FREE UPDATES INCLUDED</h6>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto text-center mt-5">
                        <img src={environment} alt='card' className="card-size" />
                        <h6 className="card-text">UNLIMITED USERS AND ENVIRONMENTS</h6>
                    </div>
                </div>
                <div  className="text-center pb-5">
                    <span  className="text-white">*Annual subscriptions excluded.</span>
                </div>
            </div>
            </div>

            <div className="container mt-4">
                <div className="d-flex justify-content-center">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                    </div>
                    <div className="price-item">
                    </div>
                    <div className="price-item bg-gray">
                        <span className="top-indicator">USED BY <br/> <b>68% OF CLIENTS</b></span>
                    </div>
                    <div className="price-item">
                    </div>
                    <div className="price-item">
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                        <span className="price-title">TRIAL</span>
                    </div>
                    <div className="price-item">
                        <span className="price-title">SOLO</span>
                    </div>
                    <div className="price-item">
                        <span className="price-title">TEAM</span>
                    </div>
                    <div className="price-item">
                        <span className="price-title">BUSINESS</span>
                    </div>
                    <div className="price-item">
                        <span className="price-title">ENTERPRISE</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                        <div className="price-card trial">Free</div>
                    </div>
                    <div className="price-item">
                        <div className="price-card solo">$ 100</div>
                    </div>
                    <div className="price-item">
                        <div className="price-card solo">$ 200</div>
                    </div>
                    <div className="price-item">
                        <div className="price-card solo">$ 400</div>
                    </div>
                    <div className="price-item">
                        <div className="price-card enterprise">
                            <img src={handshake} alt='handshake' className="handshake" />
                        </div>
                        <div className="negotiated">* Price negotiated</div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                        <span className="price-date">Valid for<br/>30 days</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Per month,<br/>per tenant</span>   
                    </div>
                    <div className="price-item">
                        <span className="price-date">Per month,<br/>per tenant</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Per month,<br/>per tenant</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Per month,<br/>per tenant</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                        <span className="font-trial">GET $50<br/>FOR FREE</span>
                    </div>
                    <div className="price-item">
                        <span className="font-solo">GET EXTRA<br/>$5 FOR FREE</span>   
                    </div>
                    <div className="price-item">
                        <span className="font-solo">GET EXTRA<br/>$20 FOR FREE</span>
                    </div>
                    <div className="price-item">
                        <span className="font-solo">GET EXTRA<br/>$80 FOR FREE</span>
                    </div>
                    <div className="price-item">
                        <span className="font-enterprise">PREMIUM<br/>BONUS</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                        <span className="price-date text-bold">Unlimited<br/>Users</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date text-bold">Unlimited<br/>Users</span>   
                    </div>
                    <div className="price-item">
                        <span className="price-date text-bold">Unlimited<br/>Users</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date text-bold">Unlimited<br/>Users</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date text-bold">Unlimited<br/>Users</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                        <span className="price-kind font-solo">BI Service</span>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-trial" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>  
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-contact" onClick={handleClickOpen}>Contatc Us</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>test your data<br/>consumption</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>execute approx.<br/><b>5,200 reports</b></span> 
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>execute approx.<br/><b>11,600 reports</b></span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>execute approx.<br/><b>25,200 reports</b></span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>execute approx.<br/><b>+52,000 reports</b></span>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 bg-gray">
                    <div className="price-left-item">
                        <span className="price-date">Create and export insighful dashboards</span>
                    </div>
                    <div className="price-item">
                        <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 bg-gray">
                    <div className="price-left-item">
                        <span className="price-date">Export, schedule and distribute reports</span>
                    </div>
                    <div className="price-item">
                        <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                        <span className="price-kind font-solo">LIST SYNC</span>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-trial" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>  
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-contact" onClick={handleClickOpen}>Contatc Us</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>test your data<br/>consumption</span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>sync approx.<br/><b>17,000 items</b></span> 
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>sync approx.<br/><b>37,000 items</b></span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>sync approx.<br/><b>82,000 items</b></span>
                    </div>
                    <div className="price-item">
                        <span className="price-date">Best plan to<br/>sync approx.<br/><b>+177,000 items</b></span>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 bg-gray">
                    <div className="price-left-item">
                        <span className="price-date">Syncronise list data in real-time</span>
                    </div>
                    <div className="price-item">
                        <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 bg-gray">
                    <div className="price-left-item">
                        <span className="price-date">Access to Microsoft SQL database</span>
                    </div>
                    <div className="price-item">
                        <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <div className="price-left-item">
                        <span className="price-kind font-solo">PROJECT SYNC</span>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-trial" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>  
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-start" onClick={handleClickDownloadOpen}>Get Started</button>
                    </div>
                    <div className="price-item">
                        <button className="btn btn-contact" onClick={handleClickOpen}>Contatc Us</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 bg-gray">
                    <div className="price-left-item">
                        <span className="price-date">Replicate project entities into SQL database</span>
                    </div>
                    <div className="price-item">
                        <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                    <div className="price-item">
                    <div className="check-item">✓</div>
                    </div>
                </div>
            </div>



            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 p-0">
                        <img src={tableMeeting} alt='meeting' className="case-image" />
                    </div>
                    <div className="col-lg-4 table-right">
                        <div className="meeting-text"><h3>FOR <span className="on-premise-apps">ON-PREMISE APPS</span>, PLEASE CONTACT US.</h3></div>
                        <button className="btn quote" onClick={redirectToRequestQuote}>Request Quote</button>
                    </div>
                </div>
            </div>
            <ContactModal open={open} onClose={handleClose} ransitionComponent={Transition} />
            <DownloadModal open={downloadOpen} onClose={handleDownloadClose} ransitionComponent={Transition} />
            <PricingModal open={pricingOpen} onClose={handlePricingClose} />
        </div>
    )
}

export default Pricing;