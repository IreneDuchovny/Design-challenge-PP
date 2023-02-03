

// import logo from '../assets/img/bg-pattern-home-2.svg'
import { ReactComponent as BottomCircles } from "../assets/img/bg-pattern-home-2.svg";
import { ReactComponent as SideCircles } from "../assets/img/bg-pattern-home-1.svg";
export function HomeTopSection() {
    return (

        <div className="main-with-circle column">
            <div className="home-top-section-container flex row">
                {/* <div className="side-circles full  ">
                <SideCircles/></div> */}
                <div className="main-header-top-section flex column ">
                    <span> Find the </span> <div className="best-tallent">best<span className="best-talent">  talent</span></div></div>
                <div className="line-text-top flex column">
                    <div className="top-line"></div>

                    <div className="main-content-section ">
                        Finding the right people and building high performing teams can be hard. Most companies aren't
                        tapping into the abundance of global talent. We're about to change that.
                    </div>
                </div>
            </div>
            <div className="bottom-circles flex  end">
                <BottomCircles /></div>
        </div>

    )
}


