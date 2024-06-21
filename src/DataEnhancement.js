import React, { useState } from 'react';
import './DataEnhancement.css';
import logo from './assets/logo-2-550x123-1.jpg';
import deImage from './assets/de.jpg';
import t1 from './assets/t1.jpg';
import t2 from './assets/t2.jpg';
import t3 from './assets/t3.jpg';

const DataEnhancement = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="top-section">
                <h1 className="data-enhancement-heading">Data Enhancement</h1>
                <h1 className="data-under">Learning Spiral AI &gt;&gt; Data Enhancement</h1>
            </div>

            <div className="navbar">
                <img src={logo} width="192" height="62" alt="Logo" />
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul className={menuOpen ? 'active' : ''}>
                    <li><a className="active" href="#home">Home</a></li>
                    <li className="dropdown">
                        <a href="#services">Our Services</a>
                        <div className="dropdown-content">
                            <a href="#data-annotation">Data Annotation</a>
                            <a href="#data-labeling">Data Labeling</a>
                            <a href="#content-services">Content Services</a>
                            <a href="#nlp">NLP</a>
                            <a href="#data-enhancement">Data Enhancement</a>
                            <a href="#computer-vision">Computer Vision</a>
                            <a href="#lidar-annotation">Lidar Annotation</a>
                            <a href="#digital-publishing">Digital Publishing</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#use-cases">Use Cases</a>
                        <div className="dropdown-content">
                            <a href="#facial-recognition">Facial Recognition</a>
                            <a href="#self-driving-cars">Self-Driving Cars</a>
                            <a href="#drones-satellites">Drones & Satellites</a>
                            <a href="#retail-ecommerce">Retail & E-commerce</a>
                            <a href="#figure-detection">Figure Detection</a>
                            <a href="#video-motion-tracking">Video & Motion Tracking</a>
                            <a href="#sports-annotation">Sports Annotation</a>
                            <a href="#audio-annotation">Audio Annotation</a>
                            <a href="#medical-annotation">Medical Annotation</a>
                        </div>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button className="call-now-button" onClick={() => window.location.href='tel:YOUR_PHONE_NUMBER_HERE'}>Call us now</button></li>
                </ul>
            </div>

            <div className="imagesection">
                <img src={deImage} alt="Image Description" />
                <p className="text-right">To processes used to enhance and improve raw data</p>
                <p className="text-right1">Data enhancement is a general term that refers to processes used to enhance, refine or otherwise improve raw data. Aggregate and arrange critical data and through research complete missing information, enhance competitive analysis.</p>
            </div>

            <div className="threeimagedes">
                <div>
                    <h1>Data Enhancement</h1>
                    <img src={t1} alt="Image 1" className="threeimage" />
                </div>
                <div>
                    <h1>Data Verification</h1>
                    <img src={t2} alt="Image 2" className="threeimage" />
                </div>
                <div>
                    <h1>Data Extraction</h1>
                    <img src={t3} alt="Image 3" className="threeimage" />
                </div>
            </div>

            <div className="footer">
                <div className="footer1">
                    <img src={logo} alt="Logo" />
                    <p>Learning Spiral, Data Labeling company offers qualitative data annotation & data labeling services at scale.</p>
                </div>

                <div className="footer2">
                    <h2>Contact Us</h2>
                    <p>5th floor, 3A, Auckland Rd,<br /> Elgin, Kolkata, West Bengal <br /> 700017</p>
                    <p>+91 722 4061 676</p>
                    <p>humans@learningspiral.ai</p>
                </div>

                <div className="footer3">
                    <p>3rd Floor, Webel IT Park, Taratala Road, Kolkata, West Bengal 700088</p>
                    <p>524 Sunset View DR Davenport, FL 33837</p>
                </div>

                <div className="footer4">
                    <p>501 5th floor, Atlantis the Corporate Park, Telibandha Ring Rd No 1, Raipur, Chhattisgarh 492001</p>
                </div>
            </div>

            <h3>© Copyright 2020 Learning Spiral - All Rights Reserved</h3>
        </div>
    );
};

export default DataEnhancement;
