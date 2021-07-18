import styled from 'styled-components'

export const ProfileContainer = styled.div`
    max-width: 100%;
    height: 1000px;
    align-items: center;
    grid-gap: 5px;
    display: flex;
    margin-top: 80px;
`;

export const ProfileLeft = styled.div `
    flex: 50%;
    width: 60%;
    margin-right: 20px;
    margin-left: 20px;
`

export const ProfileRight = styled.div `
    width: 754px;
    border-radius: 15px;
    height: 100%;
    width: 40%;
`

export const ProfileRightH1 = styled.h1 `
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`

export const ProfileCardWrapper = styled.div `
    margin-left: 20px;
    width: 500px;
    background-color: #515E63;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProfileCardWrapper2 = styled.div `
    margin-left: 20px;
    width: 500px;
    background-color: #2F5D62;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const SkillsWrapper = styled.div `
    position: relative;
    font-size: 20px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    max-width: 70%;
    background: #2F5D62;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    margin-left: 20px;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const CardTitle = styled.h5 `
    color: white;
`

export const CardText = styled.p `
    color: white;
`
export const SkillsContainer = styled.div `
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap:5px;
`


export const ProImgWrap = styled.div `
    /* max-width: 1000px; */
    max-height: 10px;
    margin-left: 350px;
    
`

export const TopContainer = styled.div`
    height: 30%;
    background-color: yellow;
`

export const AboutContainer = styled.div`
    height: 20%;
    background-color: blue;
`
export const ContactContainer = styled.div `
    height: 20%;
    background-color: blue;
`
export const EndorsedContainer = styled.div ` 
    height: 30%;
    background-color: blue;
`
export const DetailsH6 = styled.h6 ``

export const DetailsDes = styled.div ``

export const ProfileButton = styled.button `
    margin-right: 20px; 
    background-color: #FED988;
    border-color: #FED988;
    color: #000000;
    &:hover {
        background: #d3d3d3; 
        color: white;
        cursor: pointer;
        border-color: #d3d3d3;
      }
`

export const ProfileName = styled.h4 ``

export const ProfileSum = styled.p ``




