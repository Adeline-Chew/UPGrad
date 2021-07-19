import React from 'react'
import {
    JobContainer,
    JobH1
} from './JobElem'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { jobObj1, jobObj2, jobObj3, 
        jobObj4, jobObj5, jobObj6,
        jobObj7, jobObj8, jobObj9,
        jobObj10, jobObj11, jobObj12,
        jobObj13} from './JobData';
import JobCard from './JobCard';
import Filters from "./filters.jsx";
import './filters.css'

const JobPage = () => {
    return (
        <>
            <JobContainer>
                <div style={{padding: "30px 0"}}></div>
            <Filters/>
            <JobH1>Showing 14 Jobs</JobH1>

            <Row xs={1} md={3} className="g-4" style={{ marginLeft: '40px', marginTop: '20px'}}>
      
                <Col>
                    <JobCard {...jobObj1} />
                </Col>

                <Col>
                    <JobCard {...jobObj2} />
                </Col>

                <Col>
                    <JobCard {...jobObj3} />
                </Col>

                <Col>
                    <JobCard {...jobObj4} />
                </Col>

                <Col>
                    <JobCard {...jobObj5} />
                </Col>

                <Col>
                    <JobCard {...jobObj6} />
                </Col>

                <Col>
                    <JobCard {...jobObj7} />
                </Col>

                <Col>
                    <JobCard {...jobObj8} />
                </Col>

                <Col>
                    <JobCard {...jobObj9} />
                </Col>

                <Col>
                    <JobCard {...jobObj10} />
                </Col>

                <Col>
                    <JobCard {...jobObj11} />
                </Col>

                <Col>
                    <JobCard {...jobObj12} />
                </Col>

                <Col>
                    <JobCard {...jobObj13} />
                </Col>
            </Row>
            </JobContainer>
        </>
    )
}

export default JobPage
