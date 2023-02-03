import { ReactComponent as PinkRightCircle } from "../assets/img/bg-pattern-home-6-about-5.svg";
import {ContactUsBtn} from './contact-us-btn.jsx'

export function HomePinkBottom() {
    return (
        <div className="main-pink-container full">
            <div className="home-pink-bottom-container main-container ">
                <div className="main-pink flex row space-between">
                    {/* <div className="circle-right-pink full"><PinkRightCircle/></div> */}
                    <div className="home-pink-bottom-header">Ready to get started?</div>
                    <div className="contact-us-btn-pink flex end"><ContactUsBtn/></div>
                </div>
            </div>
        </div>
    )
}