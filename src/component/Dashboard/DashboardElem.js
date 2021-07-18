import styled from 'styled-components'
import "react-multi-carousel/lib/styles.css";
var bgcolor = '#faf9f9';
var lightGreen = '#76dbd1';

export const DashboardContainer = styled.div `
    height: 2000px;
    background-color: ${bgcolor};
    align-items: center;
    justify-content: space-between;
    /* display: flex; */
    flex-direction: column;

    @media screen and (max-width: 768px) {
        height: 2300px;
    }

    @media screen and (max-width: 480px) {
        height: 2500px;
    }
`

export const DashboardContent = styled.div `
    max-width: 1000px;
    margin: 40px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 300px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const DashboardCard = styled.div `
    /* border: 1px solid; */
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const CardTitle = styled.div `
    position: absolute;
    width: 555px;
    height: 64px;
    text-align: center;
    background-color: ${lightGreen};
    border-radius: 15px;
    padding-bottom: 50px;
`

export const CardTitleH1 = styled.h1 `
    position: relative;
/* width: 555px;
height: 64px; */
font-size: 24px;
text-align: center;
padding-top: 20px;

background: ${lightGreen};
color: #fff;
font-weight: bold;
border-radius: 10px;
`

export const DashboardH1 = styled.h1 `
    color: #000;
    font-size: 36px;
    padding: 50px 20px 20px 70px;
    top: 1075px;
    /* font-family: 'Source Code Pro', monospace; */
    font-family: 'IBM Plex Serif', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
`

export const TableWrapper = styled.div `
    /* border: 1px solid; */
    margin-top: 100px;
    height: 100%;
    width: 555px;
`

export const TableH1 = styled.h1 `
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
`

export const CarouselH1 = styled.div `
    color: #000;
    font-size: 36px;
    left: -32px;
    top: 1250px;
`

export const CarouselItem =  styled.div `
display: flex;
position: absolute;
top: 150px;
justify-content: Center;
align-items: center;
height: 300px;
width: 80%;
background-color: rgba(173, 210, 201, 0.4);
color: black;
font-size: 4em;
border-radius: 15px;
`

export const CarouselWrapper = styled.div `
    width: 550px;
    height: 300px;
    margin-top: 800px;
    position: absolute;   
    right: 500px;
    top: 990px;  
    
`
