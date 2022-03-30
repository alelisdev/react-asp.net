import React, {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import header from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import key from '../../assets/svgs/key.svg';
import pc from '../../assets/svgs/pc.svg';
import out from '../../assets/svgs/out.svg';
import ring from '../../assets/svgs/ring.svg';
import capterra from '../../assets/images/sample_review_badge-22f0d57b3a566895df95.webp'
import ListSyncImage from '../../assets/images/ListSync.webp'
import Contact from "../../components/Contact";
import strunctureman from '../../assets/images/c1a65d_3ec54db91e0745e48075740418a30672_mv2_d_3980_1853_s_2.webp';
import firstImage from '../../assets/images/c1a65d_57394b4348d54e48926ef0dfde67fcca_mv2_d_4000_2667_s_4_2 (1).webp';
import secondImage from '../../assets/images/c1a65d_c013db23cd0c41f19f190a2fc21b6dac_mv2_d_2500_1522_s_2 (1).webp';

function ListSync() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const contactRef = useRef(null)

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const data = {
        toptitle: 'Get started today! No credit card required.',
        title: 'Request your 30-day trial and get $50 credit to test ListSync in your own SharePoint environment',
        content: 'Upon submitting this form, you will be provided with the installation instructions for ListSync. These instructions will lead you through adding the app to your SharePoint site and provide further links to related documentation.',
        btn_title: 'START TRIAL'
    }

    const MoveEducation = () => {
        navigate('/case-studies');
    }

    return (
        <div className="main">
            <div className='service-container'>
                <img src={header} alt="mainBack" className='service-back' />
                <div className='centered'>
                    <h5><span>LIST SYNC FOR SHAREPOINT ONLINE</span></h5>
                    <p className='title service-title'>GAIN AGILITY WITH REAL-TIME REPORTING</p>
                    <div className="d-flex justify-content-center"><p className='middle-border'></p></div>
                    <h6><span>Get immediate access to all of your SharePoint lists in one place. With data collated and stored in SQL, you’ll be running amazingly fast reports in a fraction of the time. </span></h6>
                    <h6><span>NO CREDIT CARD REQUIRED</span></h6>
                    <button className='btn start-btn text-white' onClick={()=>scrollToContact()}>START FREE</button>
                </div>
            </div>
            <div className="microsoft d-flex justify-content-center">
                <h3 className="partner">Microsoft<br/>Partner</h3>
                <h2 className='border-end border-1 microsoft-border'></h2>
                <div className="desc">
                    <span className="d-flex flex-column">By being a Certified Microsoft Partner we have access to the latest training,<br/>resources and dedicated support. This means we are always up-to-date on the<br/> latest features, releases and early product information to provide our clients a<br />    robust, seamless SharePoint experience.</span>
                    <a href="https://appsource.microsoft.com/en-us/product/office/WA104381900?tab=Overview" target="_blank" className="">Check this app on Microsoft App Store  >></a>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={ring} alt="ring" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Expose data lists in real time</span>
                        <span className="service-svg-content mt-1">Replicate your SharePoint lists items to a SQL database in real-time. Integrate data with your existing reporting systems like BI Service, Power BI or Tableau.</span>
                    </div>
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={out} alt="out" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Gain efficiency with cross site collection</span>
                        <span className="service-svg-content mt-1">Collates lists items from commonly structured lists into a SQL table from across the site collection. Avoid spending time to understand fields names because they are derived from the list field names.</span>
                    </div>
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={pc} alt="pc" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Optimize time with easy interface</span>
                        <span className="service-svg-content mt-1">The interface to manage ListSync is in SharePoint, making it easy to configure in just a few clicks.</span>
                    </div>
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={key} alt="key" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Secure Microsoft SQL database</span>
                        <span className="service-svg-content mt-1">ListSync stores the SharePoint list data in a Microsoft SQL Server database. You have the flexibility to choose between Azure SQL database or On-premise SQL Server.</span>
                    </div>
                </div>
            </div>
            <div className="list-sync-carousel">
                <div id="robotcarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#robotcarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#robotcarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#robotcarousel" data-bs-slide-to="2" aria-label="Slide 2"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container text-center">
                                <div className="row justify-content-center list-sync-image">
                                    <img src={firstImage} alt="firstImage" style={{width: 'fit-content', padding: '0px'}} />
                                    <div className='listSync-right'>
                                        <span className="case-studies">CASE STUDIES</span>
                                        <div className="d-flex justify-content-center"><p className='project-border'></p></div>
                                        <p className="utilities">EDUCATION</p>
                                        <span className="case-studies">Get to know how companies from this industry are increasing their productivity with ListSync</span>
                                        <div><button className="btn utility-btn" onClick={()=>MoveEducation()}>LEARN MORE</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container text-center">
                                <div className="row justify-content-center list-sync-image">
                                    <img src={secondImage} alt="secondImage" style={{width: 'fit-content', padding: '0px'}} />
                                    <div className='finance-right'>
                                        <span className="case-studies">CASE STUDIES</span>
                                        <div className="d-flex justify-content-center"><p className='project-border'></p></div>
                                        <p className="utilities">FINANCE</p>
                                        <span className="case-studies">Get to know how companies from this industry are increasing their productivity with ListSync</span>
                                        <div><button className="btn utility-btn" onClick={()=>MoveEducation()}>LEARN MORE</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container text-center">
                                <div className="row justify-content-center list-sync-image">
                                    <img src={strunctureman} alt="ProjectSync" style={{width: 'fit-content', padding: '0px'}} />
                                    <div className='listSync-right'>
                                        <span className="case-studies">CASE STUDIES</span>
                                        <div className="d-flex justify-content-center"><p className='project-border'></p></div>
                                        <p className="utilities">UTILITIES</p>
                                        <span className="case-studies">Get to know how companies from this industry are increasing their productivity with ListSync</span>
                                        <div><button className="btn utility-btn" onClick={()=>MoveEducation()}>LEARN MORE</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#robotcarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#robotcarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="microsoft">
                <div className="capstar">
                    <img src={capterra} alt="" className="" />
                </div>
                <span className="text-center mt-4"><h1 className="general-font">WHY LIST SYNC?</h1></span>
                <span className="text-center mt-4"><h5 className="service-answer">Forget long-term implementation and complex billing models. We have 6 compelling reasons why you should rely on BI Service:</h5></span>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">1.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Get power and flexibility with customized data sets</div>
                                <div className="micro-content">With your SharePoint list items in SQL, you can use SQL to perform the usual joins, filters and aggregations on the server. This gives you the power to create highly customized, small data sets for use in your reporting tools that will transfer over the internet very quickly.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">2.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Create as many environments as you need</div>
                                <div className="micro-content">ListSync allows you to create any number of separate environments. This gives you the benefit of following Dev, Test, Production release management processes but also to separate departments from each other (i.e. Sales, Operations, Admin).</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">3.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Access data from anywhere, anytime</div>
                                <div className="micro-content">When choosing for ThorApps to host your SQL database, you can fully and securely rely on a cloud service, accessible anywhere in the world, from any device.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">4.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Benefit from compatibility with other apps</div>
                                <div className="micro-content">Storing SharePoint list items in a SQL database allows you to connect many different reporting tools (or integration tools). SQL has been around for a long time and is a supported data source almost everywhere. You are not limited to ThorApps BI Service, or Power BI.</div>
                            </div>
                        </div>
                        <div className="col-md-9 d-flex m-5">
                            <span className="micro-order">5.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Test for free in your own environment</div>
                                <div className="micro-content">Trialing ListSync for free lets you ensure it meets your specific requirements, using your own data. In addition, the account management features within the app let you track your usage as you go.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <span className="text-center"><h1 className="general-font mt-5">HOW DOES IT WORK?</h1></span>
                <span className="text-center mt-4"><h5 className="work-answer">ThorApps offers its own SSRS farms, which is a secured space to store your data.</h5></span>
                <div className="row justify-content-center">
                    <img src={ListSyncImage} alt="ListSync" style={{width: 'fit-content'}} />
                </div>
            </div>
            <div className="service-contact" ref={contactRef} >
                <Contact propsdata={data} />
            </div>
        </div>
    )
}

export default ListSync;