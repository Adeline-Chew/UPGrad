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
    SkillText,
    CardTitle,
    CardText,
    ProImgWrap,
    TopContainer,
    AboutContainer,
    ContactContainer,
    EndorsedContainer,
    DetailsH6,
    DetailsDes,
    ProfileButton,
    ProfileName,
    ProfileSum
} from "../component/ProfilePage/ProfileElem";

import Monash from "../images/monash.jpeg";
import HighSchool from "../images/high-school.jpeg";
import GoogleLogo from "../images/google.jpeg";
import AppLab from "../images/applabs.jpeg";

import Boy from "../images/boy-5.svg"
import '../component/ProfilePage/styles.css';


const styles = {
    button: {
        color: "#000000",
        backgroundColor: "#FED988",
        borderColor: "#FED988",
        marginLeft: "5px",
    }
};

const Profile = () => {
    return (
        <>
            <ProfileContainer>
                <ProfileLeft>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img style={{marginBottom:'-80px'}}
                                    src={Boy}
                                    alt="Admin"
                                    className="rounded-circle"
                                    width={150}
                                />
                                <div className="mt-3">
                                    <ProfileName>John Doe</ProfileName>
                                    <ProfileSum className="text-secondary mb-1">Full Stack Developer</ProfileSum>
                                    <ProfileSum className="text-muted font-size-sm">Subang Jaya, Selengor, Malaysia</ProfileSum>
                                    <ProfileButton className="btn btn-outline-primary">Follow</ProfileButton>
                                    <ProfileButton className="btn btn-outline-primary">Message</ProfileButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{padding: "20px"}}></div>        
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Full Name</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    John Doe
                                </DetailsDes>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Email</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    abc@mail.co.kk
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Phone</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    +6019-98765432
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Mobile</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    +6012-3456789
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Address</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    Subang Jaya, Selengor, Malaysia
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-12">
                                    <a
                                        className="btn btn-info "
                                        target="__blank"
                                        href="/"
                                        style={{backgroundColor: '#FED988', borderColor: '#FED988',color: '#000000'}}
                                    >
                                        Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ProfileLeft>

                <ProfileRight>
                    <ProfileRightH1 style={{ marginTop: "20px" }}>
                        Work Experience
                    </ProfileRightH1>
                    <ProfileCardWrapper className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={GoogleLogo} alt='work1' style={{width: '100%', height: '120px'}}/>
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
                            <img src={HighSchool} alt='work1' style={{width: '100%', height: '120px'}}/>
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
                            <img src={Monash} alt='work1' style={{width: '100%', height: '120px'}}/>
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
        </>
    );
};

export default Profile;
