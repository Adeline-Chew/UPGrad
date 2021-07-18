import React from "react";
import { ChatContainer, FriendName } from "../component/ChatPage/ChatElem";
import "../component/ChatPage/styles.css";
import Boy1 from "../images/boy.svg";
import Boy2 from "../images/boy-2.svg";
import Boy3 from "../images/boy-3.svg";
import Boy6 from "../images/boy-6.svg";
import Girl1 from "../images/girl.svg";
import Girl2 from "../images/girl-2.svg";
import Girl3 from "../images/girl-3.svg";

const Chat = () => {
    return (
        <ChatContainer>
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                rel="stylesheet"
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 bg-white ">
                        <h4
                            style={{
                                height: 40,
                                fontSize: "30px",
                                marginTop: "20px",
                                marginLeft: "20px",
                                fontWeight: "600",
                            }}
                        >
                            All Chats
                        </h4>

                        {/* =============================================================== */}
                        {/* member list */}
                        <ul
                            className="friend-list"
                            style={{ marginTop: "20px" }}
                        >
                            <li className="active bounceInDown">
                                <a href="#" className="clearfix">
                                    <img
                                        src={Boy1}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Shaun Tan</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Hello, Are you there?
                                    </div>
                                    <small className="time text-muted">
                                        Just now
                                    </small>
                                    <p className="chat-alert label label-danger">
                                        3
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <img
                                        src={Girl1}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Eliana</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Would you like to...
                                    </div>
                                    <small className="time text-muted">
                                        5 mins ago
                                    </small>
                                    <small className="chat-alert text-muted">
                                        <i className="fa fa-check" />
                                    </small>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <img
                                        src={Boy2}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Riley</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Belloo.
                                    </div>
                                    <small className="time text-muted">
                                        2 hours ago
                                    </small>
                                    <small className="chat-alert text-muted">
                                        <i className="fa fa-reply" />
                                    </small>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <img
                                        src={Boy3}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Skylar</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Can you share me...
                                    </div>
                                    <small className="time text-muted">
                                        3 hours agp
                                    </small>
                                    <small className="chat-alert text-muted">
                                        <i className="fa fa-reply" />
                                    </small>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <img
                                        src={Girl2}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Kay</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Your resume looks great!
                                    </div>
                                    <small className="time text-muted">
                                        8 hours ago
                                    </small>
                                    <small className="chat-alert text-muted">
                                        <i className="fa fa-reply" />
                                    </small>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <img
                                        src={Girl3}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Emma</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Lets go to Apple for intern ^_^
                                    </div>
                                    <small className="time text-muted">
                                        8 hours ago
                                    </small>
                                    <small className="chat-alert text-muted">
                                        <i className="fa fa-reply" />
                                    </small>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <img
                                        src={Boy2}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Louise</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Thanks mate!
                                    </div>
                                    <small className="time text-muted">
                                        Yesterday
                                    </small>
                                    <small className="chat-alert text-muted">
                                        <i className="fa fa-reply" />
                                    </small>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <img
                                        src={Girl2}
                                        alt
                                        className="img-circle"
                                    />
                                    <FriendName>
                                        <strong>Adeline</strong>
                                    </FriendName>
                                    <div className="last-message text-muted">
                                        Hey there. Nice to meet you.
                                    </div>
                                    <small className="time text-muted">
                                        Wednesday
                                    </small>
                                    <small className="chat-alert text-muted">
                                        <i className="fa fa-check" />
                                    </small>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*=========================================================*/}
                    {/* selected chat */}
                    <div
                        className="col-md-8 bg-white "
                        style={{ height: "100%" }}
                    >
                        <div
                            className="chat-message"
                            style={{ height: "90vh" }}
                        >
                            <ul className="chat">
                                <li className="left clearfix">
                                    <span className="chat-img pull-left">
                                        <img src={Boy1} alt="User Avatar" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <strong className="primary-font">
                                                Shaun Tan
                                            </strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o" />{" "}
                                                12 mins ago
                                            </small>
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <span className="chat-img pull-right">
                                        <img src={Boy6} alt="User Avatar" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <strong className="primary-font">
                                                Justin
                                            </strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o" />{" "}
                                                13 mins ago
                                            </small>
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Curabitur bibendum ornare dolor,
                                            quis ullamcorper ligula sodales at.
                                        </p>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <span className="chat-img pull-left">
                                        <img src={Boy1} alt="User Avatar" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <strong className="primary-font"></strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o" />{" "}
                                                12 mins ago
                                            </small>
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <span className="chat-img pull-right">
                                        <img src={Boy6} alt="User Avatar" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <strong className="primary-font">
                                                Justin
                                            </strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o" />{" "}
                                                12 mins ago
                                            </small>
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Curabitur bibendum ornare dolor,
                                            quis ullamcorper ligula sodales at.
                                        </p>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <span className="chat-img pull-left">
                                        <img src={Boy1} alt="User Avatar" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <strong className="primary-font">
                                                Shaun Tan
                                            </strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o" />{" "}
                                                12 mins ago
                                            </small>
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <span className="chat-img pull-right">
                                        <img src={Boy6} alt="User Avatar" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <strong className="primary-font">
                                                Justin
                                            </strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o" />{" "}
                                                10 mins ago
                                            </small>
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Curabitur bibendum ornare dolor,
                                            quis ullamcorper ligula sodales at.
                                        </p>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <span className="chat-img pull-right">
                                        <img src={Boy6} alt="User Avatar" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <strong className="primary-font">
                                                Justin
                                            </strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o" />{" "}
                                                10 mins ago
                                            </small>
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Curabitur bibendum ornare dolor,
                                            quis ullamcorper ligula sodales at.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="chat-box bg-white"
                            style={{
                                width: "100%",
                                marginTop: "120px",
                                position: "sticky",
                                bottom: 0,
                                overflow: "hidden",
                            }}
                        >
                            <div className="input-group">
                                <input
                                    className="form-control border no-shadow no-rounded"
                                    placeholder="Type your message here"
                                />
                                <span className="input-group-btn">
                                    <button
                                        className="btn btn-success no-rounded"
                                        type="button"
                                    >
                                        Send
                                    </button>
                                </span>
                            </div>
                            {/* /input-group */}
                        </div>
                    </div>
                </div>
            </div>
        </ChatContainer>
    );
};

export default Chat;
