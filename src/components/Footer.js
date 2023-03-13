import "./Footer.css"
import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight : "2rem" }} />
                    <div>
                        <p>Damodar Niwas, Ambegaon Khurd</p>
                        <p>Pune</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight : "2rem" }} />
                +91 9370075983</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight : "2rem" }} />
                vgadhave411@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Vaishnavi Gadhave. I am a student. I enjoy designing new projects and design challenges.</p>
                <div className="social">
                <FaTwitter size={30} style={{color:"#fff", marginRight : "2rem" }} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight : "2rem" }} />
                <FaInstagram size={30} style={{color:"#fff", marginRight : "2rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer