import "./footer.scss"
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__top-info">
                            <h2 className="footer__top-title">
                                Interested to work with our team?
                            </h2>
                            <p className="footer__top-text">
                                When companies provide their employees with great job benefits
                                it increases employee dedication and loyalty. This can mean
                                less employee turnover and churn.
                            </p>
                        </div>
                        <button className="footer__top-btn">Let’s Talk</button>
                    </div>
                    <div className="footer__line"></div>
                    <div className="footer__bottom">
                        <div className="footer__bottom--column">
                            <ul className="footer__bottom--contact">
                                <li className="footer__bottom--contact-logo">
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="footer__bottom--contact-img"
                                    />
                                    <h3 className="footer__bottom--contact-name">Automation</h3>
                                </li>
                                <li className="footer__bottom--contact-item">
                                    A. Israel, Haifa, str. Ben David 23, office 112
                                </li>
                                <li className="footer__bottom--contact-item">
                                    T.+62-812-7313-4321
                                </li>
                                <li className="footer__bottom--contact-item">
                                    E. hello.afrian@gmail.com
                                </li>
                            </ul>
                            <ul className="footer__bottom--menu">
                                <li className="footer__bottom--menu-title">About US</li>
                                <li className="footer__bottom--menu-item">
                                    <NavLink to="#" className="footer__bottom--menu-link">About</NavLink>
                                </li>
                                <li className="footer__bottom--menu-item">
                                    <NavLink to="#" className="footer__bottom--menu-link">What We Do</NavLink>
                                </li>
                                <li className="footer__bottom--menu-item">
                                    <NavLink to="#" className="footer__bottom--menu-link">Project</NavLink>
                                </li>
                                <li className="footer__bottom--menu-item">
                                    <NavLink to="#" className="footer__bottom--menu-link"
                                    >How It Work With Us</NavLink
                                    >
                                </li>
                            </ul>
                            <ul className="footer__bottom--social">
                                <li className="footer__bottom--social-title">Follow US</li>
                                <li className="footer__bottom--social-item">
                                    <NavLink to="#" className="footer__bottom--social-link"
                                    >Instagram</NavLink
                                    >
                                </li>
                                <li className="footer__bottom--social-item">
                                    <NavLink to="#" className="footer__bottom--social-link">Facebook</NavLink>
                                </li>
                                <li className="footer__bottom--social-item">
                                    <NavLink to="#" className="footer__bottom--social-link">LinkedIn</NavLink>
                                </li>
                                <li className="footer__bottom--social-item">
                                    <NavLink to="#" className="footer__bottom--social-link">Youtube</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        2022 © Automation. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;