import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { 
  NavImgWrap,
  NavImg,
  NavLogo,
  NavLogoWrap
} from '../NavBar/NavBarElem'
import logo from "../../images/logo.svg";

var mainGreen = '#000000'


const Nav = styled.div `
    background: ${({scrollNav, bgColor}) => (bgColor ? mainGreen : scrollNav ? mainGreen :"transparent")};
    /* background: ${mainGreen}; */
    height: 80px;
    margin-top: -80px;
    /* margin-left: 250px; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: ${mainGreen};
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideBar = () => {
  // Set nav bar to transparent when on top
  const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const [bgColor, setBgColor] = useState(false);

    const changeBgColor = () => {
      if (window.location.pathname === '/') {
        setBgColor(false);
      }else {
        setBgColor(true);
      }
    }

    useEffect(() => {
      window.addEventListener("click", changeBgColor);
    })

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav} bgColor={bgColor}>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <NavLogoWrap>
          <NavImgWrap>
                        <NavImg src={logo} alt={logo} />
                    </NavImgWrap>
                    <NavLogo>UPGRAD</NavLogo>
          </NavLogoWrap>
          
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;