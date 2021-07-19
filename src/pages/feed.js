import React, {useState} from "react";
import { FeedContainer, FeedForum } from "../component/Feed/FeedElem";
import "../component/Feed/styles.css";
import Boy1 from "../images/boy.svg"
import Boy2 from "../images/boy-2.svg"
import Boy3 from "../images/boy-3.svg"
import Boy4 from "../images/boy-4.svg"
import Girl1 from "../images/girl.svg"
import Girl2 from "../images/girl-2.svg"
import Girl3 from "../images/girl-3.svg"
import * as Bs from 'react-icons/bs';
import Footer from "../component/Footer"
import SideBar from "../component/SideBar";
import PopUp from "../component/Feed/PopUp";

const Feed = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false);

    return (
        
        <>
        <SideBar />
        <FeedContainer>
            <FeedForum>
            <>
            
            {/* Import CSS */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
                    integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o="
                    crossOrigin="anonymous"
                />
                <div className="container">
                    <div className="main-body p-0">
                        <div className="inner-wrapper">
                            {/* Inner sidebar */}
                            <div className="inner-sidebar">
                                {/* Inner sidebar header */}
                                <div className="inner-sidebar-header justify-content-center">
                                    <button
                                        className="btn btn-primary has-icon btn-block"
                                        type="button"
                                        data-toggle="modal"
                                        data-target="#threadModal"
                                    style={{backgroundColor: '#5ea3a3', borderColor:'#5ea3a3'}}>
                                        <Bs.BsPlus />
                                        NEW POST
                                    </button>
                                </div>
                                {/* /Inner sidebar header */}
                                {/* Inner sidebar body */}
                                <div className="inner-sidebar-body p-0">
                                    <div
                                        className="p-3 h-100"
                                        data-simplebar="init"
                                    >
                                        <div
                                            className="simplebar-wrapper"
                                            style={{ margin: "-16px" }}
                                        >
                                            <div className="simplebar-height-auto-observer-wrapper">
                                                <div className="simplebar-height-auto-observer" />
                                            </div>
                                            <div className="simplebar-mask">
                                                <div
                                                    className="simplebar-offset"
                                                    style={{
                                                        right: 0,
                                                        bottom: 0,
                                                    }}
                                                >
                                                    <div
                                                        className="simplebar-content-wrapper"
                                                        style={{
                                                            height: "100%",
                                                            overflow:
                                                                "hidden scroll",
                                                        }}
                                                    >
                                                        <div
                                                            className="simplebar-content"
                                                            style={{
                                                                padding: 16,
                                                            }}
                                                        >
                                                            <nav className="nav nav-pills nav-gap-y-1 flex-column">
                                                                <a
                                                                    href="/feed"
                                                                    className="nav-link nav-link-faded has-icon active"
                                                                >
                                                                    All Discussion
                                                                </a>
                                                                <a
                                                                    href="/feed"
                                                                    className="nav-link nav-link-faded has-icon"
                                                                >
                                                                    #ReviewMyResume
                                                                </a>
                                                                <a
                                                                    href="/feed"
                                                                    className="nav-link nav-link-faded has-icon"
                                                                >
                                                                    #InterviewQuestions
                                                                </a>
                                                                <a
                                                                    href="/feed"
                                                                    className="nav-link nav-link-faded has-icon"
                                                                >
                                                                    #CompanyReviews
                                                                </a>
                                                                <a
                                                                    href="/feed"
                                                                    className="nav-link nav-link-faded has-icon"
                                                                >
                                                                    #AskCounsellor
                                                                </a>
                                                                <a
                                                                    href="/feed"
                                                                    className="nav-link nav-link-faded has-icon"
                                                                >
                                                                    #General
                                                                </a>
                                                                <a
                                                                    href="/feed"
                                                                    className="nav-link nav-link-faded has-icon"
                                                                >
                                                                    #C2001
                                                                </a>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="simplebar-placeholder"
                                                style={{
                                                    width: 234,
                                                    height: 292,
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-horizontal"
                                            style={{ visibility: "hidden" }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{
                                                    width: 0,
                                                    display: "none",
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-vertical"
                                            style={{
                                                visibility: "visible",
                                            }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{
                                                    height: 151,
                                                    display: "block",
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* /Inner sidebar body */}
                            </div>
                            {/* /Inner sidebar */}
                            {/* Inner main */}
                            <div className="inner-main">
                                {/* Inner main header */}
                                <div className="inner-main-header">
                                    <a
                                        className="nav-link nav-icon rounded-circle nav-link-faded mr-3 d-md-none"
                                        href="/feeds"
                                        data-toggle="inner-sidebar"
                                    >
                                        <i className="material-icons">
                                            arrow_forward_ios
                                        </i>
                                    </a>
                                    <select className="custom-select custom-select-sm w-auto mr-1" style={{fontSize:'19px'}}>
                                        <option selected>Latest</option>
                                        <option value={1}>Popular</option>
                                        <option value={3}>All</option>
                                    </select>
                                    <div style={{margin: '0 10px'}}></div>
                                    <span className="input-icon input-icon-sm ml-auto w-auto">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-4 mt-4"
                                            placeholder="Search forum"
                                            style={{width: "400px"}}
                                        />
                                    </span>
                                </div>
                                {/* /Inner main header */}
                                {/* Inner main body */}
                                {/* Forum List */}
                                <div className="inner-main-body p-2 p-sm-3 collapse forum-content show">
                                    <div className="card mb-2">
                                        <div className="card-body p-2 p-sm-3">
                                            <div className="media forum-item">
                                                <a
                                                    href="/feed"
                                                    data-toggle="collapse"
                                                    data-target=".forum-content"
                                                >
                                                    <img
                                                        src={Boy1}
                                                        className="mr-3 rounded-circle"
                                                        width={50}
                                                        alt="User"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h6>
                                                        <button
                                                            data-toggle="collapse"
                                                            data-target=".forum-content"
                                                            className="text-body title btn"
                                                            onClick={() => setButtonPopUp(true)}
                                                        >
                                                            Is my resume well-formatted?
                                                        </button>
                                                    </h6>
                                                    <p className="text-secondary">
                                                        I am planning to apply for internship on October. But...
                                                    </p>
                                                    
                                                    <p className="text-muted">
                                                        <a href="/feed">
                                                            swbd0032
                                                        </a>{" "}
                                                        replied{" "}
                                                        <span className="text-secondary font-weight-bold">
                                                            13 minutes ago
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="text-muted small text-center align-self-center">
                                                    <span className="d-none d-sm-inline-block">
                                                        <i className="far fa-eye" />{" "}
                                                        19
                                                    </span>
                                                    
                                                    <span>
                                                        <i className="far fa-comment ml-2" />{" "}
                                                        3
                                                    </span>
                                                    <span className='hashtag'>
                                                        #ReviewMyResume
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <div className="card-body p-2 p-sm-3">
                                            <div className="media forum-item">
                                                <a
                                                    href="/feed"
                                                    data-toggle="collapse"
                                                    data-target=".forum-content"
                                                >
                                                    <img
                                                        src={Girl1}
                                                        className="mr-3 rounded-circle"
                                                        width={50}
                                                        alt="User"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h6>
                                                        <button
                                                            href="/feed"
                                                            data-toggle="collapse"
                                                            data-target=".forum-content"
                                                            className="text-body title btn"
                                                        >
                                                            Anyone heard kkDex Company?
                                                        </button>
                                                    </h6>
                                                    <p className="text-secondary">
                                                        My senior told me about kkDex yesterday. Anyone 
                                                        working/worked at there?
                                                    </p>
                                                    <p className="text-muted">
                                                        <a href="/feed">
                                                            oweh0382
                                                        </a>{" "}
                                                        replied{" "}
                                                        <span className="text-secondary font-weight-bold">
                                                            3 hours ago
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="text-muted small text-center align-self-center">
                                                    <span className="d-none d-sm-inline-block">
                                                        <i className="far fa-eye" />{" "}
                                                        18
                                                    </span>
                                                    <span>
                                                        <i className="far fa-comment ml-2" />{" "}
                                                        1
                                                    </span>
                                                    <span className='hashtag'>
                                                        #CompanyReviews &nbsp; &nbsp; #C2001
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <div className="card-body p-2 p-sm-3">
                                            <div className="media forum-item">
                                                <a
                                                    href="/feed"
                                                    data-toggle="collapse"
                                                    data-target=".forum-content"
                                                >
                                                    <img
                                                        src={Boy2}
                                                        className="mr-3 rounded-circle"
                                                        width={50}
                                                        alt="User"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h6>
                                                        <button
                                                            href="/feed"
                                                            data-toggle="collapse"
                                                            data-target=".forum-content"
                                                            className="text-body title btn"
                                                        >
                                                            Is my CGPA enough to get into FLAG?
                                                        </button>
                                                    </h6>
                                                    <p className="text-secondary">
                                                        I just got my results for this semester, passed 
                                                        all units and final CGPA is ...
                                                    </p>
                                                    <p className="text-muted">
                                                        <a href="/feed">
                                                            wtan0019
                                                        </a>{" "}
                                                        replied{" "}
                                                        <span className="text-secondary font-weight-bold">
                                                            7 hours ago
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="text-muted small text-center align-self-center">
                                                    <span className="d-none d-sm-inline-block">
                                                        <i className="far fa-eye" />{" "}
                                                        32
                                                    </span>
                                                    <span>
                                                        <i className="far fa-comment ml-2" />{" "}
                                                        2
                                                    </span>
                                                    <span className='hashtag'>
                                                        #General
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <div className="card-body p-2 p-sm-3">
                                            <div className="media forum-item">
                                                <a
                                                    href="/feed"
                                                    data-toggle="collapse"
                                                    data-target=".forum-content"
                                                >
                                                    <img
                                                        src={Boy3}
                                                        className="mr-3 rounded-circle"
                                                        width={50}
                                                        alt="User"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h6>
                                                        <button
                                                            href="/feed"
                                                            data-toggle="collapse"
                                                            data-target=".forum-content"
                                                            className="text-body title btn"
                                                        >
                                                            [Tips] 10 Most Common Interview Questions
                                                        </button>
                                                    </h6>
                                                    <p className="text-secondary">
                                                        Been going to interviews for more than 20 times, 
                                                        I am fully experienced with ...
                                                    </p>
                                                    <p className="text-muted">
                                                        <a href="/feed">
                                                            qsia1292
                                                        </a>{" "}
                                                        replied{" "}
                                                        <span className="text-secondary font-weight-bold">
                                                            11 hours ago
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="text-muted small text-center align-self-center">
                                                    <span className="d-none d-sm-inline-block">
                                                        <i className="far fa-eye" />{" "}
                                                        49
                                                    </span>
                                                    <span>
                                                        <i className="far fa-comment ml-2" />{" "}
                                                        9
                                                    </span>
                                                    <span className='hashtag'>
                                                        #InterviewQuestions
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <div className="card-body p-2 p-sm-3">
                                            <div className="media forum-item">
                                                <a
                                                    href="/feed"
                                                    data-toggle="collapse"
                                                    data-target=".forum-content"
                                                >
                                                    <img
                                                        src={Girl2}
                                                        className="mr-3 rounded-circle"
                                                        width={50}
                                                        alt="User"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h6>
                                                        <button
                                                            href="/feed"
                                                            data-toggle="collapse"
                                                            data-target=".forum-content"
                                                            className="text-body title btn"
                                                        >
                                                            Can I apply Internship in my home country?
                                                        </button>
                                                    </h6>
                                                    <p className="text-secondary">
                                                        Internship during this summer semester, but I am
                                                        not able to return to Malaysia ... 
                                                    </p>
                                                    <p className="text-muted">
                                                        <a href="/feed">
                                                            Lim
                                                        </a>{" "}
                                                        replied{" "}
                                                        <span className="text-secondary font-weight-bold">
                                                            12 hours ago
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="text-muted small text-center align-self-center">
                                                    <span className="d-none d-sm-inline-block">
                                                        <i className="far fa-eye" />{" "}
                                                        65
                                                    </span>
                                                    <span>
                                                        <i className="far fa-comment ml-2" />{" "}
                                                        10
                                                    </span>
                                                    <span className='hashtag'>
                                                        #AskCounsellor &nbsp; &nbsp; #C2001
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <div className="card-body p-2 p-sm-3">
                                            <div className="media forum-item">
                                                <a
                                                    href="/feed"
                                                    data-toggle="collapse"
                                                    data-target=".forum-content"
                                                >
                                                    <img
                                                        src={Girl3}
                                                        className="mr-3 rounded-circle"
                                                        width={50}
                                                        alt="User"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h6>
                                                        <button
                                                            href="/feed"
                                                            data-toggle="collapse"
                                                            data-target=".forum-content"
                                                            className="text-body title btn"
                                                        >
                                                            [Tips] Writing the Perfect Resume
                                                        </button>
                                                    </h6>
                                                    <p className="text-secondary">
                                                        Here are some of my experiences on writing the 
                                                        perfect resume ... 
                                                    </p>
                                                    <p className="text-muted">
                                                        <a href="/feed">
                                                            ploh0001
                                                        </a>{" "}
                                                        replied{" "}
                                                        <span className="text-secondary font-weight-bold">
                                                            14 hours ago
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="text-muted small text-center align-self-center">
                                                    <span className="d-none d-sm-inline-block">
                                                        <i className="far fa-eye" />{" "}
                                                        45
                                                    </span>
                                                    <span>
                                                        <i className="far fa-comment ml-2" />{" "}
                                                        4
                                                    </span>
                                                    <span className='hashtag'>
                                                        #ReviewMyResume
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <div className="card-body p-2 p-sm-3">
                                            <div className="media forum-item">
                                                <a
                                                    href="/feed"
                                                    data-toggle="collapse"
                                                    data-target=".forum-content"
                                                >
                                                    <img
                                                        src={Boy4}
                                                        className="mr-3 rounded-circle"
                                                        width={50}
                                                        alt="User"
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h6>
                                                        <button
                                                            href="/feed"
                                                            data-toggle="collapse"
                                                            data-target=".forum-content"
                                                            className="text-body title btn"
                                                        >
                                                            [Sharing] My working experience at Google as a SDE
                                                        </button>
                                                    </h6>
                                                    <p className="text-secondary">
                                                        I have worked at Google for 2 years, and many juniors
                                                        asked me about ... 
                                                    </p>
                                                    <p className="text-muted">
                                                        <a href="/feed">
                                                            ktey0001
                                                        </a>{" "}
                                                        replied{" "}
                                                        <span className="text-secondary font-weight-bold">
                                                            18 hours ago
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="text-muted small text-center align-self-center">
                                                    <span className="d-none d-sm-inline-block">
                                                        <i className="far fa-eye" />{" "}
                                                        70
                                                    </span>
                                                    <span>
                                                        <i className="far fa-comment ml-2" />{" "}
                                                        3
                                                    </span>
                                                    <span className='hashtag'>
                                                        #CompanyReviews
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="pagination pagination-sm pagination-circle justify-content-center mb-0">
                                        <li className="page-item disabled">
                                            <span className="page-link has-icon" style={{color:"#5ea3a3"}}>
                                                <Bs.BsChevronLeft />
                                            </span>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="/feed"
                                                style={{color:"#5ea3a3"}}
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active" >
                                            <span className="page-link" style={{backgroundColor: '#5ea3a3', color:"#fff", borderColor:'#5ea3a3'}}>2</span>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="/feed"
                                                style={{color:"#5ea3a3"}}
                                            >
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link has-icon"
                                                href="/feed"
                                                style={{color:"#5ea3a3"}}
                                            >
                                                {/* <i className="material-icons">
                                                    chevron_right
                                                </i> */}
                                                <Bs.BsChevronRight />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            {/* /Inner main */}
                        </div>
                        
                    </div>
                </div>
            </>
            </FeedForum>
            </FeedContainer>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}></PopUp>
            <Footer />
        </>
        
    );
};

export default Feed;
