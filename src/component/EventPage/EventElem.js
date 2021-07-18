import styled from 'styled-components';

export const EventContainer = styled.div `
    padding-top: 80px;
    padding-right: 50px;
    max-width: 100%;
    max-height: 100vh;
`

export const EventTitle = styled.h1`
    color: #000;
    font-size: 36px;
    margin-left: 60px;
    margin-top: 40px;
    font-family: 'IBM Plex Serif', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    border-bottom: 6px solid orange;
    position: relative;
`

export const EventWrapper = styled.div `
    display: flex;
    padding: 20px 0 20px 58px;
`

export const EventColumn = styled.div `
    float: left;
    width: 50%;
    display: flex;   
    
`

export const EventInnerColumn = styled.div `
    float: left;
    width: 45%;
`

export const EventSmallerCard = styled.div `
    max-width: 80%;
    max-height: 100%;
    color: black;
`

export  const CardColumn = styled.div `
    width: 30%; 
    float: left; 
`