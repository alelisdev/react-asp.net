import React from "react";
import capterra from '../../assets/images/sample_review_badge-22f0d57b3a566895df95.webp';

function Carousel() {
    return(
        <div id="robotcarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#robotcarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#robotcarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#robotcarousel" data-bs-slide-to="2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#robotcarousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block online-carousel-title">
                        <h5>Simon Newton | Parker-Newton</h5>
                    </div>
                    <div className="online-carousel-text">
                        <div className="text-center">
                            <h2 className='text-center'>“ThorApps products have consistently delighted our customers; simplicity in design, installation, and configuration belies the powerful nature of the apps and their overwhelming positive impact for the business.”</h2>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="online-carousel-card">
                            <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <div className="capterra">
                            <img src={capterra} alt='capterra' />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block online-carousel-title">
                        <h5>Laith Adel | EPM Partners</h5>
                    </div>
                    <div className="online-carousel-text">
                        <div className="text-center">
                            <h2 className='text-center'>“Reflex Reporting from ThorApps has enabled us to provide our customers with reliable and fast reports in a fraction of the time it used to take.”</h2>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="online-carousel-card">
                            <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <div className="capterra">
                            <img src={capterra} alt='capterra' />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block online-carousel-title">
                        <h5>Ali Sabouri | IMPAQ International, LLC</h5>
                    </div>
                    <div className="online-carousel-text">
                        <div className="text-center">
                            <h2 className='text-center'>"Easy to use. Top customer support.Improving quickly."</h2>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="online-carousel-card">
                            <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <div className="capterra">
                            <img src={capterra} alt='capterra' />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block online-carousel-title">
                        <h5>Mariano M. | Boston Scientific</h5>
                    </div>
                    <div className="online-carousel-text">
                        <div className="text-center">
                            <h2 className='text-center'>"Great App! Easy to use and super user friendly for admins."</h2>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="online-carousel-card">
                            <p className="pt-5 pb-3 text-white text-center border-bottom">WHAT PEOPLE SAY</p>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <div className="capterra">
                            <img src={capterra} alt='capterra' />
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
    )
}

export default Carousel;