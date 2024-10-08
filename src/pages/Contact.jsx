import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/fa"; // Use FaTwitter instead of FaXTwitter

export default function Contact(props) {
    return (
        <div className="container">
            <h1>Contact Page</h1>

            <div className="contact-container">
                <div className="left">
                    <ul className="list">
                        <li>
                            <strong>Email</strong>
                            <span>akhilanilvly@gmail.com</span>
                        </li>
                        <li>
                            <strong>Mobile</strong>
                            <span>9072477900</span>
                        </li>
                        <li>
                            <strong>Address</strong>
                            <address>
                                Aneezham H.O<br /> 
                                Valanchery P.O,<br /> 
                                Vaikathoor.<br /> 
                                Malappuram,<br /> 
                                Kerala.<br /> 
                                Pin: 676552
                            </address>
                        </li>
                    </ul>

                    <div className="info">
                        <h3>Social Media Links</h3>
                    </div>
                    <div className="icons">
                        <Link to={"https://github.com/exoticaakhil"} className="link" target="_blank">
                            <FaGithubSquare />
                        </Link>
                        <Link to={"https://www.facebook.com" } className="link" target="_blank">
                            <FaFacebook />
                        </Link>
                        <Link to={"https://x.com/Exotica03957855?t=cNxoDt3dAYThYiPdrxknvg&s=09" } className="link" target="_blank">
                            <FaTwitter />
                        </Link>
                        <Link to={"https://www.linkedin.com/in/akhil-anil-253603262/" } className="link" target="_blank">
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>

                <div className="right">
                    <form autoComplete="off">
                        <fieldset>
                            <legend className="form-title">Contact Me</legend>
                            <div className="input-item">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className="form-input" required />
                            </div>

                            <div className="input-item">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="form-input" required />
                            </div>
                            <div className="input-item">
                                <label htmlFor="msg">Message</label>
                                <textarea name="msg" id="msg" className="form-input" cols={30} rows={6} required></textarea>
                            </div>
                            <div className="input-item">
                                <input type="submit" value="Send" className="btn success" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}