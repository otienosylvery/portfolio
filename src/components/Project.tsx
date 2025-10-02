import React from "react";
import kesra_web from '../assets/images/kesra_web.png'
import kesra_android from '../assets/images/kesra_android.png'
import staff_app from '../assets/images/staff_app.png'
import kra_web from '../assets/images/kra_web.png'
import unicool_web from '../assets/images/unicool_web.png'
import m_service_app from '../assets/images/m_service_app.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.kesra.ac.ke/" target="_blank" rel="noreferrer"><img src={kesra_web} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.kesra.ac.ke/" target="_blank" rel="noreferrer"><h2>KESRA Website</h2></a>
                <p>Developed The Kenya Revenue Authority (KRA) website that serves as the central hub for individuals and businesses in Kenya to fulfill their tax obligations and interact with the revenue authority digitally.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=kra.kesra.bdm.kesramobile&pcampaignid=web_share" target="_blank" rel="noreferrer"><img src={kesra_android} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=kra.kesra.bdm.kesramobile&pcampaignid=web_share" target="_blank" rel="noreferrer"><h2>KESRA Mobile App</h2></a>
                <p>Developed the KESRA Mobile App. An educational tool designed for current and prospective students who want to study tax, customs, and fiscal management. Offered by The Kenya School Of Revenue Administration.
                    This is available on Google Play Store.
                </p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=ke.go.kra.mobileworkspace&pcampaignid=web_share" target="_blank" rel="noreferrer"><img src={staff_app} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=ke.go.kra.mobileworkspace&pcampaignid=web_share" target="_blank" rel="noreferrer"><h2>KRA Staff App</h2></a>
                <p>Built using Kotlin, this application is designed specifically for KRA employees to enjoy the convenience of mobile telephony in their work duties.</p>
            </div>
            <div className="project">
                <a href="https://www.kra.go.ke/" target="_blank" rel="noreferrer"><img src={kra_web} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.kra.go.ke/" target="_blank" rel="noreferrer"><h2>KRA Website</h2></a>
                <p>The Kenya Revenue Authority (KRA) website, which is built around its iTax platform, offers a comprehensive suite of online services for taxpayers and the public, primarily related to tax and customs administration.
                     The website also contains news, updates, press releases, tutorials, and career opportunities at KRA.
                </p>
            </div>
            <div className="project">
                <a href="https://unicool.co.ke/" target="_blank" rel="noreferrer"><img src={unicool_web} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://unicool.co.ke/" target="_blank" rel="noreferrer"><h2>Unicool Website</h2></a>
                <p>Unicool International Limited offers proffesional cooling solutions for businesses. The website allows prospective customers to reach out to Unicool for enquires and service bookings.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.kra.mservices&pcampaignid=web_share" target="_blank" rel="noreferrer"><img src={m_service_app} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.kra.mservices&pcampaignid=web_share" target="_blank" rel="noreferrer"><h2>KRA M-Service App</h2></a>
                <p>Developer using Kotlin, the KRA M-Service App streamlines tax compliance by putting essential filing, payment, and verification services directly on your mobile device.
                    This application is available on Google Play Store.

</p>
            </div>
        </div>
    </div>
    );
}

export default Project;