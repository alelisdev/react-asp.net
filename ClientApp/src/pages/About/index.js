import React from 'react';
import {Link} from 'react-router-dom';
import aboutLogo from '../../assets/images/c1a65d_ee601dfd6bba4a05a5e7cb59ab80b936_mv2_d_4000_2667_s_4_2.webp';
import BEG_Logo from '../../assets/images/BEG_Logo_1.webp';

function About() {
    return(
        <div className="main">
            <div className='case-container'>
                <div className='centered'>
                    <p className='title online-title'>ABOUT US</p>
                    <div className="d-flex justify-content-center"><p className='middle-border'></p></div>                    
                    <h5>Get to know how companies from several industries are increasing their productivity with our apps
                    </h5>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                    <div className="about-image">
                        <img src={aboutLogo} alt='ecucation' className="case-image" />
                    </div>
                    <div className="about-desc">
                        <div className="p-0">
                            <div className="about-content">
                                {/* <div className="case-title">CHALLENGE</div> */}
                                <div className="case-desc">We offer powerful analytics software developed over more than a decade, which can integrate, migrate and consolidate existing data from different systems, to automated dashboards and reports, with just a few clicks. </div>
                                <div className="case-desc">By concentrating companies data in a single secure place, we give executives from all departments the ability to measure what they have to manage. From HR to IT and sales, we deliver actionable insights to C-level fingertips.</div>
                                <div className="case-desc">Proudly based in South Australia, we offer our services globally supporting Enterprise and SMB businesses from end-to-end, across several industries. ​</div>
                                <div className="case-desc">ThorApps is a Certified Microsoft Partner and part of Bear Entrepreneurial Group. ​</div>
                            </div>
                            <div className='d-flex justify-content-between flex-wrap about-footer'>
                                <h3>Microsoft<br/>Partner</h3>
                                <h2 className='border-end border-1'></h2>
                                <img src={BEG_Logo} alt='beg-logo' className="beg-logo" />
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About;