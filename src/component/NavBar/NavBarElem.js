import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'
var mainWhite = '#faf9f9';
var highlightGreenBar = '#5ea3a3'

export const Nav = styled.nav `
    /* background: ${({scrollNav}) => (scrollNav ? "#000" :"transparent")}; */
    background: ${highlightGreenBar};
    height: 80px;
    margin-top: -80px;
    margin-left: 250px;
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

export const NavBarContainer = styled.div `
    display: flex;
        justify-content: space-between;
        height: 80px;
        z-index: 1;
        width: 100%;
        padding: 0 24px;
        max-width: 1100px;
`

export const NavLogoWrap = styled.div `
    max-width: 200px;
    padding-left: 50px;
    align-items: center;
    justify-content: center;
`

export const NavLogo = styled(LinkR)`
    color: ${mainWhite};
    font-family: 'Doppio One', sans-serif;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    margin-left: 50px; 
    font-weight: 300;
    text-decoration: none;
`;

export const NavImgWrap = styled.div `
    max-width: 10px;
    max-height: 10px;
    /* padding-left: 100px; */
`

export const NavImg = styled.img `
    /* width: 100%; */
    /* margin: 10 0 10px 0;
    padding-right: 0;
    display: inline; */
    position: absolute;
    width: 40px;
    height: 70px;
    top: 1px;

`

export const NavMenu = styled.ul  `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;

export const NavLinks = styled(LinkS) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    /* Underline the current component in navbar */
    &.active { 
        border-bottom: 3px solid ${highlightGreenBar};
    }
`;

export const NavIcon = styled(LinkR)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: #15171c;
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

export const SidebarWrap = styled.div`
  width: 100%;
`;
