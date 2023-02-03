import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import logo from '../assets/img/logo.png'
// import { CHANGE_COUNT } from '../store/user.reducer'
import { HomeTopSection } from '../cmps/home-top-section'
import { HomeMiddleSection } from '../cmps/home-middle-section'
import { HomeLastSection } from '../cmps/home-last-section'


export function HomePage() {
    // const dispatch = useDispatch()
    // const count = useSelector(storeState => storeState.userModule.count)

    // function changeCount(diff) {
    //     console.log('Changing count by:', diff);
    //     dispatch({ type: CHANGE_COUNT, diff })
    // }

    return (
        
        <section className="main-homepage-container ">
            <HomeTopSection />
            <HomeMiddleSection/>
            <HomeLastSection/>
            {/* <img src={logo} alt="Logo" style={{ maxWidth: '300px' }} /> */}

        </section >
    )
}