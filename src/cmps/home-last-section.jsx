import { ReactComponent as Quate } from "../assets/img/icon-quotes.svg"
import Kady from '../assets/img/avatar-kady.jpg'
import Aiysha from '../assets/img/avatar-aiysha.jpg'
import Arthur from '../assets/img/avatar-arthur.jpg'
import { ReactComponent as LastRightCircle } from "../assets/img/bg-pattern-home-5.svg"
import { ReactComponent as LastLeftCircle } from "../assets/img/bg-pattern-home-4-about-3.svg"

export function HomeLastSection() {

    const quates = [{
        img: <Quate />,
        quate: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
        profileName: 'Kady Baker',
        profileImg: Kady
    },
    {
        img: <Quate />,
        quate: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
        profileName: 'Aiysha Reese',
        profileImg: Aiysha
    },
    {
        img: <Quate />,
        quate: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
        profileName: 'Arthur Clarke',
        profileImg: Arthur
    }
    ]

    return (
        <div className="home-last-section-main-container flex column main-container">
            <div className="left-full-icon full flex start"><LastLeftCircle /></div>
            <div className="content-last-header-container">Delivering real results for top companies. Some of our
                <span className="header-span"> success stories.</span></div>
            <div className="quates-container flex row">
                {quates.map((quate, idx) => {
                    return <div key={idx} className="quate-container flex column">
                        <div className="quate-img">{quate.img}</div>
                        <div className="quate-section">{quate.quate}</div>
                        <div className="profile-name">{quate.profileName}</div>
                        <div className="profile-quate-round-img"><img src={`${quate.profileImg}`} /></div>
                    </div>
                }
                )}
            </div>
            <div className="right-full-icon full flex end"><LastRightCircle /></div>
        </div>

    )

}