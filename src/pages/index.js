import React from 'react'
import Dashboard from '../component/Dashboard'
import MainSection from '../component/MainSection'
import Footer from '../component/Footer'
import SideBar from '../component/SideBar'

const Home = () => {
    return (
        <div className="home">
            <SideBar/>
            <MainSection />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default Home
