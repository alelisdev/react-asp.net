import React, {useEffect} from "react";
// import { useNavigate, Link } from "react-router-dom";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';

function Faq() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // const navigate = useNavigate();

    // const redirectToRequestQuote = () => {
    //     navigate('/on-premise');
    // }

    return (
        <div className="main">
            <div className='online-container'>
                <img src={mainBack} alt="mainBack" className='main-back' />
                <div className='centered'>
                    <p className='title online-title'>FREQUENTLY ASKED QUESTIONS</p>
                </div>
            </div>
            <div className="container">
                <div className="title faq-title mt-5">
                    ONLINE SERVICES 
                </div>
                <div className="title faq-sb-title mt-3">
                    ONLINE SERVICES IN GENERAL 
                </div>
                <div className="faq-sb2-title">How much does it cost?</div>
                <p className="faq-description">ThorApps Online Services use a pay as you go usage model and a <a href="https://www.thorapps.com/pricing" className="faq-links" target="_blank">Payment Plans</a> like a mobile phone plan. Payment Plans start at $100 per month and all plans include all features and unlimited users. </p>
                <div className="faq-sb2-title">Which plan is right for me?</div>
                <div className="faq-description">Only data usage is charged to a customer's <a href="https://www.thorapps.com/pricing" target="_blank" className="faq-links">Payment Plans</a> , so we encourage you to use our $50 trial valid for 30 days to have a feel of how much data you consume and choose the plan that suits you best. Once your monthly plan limit is reached, you can either continue using ThorApps services, with additional usage charges applied to your invoice or have the services disabled until the next payment period begins. To check how much data you have consumed, please go to Account Settings (Cog on the top right corner), then click on Usage Report. </div>
                <div className="faq-sb2-title">How do you calculate my usage? </div>
                <div className="faq-description">Usage is calculated by compute time. The average cost per minute for BI Service is $US 1.3 and for ListSync is $US 0.13.  </div>
                <div className="faq-sb2-title">How can I buy a plan? </div>
                <div className="faq-description">Please download our <a href="https://support.thorapps.com/Downloads/ThorApps%20Online%20Services%20Purchasing%20Guide.pdf" target="_blank" className="faq-links">Purchasing Guide</a> to manage paying for your ThorApps Online Services subscription. </div>
                <div className="faq-sb2-title">What currency am I charged in? </div>
                <div className="faq-description">You are charged in the currency relevant to the local data center you are hosted on. In Australia this is AUD in the United States this is USD and so on. </div>
                <div className="faq-sb2-title">Can I get a free trial period?  </div>
                <div className="faq-description">Yes, we provide every customer a free $50 credit valid for 30 days on their account on the first install to trial one single product or have full access to our suite of apps. The trial will be de-activated when you have consumed the $50 or ended the 30-day period, whichever comes first. Once the trial is de-activated, your reports will still exist, but your access is revoked. You will require a valid Payment Plan to regain access and create or export new reports. If this isn’t enough for your requirements, please contact us on <a href="mailto:info@thorapps.com" className="faq-links">info@thorapps.com</a>.</div>
                <div className="faq-sb2-title">Can I change my plan?  </div>
                <div className="faq-description">You can upgrade, downgrade, or cancel your <a href="https://www.thorapps.com/pricing" target="_blank" className="faq-links">Payment Plans</a> any time you want. To do so, please go to Account Settings (Cog on the top right corner), then click on Payment Plan. Payments are calculated and processed on the 2nd day of the calendar month for the previous calendar month.</div>
                <div className="faq-sb2-title">How can I cancel my plan?  </div>
                <div className="faq-description">If you wish to submit a cancel request for your ThorApps services,  please contact us on <a href="mailto:info@thorapps.com" className="faq-links">info@thorapps.com</a> and a representative will contact you in within 24 hours.</div>
                <div className="faq-sb2-title">Do users need to sign in to use the apps? </div>
                <div className="faq-description">Once signed in to their SharePoint Online environment users receive no further sign in prompts. </div>
                <div className="faq-sb2-title">Can you ensure my data remains in my local region? </div>
                <div className="faq-description">We are limited to using Microsoft Azure data centers, but please contact us for your specific requirements. </div>
                <div className="faq-sb2-title">Can I add more people from my company to the same ThorApps account? </div>
                <div className="faq-description">To add more emails to your account, please navigate to your Account Settings (cog on the top right corner), click on Billing Contacts and then Add New. All emails listed on your Billing Contacts will receive updates about product usage and payment information. </div>
                <div className="faq-sb2-title">What support does ThorApps provide? </div>
                <div className="faq-description">Support agreements can be tailored to meet the unique needs of an individual client. Either direct via ThorApps or your authorised support partner. </div>
                <div className="faq-sb2-title">Is it secure? </div>
                <div className="faq-description">Yes, please contact us for specific queries. </div>
                <div className="faq-sb2-title">What browsers are supported? </div>
                <div className="faq-description">Internet Explorer 11, Chrome and Edge. </div>
                <div className="faq-sb2-title">Do you have more questions? </div>
                <div className="faq-description">Please contact us by calling <span className="faq-links">+61 455 249 407</span> or emailing  <a href="mailto:info@thorapps.com" className="faq-links">info@thorapps.com</a>.</div>

                <div className="title faq-sb-title mt-3">
                    BI SERVICE 
                </div>
                <div className="faq-sb2-title">How can I install the BI Service app? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Installation%20Guide.pdf" target="_blank" className="faq-links">download our Installation Guide</a> to install BI Service from your SharePoint site through the App Store. If you have more questions, please submit your query on our Support page or contact us on <a href="mailto:info@thorapps.com" className="faq-links" target="_self">info@thorapps.com</a>. </div>
                <div className="faq-sb2-title">How can I set up an environment to use BI Service? </div>
                <div className="faq-description">All ThorApps Online services support the concept of “Environments” and allow you to access common content managed by our Apps from multiple Site Collections. This feature allows you to keep a level of separation between different Site Collections. Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Environment%20Setup%20Guide.pdf" className="faq-links" target="_blank">download our Environment Set Up Guide</a> to set up your environment. </div>
                <div className="faq-sb2-title">How can I create and export an SSRS report? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20User%20Guide.pdf" className="faq-links" target="_blank">download our User Guide</a> to learn how to create an SSRS report using Microsoft Report Builder or Visual Studio 2017 and publish it to the BI Service Report Library. </div>
                <div className="faq-sb2-title">Can I use my own SSRS environment? </div>
                <div className="faq-description">Yes. There are some restrictions you’ll need to acknowledge for us to ensure our BI Service app continues to run reliably. </div>
                <div className="faq-sb2-title">Can my users create their own BI Service reports? </div>
                <div className="faq-description">Yes. Reports are created using Microsoft Report Builder or Visual Studio SSDT extensions, both are free. </div>
                <div className="faq-sb2-title">Can I join, filter and aggregate SharePoint list and project data in report queries, like I would in an On-Premise environment? </div>
                <div className="faq-description">Yes. When using our ListSync and ProjectSync apps to extract Project and SharePoint list data, you can use all the power of SQL server to analyze your data and present it with our BI Service app. </div>
                <div className="faq-sb2-title">Can you use a shared data source to create reports? </div>
                <div className="faq-description">Yes, you can. To learn how, please download <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20User%20Guide.pdf" className="faq-links" target="_blank">our User Guide</a>. </div>
                <div className="faq-sb2-title">How can I uninstall the app? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Uninstall%20Guide.pdf" className="faq-links" target="_blank">download our Uninstall Guide</a> to learn how to uninstall BI Service. </div>
                <div className="faq-sb2-title">Can I get some sample data to trail BI Service? </div>
                <div className="faq-description">We provide a copy of the Microsoft AdventureWorks sample database on Azure with connection details in our <a href="https://thorapps.sharepoint.com/Products/SPOBIService/Product%20Documentation/ThorApps%20BI%20Service%20Quick%20Start%20Guide.pdf" className="faq-links" target="_blank">Quick Start Guide</a>. Please be aware this is for demo purposes only and the credentials may change at any time (but will also be updated in this guide).  </div>
                
                
                <div className="title faq-sb-title mt-3">
                    LIST SYNC SERVICE 
                </div>
                <div className="faq-sb2-title">How can I install the ListSync app? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Installation%20Guide.pdf" target="_blank" className="faq-links">download our Installation Guide</a>  to install ListSync from your SharePoint site through the App Store. For further information, please submit your query on our Support page or contact us on <a href="mailto:info@thorapps.com" className="faq-links" target="_self">info@thorapps.com</a>. </div>
                <div className="faq-sb2-title">How can I create lists with ListSync? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20User%20Guide.pdf" className="faq-links" target="_blank">download our User Guide</a>  to learn how to create and expose a SharePoint list for reporting, create Reporting Schemas and reflect SharePoint lists in a SharePoint Online environment. </div>
                <div className="faq-sb2-title">How can I set up an environment to use ListSync?  </div>
                <div className="faq-description">All ThorApps Online services support the concept of “Environments” and allow you to access common content managed by our Apps from multiple Site Collections. This feature allows you to keep a level of separation between different Site Collections. Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Environment%20Setup%20Guide.pdf" className="faq-links" target="_blank">download our Environment Set Up Guide</a> to set up your environment. </div>
                <div className="faq-sb2-title">Can I use my own SQL environment (either on-premise or on my own Azure subscription)? </div>
                <div className="faq-description">Yes. There are some restrictions you’ll need to acknowledge for us to ensure our ListSync app continues to run reliably. </div>
                <div className="faq-sb2-title">What about performance impact? Will ListSync slow my SharePoint Online environment down? </div>
                <div className="faq-description">No…well, not enough that you’ll notice anyway. Some additional minor load is added to your environment, but it's negligible.  </div>
                <div className="faq-sb2-title">How can I uninstall the ListSync app? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Uninstall%20Guide.pdf" className="faq-links" target="_blank">download our Uninstall Guide</a> to learn how to uninstall ListSync. </div>
                
                
                <div className="title faq-sb-title mt-3">
                    PROJECT SYNC SERVICE 
                </div>
                <div className="faq-sb2-title">Can I use my own SQL environment (either On Premise or on my own Azure subscription)? </div>
                <div className="faq-description">Yes. There are some restrictions you’ll need to acknowledge for us to ensure our ProjectSync app continues to run reliably. </div>
                <div className="faq-sb2-title">How can I install the ProjectSync app? </div>
                <div className="faq-description">Please <a href="https://projectsync.thorapps.com/Help/ThorApps%20ProjectSync%20Service%20User%20Guide.pdf" className="faq-links" target="_blank">check out our Installation Guide</a> to download and install ProjectSync to your SharePoint site through the App Catalog. For further information, please submit your query on our Support page or contact us on <a href="mailto:info@thorapps.com" className="faq-links" target="_self">info@thorapps.com</a>.</div>
                <div className="faq-sb2-title">How can I update database tables with project data? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20User%20Guide.pdf" className="faq-links" target="_blank">download our User Guide</a>  to learn all the steps required to edit Service Accounts, Entity Type Sets and process Project Data. </div>
                <div className="faq-sb2-title">How can I set up an environment to use ProjectSync? </div>
                <div className="faq-description">All ThorApps Online services support the concept of “Environments” and allow you to access common content managed by our Apps from multiple Site Collections. This feature allows you to keep a level of separation between different Site Collections. Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Environment%20Setup%20Guide.pdf" className="faq-links" target="_blank">download our Environment Set Up Guide</a> to set up your environment. </div>
                <div className="faq-sb2-title">How can I uninstall the ProjectSync app? </div>
                <div className="faq-description">Please <a href="https://biservice.thorapps.com/Help/ThorApps%20BI%20Service%20Uninstall%20Guide.pdf" className="faq-links" target="_blank">download our Uninstall Guide</a> to learn how to uninstall ProjectSync. </div>
                
                <div className="d-flex justify-content-center"><p className='middle-faq-border'></p></div>
                
                <div className="title special-title mt-3">
                    ON-PREMISE PRODUCTS
                </div>
                <div className="title faq-sb-title mt-3">
                    ON-PREMISE PRODUCTS IN GENERAL
                </div>
                <div className="faq-sb2-title">How much does it cost? </div>
                <div className="faq-description">ThorApps On-Premise Products use an annual virtual CPU license pricing model. Each product has a rate per virtual CPU on the SharePoint Servers. Please contact us for a quote. </div>
                <div className="faq-sb2-title">Can I get a free trial period? </div>
                <div className="faq-description">Yes. All ThorApps products for SharePoint On-Premise are fully functional for the first 30 days for free as a trial period. If this isn’t enough for your requirements, please contact us, ThorApps will be happy to assist. </div>
                <div className="faq-sb2-title">What support does ThorApps provide? </div>
                <div className="faq-description">Support agreements can be tailored to meet the unique needs of an individual client. Either direct via ThorApps or your authorized support partner. </div>
                <div className="faq-sb2-title">Do you have more questions? </div>
                <div className="faq-description">Please contact us by calling <span className="faq-links">+61 455 249 407</span> or emailing <a href="mailto:info@thorapps.com" className="faq-links" target="_self">info@thorapps.com</a>. </div>
                

                <div className="title faq-sb-title mt-3">
                    REFLEX REPORTING 
                </div>
                <div className="faq-sb2-title">Isn’t it enough just to query the SharePoint content databases directly – why do we need Reflex Reporting? </div>
                <div className="faq-description">
                    There are three major issues with using the above approach: 
                    <ul>
                        <li>Querying the SharePoint content database directly voids support from Microsoft as it can cause table locks and prevent SharePoint from working correctly. </li>
                        <li>The report author has to figure out which field to access as SharePoint stores all list content in a single table with fields named like nvarchar1, nvarchar2 or datetime2, datetime3. </li>
                        <li>The report author has no control over the reliability of the content the report reads, and users can change the fields in lists, breaking reports and providing users with invalid information. </li>
                    </ul>
                    Reflex Reporting solves these problems, by creating a reporting database specifically for reports to read the content. The reporting database is made up of tables that represent the list structures defined in SharePoint and use easy to identify field names (i.e. the same field names the user sees in a list). </div>
                <div className="faq-sb2-title">Why should I choose Reflex Reporting – doesn’t SharePoint web services provide everything I need to produce reports? </div>
                <div className="faq-description">SharePoint web services has the following issues: 

You can’t query content from list instances across a site collection. 

The sorting, grouping, and summing functionality is very limited 

SharePoint web services is very slow to execute because queries must run through XML, web services and then SharePoint before eventually hitting the SQL database and then the data has go back through the same channel again before the report can read it. 

It’s slow to develop because the report author usually needs to manually craft a SOAP request (web service call) in a text editor. (i.e. no designer) 

The report author still has no control over the reliability of the content the report reads, and users can change the fields in lists, breaking reports and providing users with invalid information. 

This solution is not migratable. SSRS does not provide a SharePoint list connector or support SOAP requests to SharePoint Online lists. 

 

Reflex Reporting avoids these problems, by allowing the report to query content directly from a SQL server database, providing all the performance and functions of SQL server (i.e. table indexes, sorting, grouping, summing etc). Virtually all reporting tools provide report authors with an easy to use interface to query SQL server tables and most report authors know and understand how to create a SQL query. </div>
                
                <div className="title faq-sb-title mt-3">
                    PROJECT INTEGRATION ENGINE 
                </div>
                <div className="faq-sb2-title">Why is the Project Integration Engine a better option than hiring a developer? </div>
                <div className="faq-description">Project Server integration has traditionally been done by hiring a software developer to build a custom component using the Project Server PSI to integrate between Project Server and other line of business systems or integration services, e.g. SAP. 
The PSI is a set of web service method calls that only a software developer can leverage, but there are quirks and limitations (eg. only a limited size of change can be uploaded; some elements are managed through simple datasets while others are custom XML strings, add operations must be separated from update operations, it is complicated!). The result is buggy, flaky integration components and a Project Server implementation project that goes way over budget, over time and has limited functionality. More often than not hiring the right developer is rare and the developer finds themselves well out of their comfort zone. 

By wrapping the PSI in a user-friendly interface, the whole process is altogether much more straightforward, cheaper and more reliable than hiring a developer. 

With PIE, integration is simplified and managed by a Project Server Consultant or Administrator. </div>
                


                <div className="title faq-sb-title mt-3">
                    PROJECT SNAPSHOTS 
                </div>
                <div className="faq-sb2-title">Project Server already provides two methods to support time comparison reporting, so what does this tool help with?</div>
                <div className="faq-description">The two Project Server solutions to time comparison reporting are through Baselines and the Archive database. The problem with baselines is there are only 10 slots to snapshot information into and you rely on the users to baseline a project into the right slot and at the right time. Plus, you can’t include information from other business systems or non-project related information (i.e. Custom Fields, or Resource Rates, even if it is stored in Project Server). 

                    The problem with the archive database is that: 
                    <ul>
                        <li>
                            the structure is designed to support backups and not reporting so it’s difficult to create a report from. 
                        </li>
                        <li>
                            it can’t be configured to snapshot only a small set of information or aggregated information. 
                        </li>
                        <li>
                            does not include other systems information. 
                        </li>
                    </ul>
                    Project Snapshots is designed to address these issues specifically. </div>
            </div>
        </div>
    )
}

export default Faq;