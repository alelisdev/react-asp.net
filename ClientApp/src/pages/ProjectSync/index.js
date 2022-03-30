import React, {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import eye from '../../assets/svgs/eye.svg';
import ring from '../../assets/svgs/ring.svg';
import key from '../../assets/svgs/key.svg';
import comp from '../../assets/svgs/comp.svg';
import pc from '../../assets/svgs/pc.svg';
import strunctureman from '../../assets/images/c1a65d_3ec54db91e0745e48075740418a30672_mv2_d_3980_1853_s_2.webp';
import capterra from '../../assets/images/sample_review_badge-22f0d57b3a566895df95.webp'
import ProjectSyncImage from '../../assets/images/ProjectSync.webp'
import Contact from "../../components/Contact";


function ProjectSync() {

    const data = {
        toptitle: 'Get started today! No credit card required.',
        title: 'Request your 30-day trial and get $50 credit to test ProjectSync in your own SharePoint environment',
        content: 'Upon submitting this form, you will be provided with the installation instructions for ProjectSync. These instructions will lead you through to the app installation and provide further links to related documentation.',
        btn_title: 'START TRIAL'
    }

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const contactRef = useRef(null)

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const moveUtiliy = () => {
        navigate('/case-studies');
    }
    return (
        <div className="main">
            <div className='projectSync-container'>
                <div className='projectSync-centered'>
                    <h5><span>PROJECT SYNC FOR PROJECT ONLINE</span></h5>
                    <p className='title service-title'>IMPROVE YOUR PROJECT PERFORMANCE WITH REAL-TIME DATA</p>
                    <h6><span>Compile a complete picture of your project storing your data in SQL and connect it to your reporting tools get accurate reports from Project Online in just a fraction of time. </span></h6>
                    <h6><span>NO CREDIT CARD REQUIRED</span></h6>
                    <button className='btn start-btn text-white' onClick={()=>scrollToContact()}>START FREE</button>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-2 m-2 text-center d-flex flex-column">
                        <img src={eye} alt="eye" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Get control of your project with accurate data</span>
                        <span className="service-svg-content mt-1">Replicates project entities (Project, Task, Resource) into a SQL database in just a fraction of time based on events in Project Online (e.g. Save or Publish).</span>
                    </div>
                    <div className="col-md-2 m-2 text-center d-flex flex-column">
                        <img src={ring} alt="ring" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Gain efficiency with common data source</span>
                        <span className="service-svg-content mt-1">Can be configured to use the same database as ListSync, allowing you to join both Project Site list data and Project Online entity data in queries.</span>
                    </div>
                    <div className="col-md-2 m-2 text-center d-flex flex-column">
                        <img src={key} alt="key" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Secure Microsoft SQL database</span>
                        <span className="service-svg-content mt-1">ProjectSync stores the SharePoint list data in a Microsoft SQL Server database. You have the flexibility to choose between Azure SQL database or On premise SQL Server.</span>
                    </div>
                    <div className="col-md-2 m-2 text-center d-flex flex-column">
                        <img src={pc} alt="pc" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Optimize time with easy interface</span>
                        <span className="service-svg-content mt-1">The interface to manage is in Project Online, making it easy to configure in just a few clicks.</span>
                    </div>
                    <div className="col-md-2 m-2 text-center d-flex flex-column">
                        <img src={comp} alt="comp" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Fully integrated to your reporting tool</span>
                        <span className="service-svg-content mt-1">Connect data with your existing reporting systems like BI Service, Power BI or Tableau.</span>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row justify-content-center project-sync-image">
                    <img src={strunctureman} alt="ProjectSync" style={{width: 'fit-content', padding: '0px'}} />
                    <div className='projectSync-right'>
                        <span className="case-studies">CASE STUDIES</span>
                        <div className="d-flex justify-content-center"><p className='project-border'></p></div>
                        <p className="utilities">UTILITIES</p>
                        <span className="case-studies">Get to know how companies from this industry are increasing their productivity with ProjectSync</span>
                        <div><button className="btn utility-btn" onClick={()=> moveUtiliy()}>LEARN MORE</button></div>
                    </div>
                </div>
            </div>
            <div className="microsoft">
                <div className="capstar">
                    <img src={capterra} alt="capterra" />
                </div>
                <span className="text-center mt-4"><h1 className="general-font">WHY PROJECT SYNC?</h1></span>
                <span className="text-center mt-4"><h5 className="service-answer">Forget long-term implementation and complex billing models. We have 6 compelling reasons why you should rely on ProjectSync:</h5></span>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">1.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Improve your performance with SQL data</div>
                                <div className="micro-content">With your Project Online data stored in SQL, you no longer depend on slow OData feeds to extract data for reporting. You can now attach your reporting tool to the SQL database and get reports from Project Online in just a fraction of time.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">2.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Create as many environments as you need</div>
                                <div className="micro-content">ProjectSync allows you to create any number of environments. This gives you the benefit of following Dev, Test, Production release management processes. You are also allowed to separate departments data from each other in different databases (i.e. ICT, Operations if using different Project Online instances for each).</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">3.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Benefit from compatibility with other apps</div>
                                <div className="micro-content">Storing Project data in a SQL database allows you to connect many different reporting or integration tools. SQL has been around for a long time and is a supported data source almost everywhere. You are not limited to ThorApps BI Service or Power BI for reporting.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">4.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Get power and flexibility with customized data sets</div>
                                <div className="micro-content">With your Project data in SQL, you can use SQL to perform the usual joins, filter's and aggregations on the server. This gives you the power to create highly customized, small data sets' for use in your reporting tools that will transfer over the internet very quickly.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">5.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Access data from anywhere, anytime</div>
                                <div className="micro-content">When choosing for ThorApps to host your reports, you can fully and securely rely on a cloud service, accessible anywhere in the world, from any device.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">6.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Test for free in your own environment</div>
                                <div className="micro-content">Trialing ProjectSync for free lets you ensure it meets your specific requirements, using your own data. In addition, the account management features within the app let you track your usage as you go.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <span className="text-center"><h1 className="general-font mt-5">HOW DOES IT WORK?</h1></span>
                <span className="text-center mt-4"><h5 className="work-answer">ThorApps offers its own SSRS farms, which is a secured space to store your data.</h5></span>
                <div className="row justify-content-center">
                    <img src={ProjectSyncImage} alt="ProjectSync" style={{width: 'fit-content'}} />
                </div>
            </div>
            <div className="service-contact" ref={contactRef} >
                <Contact propsdata={data} />
            </div>
        </div>
    )
}

export default ProjectSync;