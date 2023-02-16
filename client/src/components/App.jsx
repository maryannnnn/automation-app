import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './navbar/Navbar'
import './app.scss'
import Registration from './authorization/Registration'
import Login from './authorization/Login'
import {checkAuthAction} from "../actions/authActions"
import ListUsers from './user/ListUsers'
import {useDispatch, useSelector} from 'react-redux'
import Main from "./main/Main";
import Footer from "./footer/Footer";

const App = () => {

    const dispatch = useDispatch()

    const authLoginR = useSelector((state) => state.authLoginR)
    const {isAuth} = authLoginR

    useEffect(() => {

        if (localStorage.getItem('accessToken')) {
            console.log("localStorage.getItem AccessToken", localStorage.getItem('accessToken'))
            dispatch(checkAuthAction())
        }
    }, [dispatch])

    return (
        <div className="app">
            <div className="wrapper">
                <BrowserRouter>
                    <Navbar/>
                    {console.log("isAuth App", isAuth)}
                    {!isAuth &&
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/login" component={Login} />
                    </Switch>
                    }
                    {isAuth &&
                    <Switch>
                        <Route path="/list" component={ListUsers}/>
                    </Switch>
                    }
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
