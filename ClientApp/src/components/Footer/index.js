import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div className='footer-container'>
            <div className="d-flex justify-content-center">
            <div className="my-5 text-white border-end border-1">
                <div className='pe-3'>
                
                <h5 className='d-flex justify-content-end'>
                    <a href='https://www.linkedin.com/company/thorapps/' className='in'>
                    <big>In</big>
                    </a>
                </h5>
                
                <span className='d-flex justify-content-end'>
                    <a href='https://www.wix.com/?utm_campaign=vir_created_with' className='copyright'>
                    Copyright@2019 Thor Apps.<br/>
                    All Rights Reserved.
                    </a>
                </span>
                <span className='d-flex justify-content-end'>Bear Entrepreneurial Group Pty</span>
                <span className='d-flex justify-content-end'>Ltd trading as ThorApps</span>
                <span className='d-flex justify-content-end'>ABN 40 156 405 275</span>
                </div>
            </div>
            <div className="my-5 text-white">
                <div className='ms-3 mt-2 d-flex flex-column'>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/returns-policy">Returns Policy</Link>
                <Link to="/terms-and-conditions">Terms & conditions</Link>
                <Link to="/eula">End user License Agreement</Link>
                <Link to="/shipping">Shipping and Delivery</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
                <a href="https://support.thorapps.com/Downloads/ThorApps%20Online%20Services%20SLA.pdf" target="_blank">Service level Agreement</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;