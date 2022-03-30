import React, {useEffect} from "react";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';

function Supportpolicy() {

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
                    <p className='title online-title'>SUPPORT POLICY</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="sp-top-title">We aim to provide, at minimum, next business day response to any support forum query, free of charge. Resolving an issue is dependent on the issue itself and we can only promise our best effort.</div>
                <div className="sp-title">Just want to know more about a product?</div>
                <div className="sp-desc">If you have a question about any of our products, please feel free to contact us with your query or get access to our support forum to log your issue and see what others are saying.</div>
                <div className="sp-title">Need help with installation or configuration?</div>
                <div className="sp-desc">We provide free support via our support forum with a next business day response.
If you feel you need more help please contact us to be referred to one of our trusted service providers who will be more than happy to help.</div>
                <div className="sp-title">Are you experiencing technical difficulties?</div>
                <div className="sp-desc">The support forum is a free service and available on request.
If you would like to access our support forum, please see our Contact Us page.</div>

                <div className="d-flex justify-content-center"><p className='middle-sp-border'></p></div>

                <div className="text-center microsoft-partner">Microsoft<br /> Partner</div>
            </div>
        </div>
    )
}

export default Supportpolicy;