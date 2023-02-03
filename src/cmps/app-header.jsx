import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'

import { ReactComponent as Logo } from "../assets/img/logo.svg";

export function AppHeader() {
    // const user = useSelector(storeState => storeState.userModule.user)

    // async function onLogin(credentials) {
    //     try {
    //         const user = await login(credentials)
    //         showSuccessMsg(`Welcome: ${user.fullname}`)
    //     } catch (err) {
    //         showErrorMsg('Cannot login')
    //     }
    // }
    // async function onSignup(credentials) {
    //     try {
    //         const user = await signup(credentials)
    //         showSuccessMsg(`Welcome new user: ${user.fullname}`)
    //     } catch (err) {
    //         showErrorMsg('Cannot signup')
    //     }
    // }
    // async function onLogout() {
    //     try {
    //         await logout()
    //         showSuccessMsg(`Bye now`)
    //     } catch (err) {
    //         showErrorMsg('Cannot logout')
    //     }
    // }

    return (
        <header className="app-header main-container flex">
            <nav>
                {/* {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)} */}
                <div className="main-header-container flex space-between">
                    <div className="main-logo-nav-container flex space-between">
                        <div className="header-logo"> <Logo /> </div>
                        <div className="about-home-container  flex row space-between">
                            <div className="header-about fs18">  about </div>
                            <div className="header-home fs18">   home</div>
                        </div>
                    </div>
                    <div className="contact-me-btn  flex end fs18">
                        <span className="contact-text">
                        contact me</span></div>
                </div>
                {/* {user &&
                    <span className="user-info">
                        <Link to={`user/${user._id}`}>
                            {user.imgUrl && <img src={user.imgUrl} />}
                            {user.fullname}
                        </Link>
                        <span className="score">{user.score?.toLocaleString()}</span>
                        <button onClick={onLogout}>Logout</button>
                    </span>
                } */}
                {/* {!user &&
                    <section className="user-info">
                        <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                    </section>
                } */}
            </nav>
        
        </header>
    )
}