import React from "react";
import {
    ProfileContainer,
    ProfileLeft,
    ProfileRight,
    ProfileRightH1,
    ProfileCardWrapper,
    ProfileCardWrapper2,
    SkillsWrapper,
    SkillsContainer,
    CardTitle,
    CardText
} from "../component/ProfilePage/ProfileElem";
import {ProfileInformation} from "../component/ProfilePage/ProfileInformation"
import Monash from "../images/monash.jpeg";
import HighSchool from "../images/high-school.jpeg";
import GoogleLogo from "../images/google.jpeg";
import AppLab from "../images/applabs.jpeg";
import Footer from "../component/Footer"

import '../component/ProfilePage/styles.css';
import SideBar from "../component/SideBar";

const Profile = () => {
    return (
        <>
        <SideBar />
            <ProfileContainer>
                <ProfileLeft>
                    <ProfileInformation></ProfileInformation>
                </ProfileLeft>

                <ProfileRight>
                    <ProfileRightH1 style={{ marginTop: "20px" }}>
                        Work Experience
                    </ProfileRightH1>
                    <ProfileCardWrapper className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={GoogleLogo} alt='work1' style={{width: '100%', height: '100%'}}/>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <CardTitle className="card-title">
                                        Data Science Intern 
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Google <br /> Jan 2019 - Apr 2019
                                    </CardText>
                                </div>
                            </div>
                        </div>
                    </ProfileCardWrapper>

                    <ProfileCardWrapper className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={AppLab} alt='work1' style={{width: '100%', height: '120px'}}/>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <CardTitle className="card-title">
                                        Software Engineer Intern
                                    </CardTitle>
                                    <CardText className="card-text">
                                        App Lab Co. <br /> Jun 2019 - Oct 2019
                                    </CardText>
                                </div>
                            </div>
                        </div>
                    </ProfileCardWrapper>

                    <ProfileRightH1 style={{ marginTop: "40px" }}>
                        Education
                    </ProfileRightH1>

                    <ProfileCardWrapper2 className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={HighSchool} alt='work1' style={{width: '100%', height: '100%'}}/>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <CardTitle className="card-title">
                                        SMK Sekolah Tinggi
                                    </CardTitle>
                                    <CardText className="card-text">
                                        High School <br /> Jan 2013 - Dec 2018
                                    </CardText>
                                </div>
                            </div>
                        </div>
                    </ProfileCardWrapper2>

                    <ProfileCardWrapper2 className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={Monash} alt='work1' style={{width: '100%', height: '100%'}}/>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <CardTitle className="card-title">
                                        Monash University
                                    </CardTitle>
                                    <CardText className="card-text">
                                        Bachelor of Computer Science <br /> Oct 2019
                                        - Present
                                    </CardText>
                                </div>
                            </div>
                        </div>
                    </ProfileCardWrapper2>

                    <ProfileRightH1 style={{ marginTop: "30px" }}>
                        Skills
                    </ProfileRightH1>

                    <SkillsContainer>
                        <SkillsWrapper>Python</SkillsWrapper>
                        <SkillsWrapper>Java</SkillsWrapper>
                        <SkillsWrapper>JavaScript</SkillsWrapper>
                    </SkillsContainer>
                </ProfileRight>
            </ProfileContainer>
            <Footer />
        </>
        
    );
};

export default Profile;
