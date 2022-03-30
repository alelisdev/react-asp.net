import React from "react";
import Contact from "../../components/Contact";

function ContactPage() {
    const data = {
        toptitle: 'Contact Us',
        title: 'Get in touch to request a quote or learn more about our apps',
    }

    return (
        <div className="main quote-container">
            <Contact className="mt-5" propsdata={data}/>
        </div>
    )
}

export default ContactPage;