import React, {useEffect} from "react";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';

function Shipping() {
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
                    <p className='title online-title'>SHIPPING & DELIVERY</p>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="sp-desc">Our products and Onlines services are delivered immediately, free of delivery charges.

​

In most cases you will have downloaded the fully functional version or subscribed to a fully function service before committing to purchase.

​

If you decide NOT to purchase, it is your responsibility to remove and un-install our product and/or un-subscribe from our online service.

​

We recommend contacting us for assistance if you experience any issues receiving or downloading our products.</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Shipping;