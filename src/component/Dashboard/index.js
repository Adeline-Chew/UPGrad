import React from "react";
import {
    DashboardContainer,
    DashboardContent,
    DashboardH1,
    DashboardCard,
    TableH1,
    TableWrapper,
    CarouselItem,
    CarouselWrapper,
    CardTitle,
    CardTitleH1,
} from "./DashboardElem";

// import Carousel from "react-elastic-carousel";
import Table from "react-bootstrap/Table";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/google-poster.jpeg";

const Dashboard = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <>
            <DashboardContainer>
                <DashboardH1>Welcome Back, Sheep Meh Meh</DashboardH1>

                <DashboardContent>
                    <DashboardCard>
                        <CardTitle>
                            <CardTitleH1>4 Jobs Applied</CardTitleH1>
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
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
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
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Grab</td>
                                        <td>IT Internship</td>
                                        <td>Responded</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TableWrapper>
                    </DashboardCard>
                </DashboardContent>

                <CarouselWrapper>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src= {image1}
                                alt="Image One"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="Image Two"
                            />
                    
                        </Carousel.Item>
                    </Carousel>
                </CarouselWrapper>
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
