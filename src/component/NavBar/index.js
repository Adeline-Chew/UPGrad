import React, { useState } from "react";
import {
    Nav,
    NavBarContainer,
    NavLogo,
    NavImgWrap,
    NavImg,
    NavMenu,
    NavItem,
    NavLinks,
    SidebarNav,
    SidebarWrap,
    NavIcon
} from "./NavBarElem";
import logo from "../../images/logo.svg";
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from "../SideBar/SideBarData"
import SubMenu from "../SideBar/SubMenu"

const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavImgWrap>
                        <NavImg src={logo} alt={logo} />
                    </NavImgWrap>
                    <NavLogo>UPGRAD</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="upjobs"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80} //height of navbar
                            >
                                UPJobs
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="upfeed"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                UPFeed
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="upchat"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                UPChat
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="upevent"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                UPEvent
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="profile"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Profile
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
                <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <NavIcon to="#">
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </NavIcon>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                        </SidebarWrap>
                    </SidebarNav>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <NavIcon to="#">
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </NavIcon>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                        </SidebarWrap>
                    </SidebarNav>
        </>
    );
};

export default NavBar;
