import "./offer.scss"
import Bring from '../../../assets/img/bring.svg'
import Make from '../../../assets/img/make.svg'
import Build from '../../../assets/img/build.svg'
import Arrow from '../../../assets/img/strelka.svg'
import {NavLink} from 'react-router-dom';

const Offer = () => {
    return (
        <div className="offer">
            <div className="container">
                <div className="offer__inner">
                    <div className="offer__modules">
                        <h2 className="offer__modules-item--title">
                            What we do to help our client grow
                        </h2>
                        <div className="offer__modules-item">
                            <div className="offer__modules-item--img-wrapper">
                                <img
                                    src={Bring}
                                    alt="Bring Technology"
                                    className="offer__modules-item--img"
                                />
                            </div>

                            <h3 className="offer__modules-item--title-inside">
                                Bring Technology To Your Comfortable Home
                            </h3>
                            <p className="offer__modules-item--text">
                                Many tech products are easy to install on your own, while
                                others require a professional.
                            </p>
                            <NavLink to="#" className="offer__modules-item--link">
                    <span className="offer__modules-item--link-text">
                      Learn more
                    </span>
                                <img
                                    src={Arrow}
                                    alt="str"
                                    className="offer__modules-item--link-img"
                                />
                            </NavLink>
                        </div>
                        <div className="offer__modules-item">
                            <div className="offer__modules-item--img-wrapper">
                                <img
                                    src={Make}
                                    alt="Bring Technology"
                                    className="offer__modules-item--img"
                                />
                            </div>
                            <h3 className="offer__modules-item--title-inside">
                                Make Your business To Be Better
                            </h3>
                            <p className="offer__modules-item--text">
                                We've compiled a list of the top tips to improve your
                                business. Consider it your checklist for maintaining a
                                successful business.
                            </p>
                            <NavLink to="#" className="offer__modules-item--link">
                    <span className="offer__modules-item--link-text">
                      Learn more
                    </span>
                                <img
                                    src={Arrow}
                                    alt="str"
                                    className="offer__modules-item--link-img"
                                />
                            </NavLink>
                        </div>
                        <div className="offer__modules-item--empty"></div>
                        <div className="offer__modules-item">
                            <div className="offer__modules-item--img-wrapper">
                                <img
                                    src={Build}
                                    alt="Bring Technology"
                                    className="offer__modules-item--img"
                                />
                            </div>
                            <h3 className="offer__modules-item--title-inside">
                                Build Your Digital Product
                            </h3>
                            <p className="offer__modules-item--text">
                                A successful new product launch can provide the company with
                                tremendous benefits!
                            </p>
                            <NavLink to="#" className="offer__modules-item--link">
                    <span className="offer__modules-item--link-text">
                      Learn more
                    </span>
                                <img
                                    src={Arrow}
                                    alt="str"
                                    className="offer__modules-item--link-img"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;