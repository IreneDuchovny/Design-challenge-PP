
import { ReactComponent as IconPerson } from "../assets/img/icon-person.svg";
import { ReactComponent as IconCog } from "../assets/img/icon-cog.svg";
import { ReactComponent as IconChart } from "../assets/img/icon-person.svg";

export function HomeMiddleSection() {
    const messages = [{
        img: <IconPerson/>,
        topText: 'Experienced Individuals',
        bottomText: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
    },
    {
        img: <IconCog/>,
        topText: 'Easy to Implement',
        bottomText: 'Our processes have been refined over years of implementation meaning our teams always deliver.'
    },
    {
        img: <IconChart/>,
        topText: 'Enhanced Productivity',
        bottomText: 'Our customized platform with in-built analytics helps you manage your distributed teams.'
    }
    ]

    return (
        <div className="home-middle-section-container full main-container">
            <div className="main-contenier-middle-page flex row space-between">
                <div className="main-header-middle-section flex  ">
                    Build & manage distributed teams like no one else.
                </div>
                <div className="main-text flex column">
                    {messages.map((message, idx) => {
                        return <div key={idx} className="main-content-middle-section flex row ">
                            <div className="img-circle-logo">{message.img}</div>
                            <div className="right-main-text-container">
                                <div className="top-text">{message.topText}</div>
                                <div className="bottom-text">{message.bottomText}</div>
                            </div>
                        </div>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}