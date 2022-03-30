import React, {useEffect, useRef} from "react";
import header from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import chart from '../../assets/svgs/chart.svg';
import calender from '../../assets/svgs/calender.svg';
import filebox from '../../assets/svgs/filebox.svg';
import comp from '../../assets/svgs/comp.svg';
import sms from '../../assets/svgs/sms.svg';
import enhance from '../../assets/svgs/enhance.svg';
import mailbox from '../../assets/svgs/mailbox.svg';
import capterra from '../../assets/images/sample_review_badge-22f0d57b3a566895df95.webp'
import BIService from '../../assets/images/BIService.webp'
import Contact from "../../components/Contact";


function Service() {

    const data = {
        toptitle: '<span className="blue-color">Get started today! No credit card required.<span>',
        title: 'Request your 30-day trial and get $50 credit to test BI Service in your own SharePoint environment',
        content: 'Upon submitting this form, you will be provided with the installation instructions for BI Service. These instructions will lead you through adding the app to your SharePoint site and provide further links to related documentation.',
        btn_title: 'Send'
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const contactRef = useRef(null)

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="main">
            <div className='service-container'>
                <img src={header} alt="mainBack" className='service-back' />
                <div className='centered'>
                    <h5><span>BI SERVICE FOR SHAREPOINT ONLINE</span></h5>
                    <p className='title service-title'>REAL-TIME COLLABORATION FOR DATA-DRIVEN DECISIONS</p>
                    <div className="d-flex justify-content-center"><p className='middle-border'></p></div>
                    <h6><span>Create, export and schedule stunning real-time dashboards to make informed decisions. Choose to leverage your existing investments in Power BI or simply make the most of it as a stand-alone app.</span></h6>
                    <h6><span>NO CREDIT CARD REQUIRED</span></h6>
                    <button className='btn start-btn text-white' onClick={()=>scrollToContact()}>START FREE</button>
                </div>
            </div>
            <div className="microsoft d-flex justify-content-center">
                <h3 className="partner">Microsoft<br/>Partner</h3>
                <h2 className='border-end border-1 microsoft-border'></h2>
                <div className="desc">
                    <span className="d-flex flex-column">By being a Certified Microsoft Partner we have access to the latest training,<br/>resources and dedicated support. This means we are always up-to-date on the<br/> latest features, releases and early product information to provide our clients a<br />    robust, seamless SharePoint experience.</span>
                    <a href="https://appsource.microsoft.com/en-us/product/office/WA104381900?tab=Overview" target="_blank">Check this app on Microsoft App Store</a>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 m-5 text-center d-flex flex-column">
                        <img src={chart} alt="chart" className="svg-icon" width={70} />
                        <span className="service-svg-title">Create insightful real-time dashboards</span>
                        <span className="service-svg-content mt-3">Present stunning dashboards to your SharePoint users by configuring your pages with the Report Viewer web part and allow them to collaborate with accurate data. The SharePoint page dashboards can even be rendered via your mobile browser, so you can query on the go.</span>
                    </div>
                    <div className="col-md-3 m-5 text-center d-flex flex-column">
                        <img src={calender} alt="calender" className="svg-icon" width={70} />
                        <span className="service-svg-title">Export, schedule and distribute reports at the right time</span>
                        <span className="service-svg-content mt-3">Save your reports to a variety of formats, including Word, Excel, PDF, PowerPoint and more. With scheduled delivery, you can have your most important reports emailed to you, or published to a document library for re-distribution.</span>
                    </div>
                    <div className="col-md-3 m-5 text-center d-flex flex-column">
                        <img src={filebox} alt="filebox" className="svg-icon" width={70} />
                        <span className="service-svg-title">Migrate data with fully compatible features</span>
                        <span className="service-svg-content mt-3">Compatible with Microsoft SSRS 2008R2 or higher, which enables you to easily migrate your existing reports. fully compatible when migrating to Microsoft's Power BI Report Server, in case you choose to move away from BI Service in the future. </span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={mailbox} alt="mailbox" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Personalize with context sensitive content</span>
                        <span className="service-svg-content mt-1">Reports and dashboards can automatically filter content based who the current users is or where the report is accessed from in SharePoint.</span>
                    </div>
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={enhance} alt="enhance" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Enhance Power BI</span>
                        <span className="service-svg-content mt-1">If you already use the free version of Power BI but feel limited on sharing reports, BI Service allows you to collaborate in real-time and enables any user to consume BI content for only a fraction of the price.</span>
                    </div>
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={sms} alt="sms" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Control your data sovereignty</span>
                        <span className="service-svg-content mt-1">Allows you to manage permissions in SharePoint and have the flexibility to choose where your data and report server's reside.</span>
                    </div>
                    <div className="col-md-2 m-5 text-center d-flex flex-column">
                        <img src={comp} alt="comp" className="svg-icon-below" width={70} />
                        <span className="service-svg-title">Automate with data driven subscriptions</span>
                        <span className="service-svg-content mt-1">With data driven subscriptions you can publish or distribute a report  with content customized based on any information you want. Who the recipient is, what the date is, and more.</span>
                    </div>
                </div>
            </div>
            <div className="microsoft">
                <div className="capstar">
                    <img src={capterra} alt="" className="" />
                </div>
                <span className="text-center mt-4"><h1 className="general-font">WHY BI SERVICE?</h1></span>
                <span className="text-center mt-4"><h5 className="service-answer">Forget long-term implementation and complex billing models. We have 6 compelling reasons why you should rely on BI Service:</h5></span>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">1.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Increase productivity with no user re-training</div>
                                <div className="micro-content">By migrating from SSRS and SharePoint on-premise to BI Service and SharePoint Online, you keep a consistent look and feel and feature set. You won't need to spend hours retraining users on different tools or features.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">2.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Increase productivity with no user re-training</div>
                                <div className="micro-content">By migrating from SSRS and SharePoint on-premise to BI Service and SharePoint Online, you keep a consistent look and feel and feature set. You won't need to spend hours retraining users on different tools or features.</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">3.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Create as many environments as you need</div>
                                <div className="micro-content">BI Service allows you to create any number of separate environments. This gives you the benefit of following Dev, Test, Production release management processes but also to separate departments from each other (i.e. Sales, Operations, Admin).</div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex m-5">
                            <span className="micro-order">4.</span>
                            <div className="micro-desc">
                                <div className="micro-title">Retain your investment in SSRS reports</div>
                                <div className="micro-content">By using BI Service, you retain the investment you've already made in SSRS reports. You don't have to re-invent the wheel and create all new reports.</div>
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
                                <div className="micro-content">Trialing BI Service for free lets you ensure it meets your specific requirements, using your own data. In addition, the account management features within the app let you track your usage as you go.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <span className="text-center"><h1 className="general-font mt-5">HOW DOES IT WORK?</h1></span>
                <span className="text-center mt-4"><h5 className="work-answer">ThorApps offers its own SSRS farms, which is a secured space to store your data.</h5></span>
                <div className="row">
                    <img src={BIService} alt="BIService" style={{width: 'fit-content'}} />
                </div>
            </div>
            <div className="service-contact" ref={contactRef} >
                <Contact propsdata={data} />
            </div>
        </div>

        
    )
}

export default Service;