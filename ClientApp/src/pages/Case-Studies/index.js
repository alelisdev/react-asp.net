import React, { useEffect, useRef } from 'react'
import education from '../../assets/images/c1a65d_57394b4348d54e48926ef0dfde67fcca_mv2_d_4000_2667_s_4_2.webp'
import health from '../../assets/images/c1a65d_4ef9eb494c3148839f195226711833bc_mv2_d_2500_1478_s_2.webp';
import utilities from '../../assets/images/c1a65d_6f76789da61c46a68bbc6b0d311c869c_mv2_d_4000_3318_s_4_2.webp';
import government from '../../assets/images/c1a65d_6731f3d04efe41df9a5f3fe4a4b46b93_mv2_d_3500_2333_s_2.webp';
import finance from '../../assets/images/c1a65d_c013db23cd0c41f19f190a2fc21b6dac_mv2_d_2500_1522_s_2.webp';
import mining from '../../assets/images/c1a65d_7082b6b4cc2f43c19e0ed5031cf435f5_mv2_d_2667_4000_s_4_2.webp';
import { Link } from 'react-router-dom';

function CaseStudies() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const educationRef = useRef(null);

    const scrollToEducation = () => {
        educationRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const healthRef = useRef(null);
    const scrollToHealth = () => {
        healthRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const utilitiesRef = useRef(null);
    const scrollToUtilities = () => {
        utilitiesRef.current.scrollIntoView({ behavior: "smooth" })
    }
    const govRef = useRef(null);
    const scrollToGov = () => {
        govRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const financeRef = useRef(null);
    const scrollToFinance = () => {
        financeRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const miningRef = useRef(null);
    const scrollToMinig = () => {
        miningRef.current.scrollIntoView({ behavior: "smooth" })
    }


    return(
        <div className="main">
            <div className='case-container'>
                <div className='centered'>
                    <p className='title online-title'>CASE STUDIES</p>
                    <h4>Get to know how companies from several industries are increasing their productivity with our apps
                    </h4>
                    <div className="d-flex justify-content-center"><p className='middle-border-case'></p></div>
                    <div className="d-flex justify-content-center">
                        <button className="btn case-btn" onClick={() => scrollToEducation()}>EDUCATION</button>
                        <button className="btn case-btn" onClick={() => scrollToHealth()}>HEALTH</button>
                        <button className="btn case-btn" onClick={() => scrollToUtilities()}>UTILITIES</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn case-btn" onClick={() => scrollToGov()}>GOVERNMENT</button>
                        <button className="btn case-btn" onClick={() => scrollToFinance()}>FINANCE</button>
                        <button className="btn case-btn" onClick={() => scrollToMinig()}>MINING</button>
                    </div>
                    
                </div>
            </div>
            <div className="container mt-5 mb-5" ref={educationRef}>
                <div className="row">
                    <div className="col-lg-5 p-0">
                        <img src={education} alt='ecucation' className="case-image" />
                    </div>
                    <div className="col-lg-7 case-description">
                        <div className="p-0">
                            <h1 className="eductaion-title">Education</h1>
                            <div className="d-flex">
                                <Link to="/bi-service-ssrs-reports-sharepoint"><button className="cases-btn btn" style={{ marginLeft: '0px' }}>BI SERVICE</button></Link>
                                <Link to="/list-sync-sql-sharepoint-online"><button className="cases-btn btn">LIST SYNC</button></Link>
                            </div>
                            <div className="case-content">
                                <div className="case-title">CHALLENGE</div>
                                <div className="case-desc">Our client in the education sector had been tracking absences by school in SharePoint Online. The list has several lookup fields for other related information. The information needs to be reported upon and charts created to show performance against targets.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">SOLUTION</div>
                                <div className="case-desc">After close consultation with the client we implemented ThorApps Online Services, making use of the <Link className='case-studies-link' to='/bi-service-ssrs-reports-sharepoint'>BI Service</Link> we were able to create an automated multi-page report with charts detailing performance against target.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">RESULT</div>
                                <div className="case-desc">The client was able to get automated reports to ensure that absence was effectively tracked and reported to ensure that targets were met or exceeded.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container mt-5 mb-5" ref={healthRef}>
                <div className="row">
                    <div className="col-lg-7 case-description">
                        <div className="p-0">
                            <h1 className="eductaion-title">Health</h1>
                            <div className="d-flex">
                                <Link to="/bi-service-ssrs-reports-sharepoint"><button className="cases-btn btn" style={{ marginLeft: '0px' }}>BI SERVICE</button></Link>
                            </div>
                            <div className="case-content">
                                <div className="case-title">CHALLENGE</div>
                                <div className="case-desc">Our client working in the health sector, Sandra was responsible for approving timesheets each week, but had the unenviable task of having to chase up staff who needed constant reminding to submit their documentation. She wanted to find a way she could avoid having to personally phone each one of them individually.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">SOLUTION</div>
                                <div className="case-desc">When we met with Sandra, it didn’t take long to see just how time consuming this process had become. We used the <Link className='case-studies-link' to='/bi-service-ssrs-reports-sharepoint'>BI Service</Link> subscription features and created the “hasslebot”, the hassle you have when you’re not having to hassle.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">RESULT</div>
                                <div className="case-desc">A clever report now runs behind the scenes without Sandra having to lift a finger. This then runs an email every Monday morning at 10am to ONLY the staff that have not submitted their timesheet. Not only did this take only 15 minutes to setup, the best part is that 95% of the company’s timesheets are now being submitted on time.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0">
                        <img src={health} alt='health' className="case-image" />
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5" ref={utilitiesRef}>
                <div className="row">
                    <div className="col-lg-5 p-0">
                        <img src={utilities} alt='utilities' className="case-image" />
                    </div>
                    <div className="col-lg-7 case-description">
                        <div className="p-0">
                            <h1 className="eductaion-title">Utilities</h1>
                            <div className="d-flex">
                                <Link to='/project-sync-project-online'><button className="cases-btn btn" style={{ marginLeft: '0px' }}>PROJECT SYNC</button></Link>
                                <Link to='/list-sync-sql-sharepoint-online'><button className="cases-btn btn">LIST SYNC</button></Link>
                            </div>
                            <div className="case-content">
                                <div className="case-title">CHALLENGE</div>
                                <div className="case-desc">Sam is a project manager working in utilities, using Project Online. He runs daily project status meetings and had to manually collate information from project schedules and lists in project workspace sites. This was taking Sam an inordinate amount of time, and even with all that effort, he could only ever see day old information.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">SOLUTION</div>
                                <div className="case-desc">We created Sam a single status report for each project that was updated to the minute, so he could focus on problem areas. Using <Link className='case-studies-link' to='/bi-service-ssrs-reports-sharepoint'>BI Service</Link> and <Link className='case-studies-link' to='/project-sync-project-online'>Project Sync Service</Link>, we created a PoP report (Project on a Page). His Issue, Risk and Change Request information became available immediately and Project Schedule information a few minutes after publishing a project.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">RESULT</div>
                                <div className="case-desc">Sam got his sanity back and was so happy with the solution, we then put the report into a web part on the project sites, so all team members could see the “to the minute” status anytime. This has also resulted in much shorter status meetings with everyone updating the report before it’s presented in the meeting.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5" ref={govRef}>
                <div className="row">
                    <div className="col-lg-7 case-description">
                        <div className="p-0">
                            <h1 className="eductaion-title">Government</h1>
                            <div className="d-flex">
                                <Link to="/bi-service-ssrs-reports-sharepoint"><button className="cases-btn btn" style={{ marginLeft: '0px' }}>BI SERVICE</button></Link>
                            </div>
                            <div className="case-content">
                                <div className="case-title">CHALLENGE</div>
                                <div className="case-desc">Our client in government spent years building vital business reports in SSRS for SharePoint Integrated-Mode, but wanted to migrate to SharePoint Online. With SharePoint Online not providing SSRS, they were at a total crossroads as they could not afford to operate without the business intelligence generated from their reporting.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">SOLUTION</div>
                                <div className="case-desc">Working closely with the client to understand the essential reports driving their business, we began to build a <Link className='case-studies-link' to='/bi-service-ssrs-reports-sharepoint'>BI Service</Link> solution that would ensure business continuity, provide improved efficiency and provide limited development time.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">RESULT</div>
                                <div className="case-desc">As well as seamlessly migrating all existing reports to Online Services and creating a secure connection to their SQL server onsite, our client was able to experience business as usual in record time.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0">
                        <img src={government} alt='government' className="case-image" />
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5" ref={financeRef}>
                <div className="row">
                    <div className="col-lg-5 p-0">
                        <img src={finance} alt='finance' className="case-image" />
                    </div>
                    <div className="col-lg-7 case-description">
                        <div className="p-0">
                            <h1 className="eductaion-title">Finance</h1>
                            <div className="d-flex">
                                <Link to="/bi-service-ssrs-reports-sharepoint"><button className="cases-btn btn" style={{ marginLeft: '0px' }}>BI SERVICE</button></Link>
                                <Link to="/list-sync-sql-sharepoint-online"><button className="cases-btn btn">LIST SYNC</button></Link>
                            </div>
                            <div className="case-content">
                                <div className="case-title">CHALLENGE</div>
                                <div className="case-desc">Working in finance, as well as helping to resolve issues, Michael also sends his customers an issue status report every week. This detailed report is collated in Excel individually for each customer and emailed individually to them. The reporting process had become unmanageable, taking up nearly just as much time as getting issues resolved.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">SOLUTION</div>
                                <div className="case-desc">Michael’s issue is not uncommon and was the perfect candidate for our support ticketing system, which uses a SQL database to store the issue and customer contact data, then generate reports. So we created an SSRS report for <Link className='case-studies-link' to='/bi-service-ssrs-reports-sharepoint'>BI Service</Link> and a data driven subscription.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">RESULT</div>
                                <div className="case-desc">This flexible reporting solution means Michael’s customer issue status reports are now completely automated. This has saved him numerous hours of tedious work each week and enabled him to get back to helping his customers.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5" ref={miningRef}>
                <div className="row">
                    <div className="col-lg-7 case-description">
                        <div className="p-0">
                            <h1 className="eductaion-title">Mining</h1>
                            <div className="d-flex">
                                <Link to="/bi-service-ssrs-reports-sharepoint"><button className="cases-btn btn" style={{ marginLeft: '0px' }}>BI SERVICE</button></Link>
                            </div>
                            <div className="case-content">
                                <div className="case-title">CHALLENGE</div>
                                <div className="case-desc">Enable our client in the mining industry to easily print their Power BI dashboard and score card data, especially when there is more than one page of information.</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">SOLUTION</div>
                                <div className="case-desc">By employing <Link className='case-studies-link' to='/bi-service-ssrs-reports-sharepoint'>BI Service</Link> by ThorApps the client was able to generate paginated reports via the free Visual Studio community edition. They were then more easily able to present reports as both a dashboard in SharePoint online and print the paginated reports (to PDF or Printer).</div>
                            </div>
                            <div className="case-content">
                                <div className="case-title">RESULT</div>
                                <div className="case-desc">No more battling with Power BI printouts! Using the <Link className='case-studies-link' to='/bi-service-ssrs-reports-sharepoint'>BI Service</Link> app now means anyone can not only page through their report pages, but also export their report to PDF for printing.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0">
                        <img src={mining} alt='mining' className="case-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;