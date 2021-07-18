import React from "react";
import {
    DashboardContainer,
    DashboardContent,
    DashboardH1,
    DashboardCard,
    TableWrapper,
    CarouselWrapper,
    CardTitle,
    CardTitleH1,
    CarouselContainer
} from "./DashboardElem";

// import Carousel from "react-elastic-carousel";
import Table from "react-bootstrap/Table";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/google-poster.jpeg";
import image2 from "../../images/event.jpeg";
import image3 from "../../images/event-5.jpeg";

const Dashboard = () => {

    return (
        <>
            <DashboardContainer>
                <DashboardH1>Welcome Back, Sheep Meh Meh</DashboardH1>

                <DashboardContent className="dashboardContent">
                    <DashboardCard>
                        <CardTitle>
                            <CardTitleH1>9 Jobs Applied</CardTitleH1>
                        </CardTitle>
                        <TableWrapper>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Company</th>
                                        <th>Job Title</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>FACEBOOK INC</td>
                                        <td>Software Engineer Intern</td>
                                        <td>Waiting for Response</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Western Digital</td>
                                        <td>Software Development Internship</td>
                                        <td>Waiting for Response</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Shopee</td>
                                        <td>Computer Science Intern</td>
                                        <td>Shortlisted</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>NDC Tech Co.</td>
                                        <td>Web Development Intern</td>
                                        <td>Waiting for Response</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Facebook</td>
                                        <td>UI Develpment</td>
                                        <td>Shortlisted</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>TIME</td>
                                        <td>Software Developer Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Google</td>
                                        <td>Software Developer Internship</td>
                                        <td>Waiting for Response</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>McDonald</td>
                                        <td>Internship</td>
                                        <td>Waiting for Response</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TableWrapper>
                    </DashboardCard>
                    <DashboardCard>
                        <CardTitle>
                            <CardTitleH1>Incoming Interviews</CardTitleH1>
                        </CardTitle>
                        <TableWrapper>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Company</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>FACEBOOK INC</td>
                                        <td>22 July 2021</td>
                                        <td>8.00AM</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Grab</td>
                                        <td>25 July 2021</td>
                                        <td>10.00AM</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>TIME</td>
                                        <td>31 July 2021</td>
                                        <td>10AM</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>PwC</td>
                                        <td>1 August 2021</td>
                                        <td>8.00AM</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TableWrapper>
                    </DashboardCard>
                </DashboardContent>
                <CarouselContainer className="CarouselContainer">
                <CarouselWrapper>
                    <Carousel prevLabel="" nextLabel="">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src= {image1}
                                alt="google poster"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image2}
                                alt="interview tips"
                            />
                    
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt="vacancy"
                            />
                    
                        </Carousel.Item>
                    </Carousel>
                </CarouselWrapper>
                </CarouselContainer>
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
