import React, {useEffect} from "react";
import mainBack from '../../assets/images/82247c59afc5287da5d4200cc85bef0f.webp';
import {Link} from 'react-router-dom';

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="main">
            <div className='online-container'>
                <img src={mainBack} alt="mainBack" className='main-back' />
                <div className='centered'>
                    <p className="sup-policy-top">LEGAL
                    </p>
                    <p className='title online-title'>PRIVACY POLICY</p>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="sp-title">What information do we collect? </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">We collect information from you when you register on our site, place an order, respond to a survey or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address or phone number. You may, however, visit our site anonymously.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">What do we use your information for? </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">
                            Any of the information we collect from you may be used in one of the following ways: 
                               <ul>
                                   <li>
                                        To improve our website
                                   </li>
                                   (we continually strive to improve our website offerings based on the information and feedback we receive from you)
                                   <li>
                                        To improve customer service
                                   </li>
                                   (your information helps us to more effectively respond to your customer service requests and support needs)
                                   <li>
                                        To process transactions
                                   </li>
                                   Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.
                                   <li>
                                        To send periodic emails
                                   </li>
                                   The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.

Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
                                </ul> 
                                
                       </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">How do we protect your information? </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. 

We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to?keep the information confidential.

After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.</div>
                    </div>


                    <div className="col-md-9">
                        <div className="sp-title">Do we use cookies? </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information

We use cookies to help us remember and process the items in your shopping cart and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.

If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly. However, you can still place orders by contacting customer service.</div>
                    </div>



                    <div className="col-md-9">
                        <div className="sp-title">Do we disclose any information to outside parties? </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">Third party links </div>
                    </div>

                    <div className="col-md-9">
                        <div className="sp-desc">Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">California Online Privacy Protection Act Compliance</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">Childrens Online Privacy Protection Act Compliance </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">Your Consent </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">By using our site, you consent to our privacy policy.</div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-title">Changes to our Privacy Policy </div>
                    </div>
                    <div className="col-md-9">
                        <div className="sp-desc">If we decide to change our privacy policy, we will post those changes on this page. 

If you have any questions or issues please <Link to='/contact'> contact us.</Link> </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Privacy;