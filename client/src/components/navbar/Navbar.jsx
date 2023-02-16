import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.scss'
import Logo from '../../assets/img/logo.svg'
import {logout} from '../../actions/authActions'
import {useSelector, useDispatch} from 'react-redux'

const Navbar = () => {
    const authLoginR = useSelector((state) => state.authLoginR)
    const {isAuth} = authLoginR

    const dispatch = useDispatch()

    const submitHandlerLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar__inner">
                    <div className="navbar__top">
                        <div className="navbar__top-logo">
                            <NavLink to="/" className="navbar__logo-link">
                                <img src={Logo} className="navbar__logo-img" alt="Logo"/>
                            </NavLink>
                        </div>
                        <nav className="navbar__menu">
                            <ul className="navbar__menu-list">
                                <div className="navbar__menu-item">
                                    <NavLink className="navbar__menu-link" to="#">Products</NavLink>
                                </div>
                                <li className="navbar__menu-item">
                                    <NavLink className="navbar__menu-link" to="#">Solutions</NavLink>
                                </li>
                                <li className="navbar__menu-item">
                                    <NavLink className="navbar__menu-link" to="#">Pricing</NavLink>
                                </li>
                                <li className="navbar__menu-item">
                                    <NavLink className="navbar__menu-link" to="#">Blog</NavLink>
                                </li>
                                <li className="navbar__menu-item">
                                    <NavLink className="header__menu-link" to="#">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="navbar__sign">
                            <div className="navbar__sign-item">
                                {!isAuth && <NavLink className="navbar__sign-link" to="/login">Sign-in</NavLink>}
                            </div>
                            <div className="navbar__registration">
                                {!isAuth && <NavLink to="/registration">
                                    <button className="navbar__sign-btn">Registration</button>
                                </NavLink>}

                            </div>
                            {isAuth && <div className="navbar__login"><NavLink to="/list">Users list</NavLink></div>}
                            {isAuth && <div className="navbar__login" onClick={submitHandlerLogout}>Logout</div>}
                            {/*<button className="header__burger-btn">*/}
                            {/*    <img*/}
                            {/*        className="header__burger-img"*/}
                            {/*        src="../../assets/img/burger.svg"*/}
                            {/*        alt="icon_burger"*/}
                            {/*    />*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar