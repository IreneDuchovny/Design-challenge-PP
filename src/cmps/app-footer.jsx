

import { ReactComponent as Logo } from "../assets/img/logo.svg";

import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import pinterest from '../assets/img/pinterest.png'

export function AppFooter() {

    const addressLines =
        [
            "987  Hillcrest Lane",
            "Irvine, CA",
            "California 92714",
            "Call Us: 949-833-7432"
        ]
    return (
        <footer className="app-footer main-container">
            <div className="footer-main-container flex space-between">
                <div className="header-adress-footer flex row space-evenly">
                    <div className="logo-home-section flex column ">
                        <div className="header-footer"><Logo /></div>
                        <div className="home-about-footer flex row">
                            <div className="about-footer">about</div>
                            <div className="home-footer">home</div>
                        </div>
                    </div>
                    <div className="adress-container-footer flex column">
                        {addressLines.map(line => <div className="address-line-footer">{line}</div>)}
                    </div>
                </div>
                <div className="social-footer flex column">
                    <div className="social-icons flex row end">
                        <div className="facebook-icon-footer">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="pinterest-icon-footer">
                            <img src={pinterest} alt="facebook" />
                        </div>
                        <div className="twitter-icon-footer">
                            <img src={twitter} alt="facebook" />
                        </div>


                    </div>
                    <div className="copyright-footer"> Copyright 2020. All Rights Reserved </div>
                </div>


            </div>
        </footer>
    )
}