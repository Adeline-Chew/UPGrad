import React from "react";
import "./PopUp.css";
import styled from 'styled-components';
import Resume from "../../images/resume-c.jpg"
import Boy1 from "../../images/boy.svg"
import {FaTimes} from 'react-icons/fa'

const PopUpWrap = styled.div `
    width: 100%;
    height: 80%;
`

const PopUp = (props) => {
    return props.trigger ? (
        <div className="popup">
            
            <PopUpWrap className="popup-inner">
            <button
                    onClick={() => props.setTrigger(false)}
                    className="close-btn"
                >
                    <i>
                        <FaTimes />
                    </i>
                </button>
                {props.children}
                <>
                    <link
                        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                        rel="stylesheet"
                    />
                    <div className="popcontainer" style={{marginTop: "20px"}}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="post-content">
                                    <img
                                        src={Resume}
                                        alt="post"
                                        style={{height: "50%"}}
                                        className="img-responsive post-image"
                                    />
                                    <div className="post-container">
                                        <img
                                            src={Boy1}
                                            alt="user"
                                            className="profile-photo-md pull-left"
                                        />
                                        <div className="post-detail">
                                            <div className="user-info">
                                                <h5>
                                                    <a
                                                        href="timeline.html"
                                                        className="profile-link"
                                                    >
                                                        Alex Tan
                                                    </a>{" "}
                                                </h5>
                                                <p className="text-muted">
                                                    Published a photo about 3
                                                    mins ago
                                                </p>
                                            </div>
                                            <div className="reaction">
                                                <button className="btn text-green">
                                                    <i className="fa fa-thumbs-up" />{" "}
                                                    13
                                                </button>
                                                <button className="btn text-red">
                                                    <i className="fa fa-thumbs-down" />{" "}
                                                    0
                                                </button>
                                            </div>
                                            <div className="line-divider" />
                                            <div className="post-text">
                                                <p>
                                                    I'm Planning to apply for internship on October but I have no idea how to draft my resume.
                                                    I don't have much accomplishment and working experience. Can someone help me to get started?{" "}
                                                    <i className="em em-anguished" />{" "}
                                                    <i className="em em-anguished" />{" "}
                                                    <i className="em em-anguished" />
                                                </p>
                                            </div>
                                            <div className="line-divider" />
                                            <div className="post-comment">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                    alt="profile"
                                                    className="profile-photo-sm"
                                                />
                                                <p>
                                                    <a
                                                        href="timeline.html"
                                                        className="profile-link"
                                                    >
                                                        Diana{" "}
                                                    </a>
                                                    <i className="em em-laughing" />{" "}
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud{" "}
                                                </p>
                                            </div>
                                            <div className="post-comment">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                    alt="user1"
                                                    className="profile-photo-sm"
                                                />
                                                <p>
                                                    <a
                                                        href="timeline.html"
                                                        className="profile-link"
                                                    >
                                                        John
                                                    </a>{" "}
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud{" "}
                                                </p>
                                            </div>
                                            <div className="post-comment">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                    alt="user2"
                                                    className="profile-photo-sm"
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Post a comment"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </PopUpWrap>
        </div>
    ) : (
        ""
    );
};

export default PopUp;
