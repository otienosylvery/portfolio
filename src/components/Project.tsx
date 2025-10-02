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
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=kra.kesra.bdm.kesramobile&pcampaignid=web_share" target="_blank" rel="noreferrer"><img src={kesra_android} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=kra.kesra.bdm.kesramobile&pcampaignid=web_share" target="_blank" rel="noreferrer"><h2>KESRA Mobile App</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=ke.go.kra.mobileworkspace&pcampaignid=web_share" target="_blank" rel="noreferrer"><img src={staff_app} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=ke.go.kra.mobileworkspace&pcampaignid=web_share" target="_blank" rel="noreferrer"><h2>KRA Staff App</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.kra.go.ke/" target="_blank" rel="noreferrer"><img src={kra_web} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.kra.go.ke/" target="_blank" rel="noreferrer"><h2>KRA Website</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="https://unicool.co.ke/" target="_blank" rel="noreferrer"><img src={unicool_web} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://unicool.co.ke/" target="_blank" rel="noreferrer"><h2>Unicool Website</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.kra.mservices&pcampaignid=web_share" target="_blank" rel="noreferrer"><img src={m_service_app} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.kra.mservices&pcampaignid=web_share" target="_blank" rel="noreferrer"><h2>KRA M-Service App</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;