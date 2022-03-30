import React, {useEffect} from "react";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import {Link} from 'react-router-dom';

function ReturnsPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="main">
            <div className='online-container'>
                <img src={mainBack} alt="mainBack" className='main-back' />
                <div className='centered'>
                    <p className="sup-policy-top">LEGAL
                    </p>
                    <p className='title online-title'>RETURNS & REFUNDS POLICY</p>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="sp-desc">Thank you for shopping at ThorApps.

Please read this policy carefully. This is the Return and Refund Policy of ThorApps. This Return and Refund Policy is licensed by <a href="https://www.termsfeed.com/" target='_blank'>TermsFeed</a> to ThorApps.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">Digital Products</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">We do not issue refunds for digital products once the order is confirmed and the product is sent.

We recommend contacting us for assistance if you experience any issues receiving or downloading our products.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">Contact Us</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">If you have any questions about our Returns and Refunds Policy, please <Link to='/contact'> contact us.</Link> </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ReturnsPolicy;