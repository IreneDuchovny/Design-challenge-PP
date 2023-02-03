

import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ContactUsBtn } from './contact-us-btn'

export function AppHeader() {

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
                    <ContactUsBtn/>
                </div>
            </nav>
        </header>
    )
}