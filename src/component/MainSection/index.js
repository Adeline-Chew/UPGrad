import React from 'react'
import BackgroundVideo from '../../videos/summit.mp4'
import {
    MainContainer,
    MainBg,
    VideoBg,
    MainContent,
    MainH1,
    MainH2,
} from './MainSectionElem'

const MainSection = () => {

    return (
        <>
            <MainContainer id='home'>
                <MainBg>
                    <VideoBg autoPlay loop muted src={BackgroundVideo} type='video/mp4' controls controlsList="nodownload"/>
                </MainBg>
                <MainContent>
                    {/* <MainH1>UPGRAD</MainH1> */}
                    <MainH1>Reaching for the summit</MainH1>
                    {/* <MainP>Scroll Down</MainP> */}
                    <MainH2>
                    Leading you to your dream jobs
                    </MainH2>
                    {/* <MainP>Scroll Down</MainP>
                    <MobileIcon>
                        <BsChevronDown />    
                    </MobileIcon> */}
                </MainContent>
            </MainContainer>
        </>
    )
}

export default MainSection
