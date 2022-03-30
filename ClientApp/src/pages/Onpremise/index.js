import React, { useEffect, useRef } from 'react'
import header from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import pic1 from '../../assets/images/Computer with Graph.webp';
import pic2 from '../../assets/images/Business Meeting.webp';
import pic3 from '../../assets/images/helloquence-5fNmWej4tAA-unsplash.webp';
import Quote from "../../components/Quote";

function Onpremise() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const quoteRef = useRef(null)

    const scrollToQuote = () => {
        quoteRef.current.scrollIntoView({ behavior: "smooth" })
    }
    return(
        <div className='main'>
        <div className='online-container'>
            <img src={header} alt="mainBack" className='main-back' />
            <div className='centered'>
                <p className='title online-title'>ON-PREMISE APPS</p>
                <h5><span>Make the most from your SharePoint and Project environment</span></h5>
                <button className='btn quote-btn text-white' onClick={scrollToQuote}>Request a Quote</button>
            </div>
        </div>
        <div className='container'>
            <div className='row showcase mt-5'>
                <div className='col-md-4'>
                    <div className='container'>
                        <div className='image-container d-flex justify-content-center'>
                        <button className='btn btn-primary btn-snapshort'>PROJECT INTEGRATION ENGINE</button>
                            <img src={pic1} alt='not found' className='mb-4 premise-showcase-image' />
                        </div>
                        <div className='text-center'>
                            <span className='showcase-title'>Project server integration in minutes, not weeks!</span>
                        </div>
                        <div>
                            <p className='text-center showcase-content'>
                            The Project Integration Engine (PIE for short) makes it easy to integrate other systems data into Project Server. Create Projects, Tasks, Resources, Assignments (and more) and keep them in sync with your other systems</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='container'>
                        <div className='image-container d-flex justify-content-center'>
                        <button className='btn btn-primary btn-snapshort'>PROJECT SNAPSHOTS</button>
                            <img src={pic2} alt='not found' className='mb-4 premise-showcase-image' />
                        </div>
                        <div className='text-center'>
                            <span className='showcase-title'>Snapshot your project now or on a schedule</span>
                        </div>
                        <div>
                            <p className='text-center showcase-content'>
                            Take a Snapshot of your Project as it is at a point in time. Not just the information stored in Project Server, Project Snapshots lets you take snapshots of all information related to your project even from other Line of Business systems.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='container'>
                        <div className='image-container d-flex justify-content-center'>
                        <button className='btn btn-primary btn-snapshort'>REFLEX REPORTING</button>
                            <img src={pic3} alt='not found' className='mb-4 premise-showcase-image' />
                        </div>
                        <div className='text-center'>
                            <span className='showcase-title'>Multi-site,real-time SharePoint reporting </span>
                        </div>
                        <div>
                            <p className='text-center showcase-content'>
                            Reflex Reporting makes it easy to produce reports from content in your SharePoint lists. The core function of Reflex Reporting mirrors SharePoint List items into a SQL table in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="quote-container" ref={quoteRef}>
            <Quote />
        </div>
    </div>
    )
}

export default Onpremise;