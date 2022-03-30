import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import showcase1 from '../../assets/images/Computer with Graph.webp';
import showcase2 from '../../assets/images/Business Meeting.webp';
import showcase3 from '../../assets/images/helloquence-5fNmWej4tAA-unsplash.webp';
import Carousel from "../../components/Carousel";

import GoldCoast from '../../assets/images/GoldCoast_edited.png';
import HAMBS from '../../assets/images/HAMBS_edited.png';
import Electranet from '../../assets/images/Electranet-1_edited.png';
import DHS from '../../assets/images/DHS_edited_edited.png';
import Bupa from '../../assets/images/Bupa_edited.png';
import sharedPoint from '../../assets/svgs/sharedPoint.svg'
import microsoft from '../../assets/svgs/microsoft.svg'
import message from '../../assets/svgs/message.svg'
import Contact from "../../components/Contact";

function Online() {

    const data = {
        toptitle: 'Contact US',
        title: 'Get in touch to request a quote or learn more about our apps',
        content: '',
        btn_title: 'Send'
    }
    
    // const showcaseRef = useRef(null)

    // const scrollToShowcase = () => {
    //     showcaseRef.current.scrollIntoView({ behavior: "smooth" })
    // }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <div className='main'>
            <div className='online-container'>
                <img src={mainBack} alt="mainBack" className='main-back' />
                <div className='centered'>
                    <p className='title online-title'>CONNECTING PEOPLE TO DATA</p>
                    <div className="d-flex justify-content-center"><p className='middle-border'></p></div>
                    <h4>We streamline the way insight-driven companies experience SharePoint and
                        other Microsoft products
                    </h4>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-3 showcase-item">
                        <div className='image-container d-flex justify-content-center'>
                            <Link to='/bi-service-ssrs-reports-sharepoint'><button className='btn btn-showcase'>BI SERVICE</button></Link>
                            <img src={showcase1} alt='showcase' className='mb-4 showcase' />
                        </div>
                        <div className='text-center'>
                            <span className='showcase-title'>Real-time collaboration for BI reports in SharePoint Online</span>
                        </div>
                        <div>
                            <p className='text-center showcase-content'>
                            Get immediate access to your data from different sources
                            using SQL Server Reporting in a format that works for you.
                            Create, export and schedule stunning dashboards and get
                            actionable insights at your fingertips. </p>
                        </div>
                    </div>
                    <div className="col-md-3 showcase-item">
                        <div className='image-container d-flex justify-content-center'>
                            <Link to='/list-sync-sql-sharepoint-online'><button className='btn btn-showcase'>LIST SYNC</button></Link>
                            <img src={showcase2} alt='showcase2' className='mb-4 showcase' />
                        </div>
                        <div className='text-center'>
                            <span className='showcase-title'>Replicate your list items to SQL in real-time in SharePoint Online</span>
                        </div>
                        <div>
                            <p className='text-center showcase-content'>
                            Gain immediate access to all of your SharePoint lists in one place. With data collated and stored in SQL, you’ll be running reports in a fraction of the time. </p>
                        </div>
                    </div>
                    <div className="col-md-3 showcase-item">
                        <div className='image-container d-flex justify-content-center'>
                            <Link to='/project-sync-project-online'><button className='btn btn-showcase'>PROJECT SYNC</button></Link>
                            <img src={showcase3} alt='showcase3' className='mb-4 showcase' />
                        </div>
                        <div className='text-center'>
                            <span className='showcase-title'>Access all your entities across Project Online</span>
                        </div>
                        <div>
                            <p className='text-center showcase-content'>
                            Compile a complete picture of your project replicating project entities into SQL database in just a fraction of the time. Be ready for your next meeting, armed with immediate access to accurate data. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="online-slide">
                <Carousel />
            </div>
            <div className="container company">
                <div className="row justify-content-between">
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto">
                        <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                            <img src={GoldCoast} alt='GoldCoast' className="company-brand" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto">
                        <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                            <img src={Electranet} alt='GoldCoast' className="company-brand"/>
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto">
                        <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                            <img src={Bupa} alt='GoldCoast' className="company-brand" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto">
                        <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                            <img src={DHS} alt='GoldCoast' className="company-brand" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 m-auto">
                        <a href='https://www.goldcoast.qld.gov.au/Home' target="_blank">
                            <img src={HAMBS} alt='GoldCoast' className="company-brand" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="introduction pb-5">
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='intro-item col-md-3  text-center'>
                            <img src={sharedPoint} alt="not found" className='itro-svg' />
                            <div className='intro-title'><p>SharePoint<br/>Expert</p></div>
                            <div className='intro-description'><p>More than 200,000 organizations and 190 million people are using SharePoint to share and manage content, knowledge, and applications to empower teamwork, quickly find information, and seamlessly collaborate across the organization.</p></div>
                            <Link to='/about'><button className='btn btn-primary'>Learn More</button></Link>
                        </div>
                        <div className='intro-item col-md-3 text-center'>
                            <img src={microsoft} alt="not found" className='itro-svg' />
                            <div className='intro-title'><p>Microsoft<br/>Certified</p></div>
                            <div className='intro-description'><p>By being a Certified Microsoft Partner we have access to the latest training, resources and dedicated support. This means we are always up-to-date on the latest features, releases and early product information to provide our clients a robust, seamless SharePoint experience.</p></div>
                            <Link to='/about'><button className='btn btn-primary'>Learn More</button></Link>
                        </div>
                        <div className='intro-item col-md-3 text-center'>
                            <img src={message} alt="not found" className='itro-svg' />
                            <div className='intro-title'><p>Reliable<br/>Partners</p></div>
                            <div className='intro-description'><p>We are proud to partner with BGI Solutions, an Australian company that masters our tools to deliver best-in-class service to our clients worldwide. Their agile team of IT specialists is ready to assist you with the configuration and implementation of our apps.</p></div>
                            <a href='https://www.bgisolutions.com.au/' className='btn btn-primary'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-us-container">
                <Contact propsdata={data} />
            </div>
        </div>
    )
}
export default Online;