import React from 'react';
import {EventTitle, EventContainer, EventWrapper, EventColumn, EventInnerColumn, EventSmallerCard, CardColumn} from '../component/EventPage/EventElem';
import { eventObj1, eventObj2, eventObj3, eventObj4, eventObj5, eventObj6,} from '../component/EventPage/EventData';
import EventCard from '../component/EventPage/EventCard';
import image1 from "../images/event-2.jpeg";
import image2 from "../images/google-poster.jpeg"
import Footer from "../component/Footer"

const Event = () => {
    return (
        <>
            <EventContainer>

            <EventTitle>Upcoming Events</EventTitle>
            <EventWrapper>
                <h4><b><i> This Week</i></b></h4>
            <EventColumn>
                
                <EventInnerColumn>
                    <EventSmallerCard>
                        <h4><b>13 July</b></h4>
                        <p style={{fontSize: '18px', lineHeight: '1.0'}}><small>Help you decide your computer science career path.</small></p>
                    </EventSmallerCard>
                    <EventSmallerCard>
                        <h4><b>15 July</b></h4>
                        <p style={{fontSize: '18px', lineHeight: '1.0'}}><small>Employer presentations are usually organised by the employer as opposed to the university careers service.</small></p>
                    </EventSmallerCard>
                </EventInnerColumn>
                <EventInnerColumn>
                    
                    <h3 style={{color: 'black'}}><b>16 July</b></h3>
                    <p style={{fontSize: '18px', lineHeight: '1.0'}}><small>Get yourself along to a careers event to learn more about the industry you want to follow a career in.</small></p>
                    <EventSmallerCard>
                        <img src={image1} alt="event-2.jpeg" width="280px" height="160px"/>
                    </EventSmallerCard>

                </EventInnerColumn>
            </EventColumn>
            
            <EventColumn>
                <h4><b><i>Next Week</i></b></h4>
                <EventInnerColumn>
                    <EventSmallerCard>
                        <h4><b>21 July</b></h4>
                        <p style={{fontSize: '18px', lineHeight: '1.0'}}><small>Help you decide your computer science career path.</small></p>
                    </EventSmallerCard>
                    <EventSmallerCard>
                        <h4><b>25 July</b></h4>
                        <p style={{fontSize: '18px', lineHeight: '1.0'}}><small>Common mistake and general rules in Resume Writing.</small></p>
                    </EventSmallerCard>
                </EventInnerColumn>
                <EventInnerColumn>
                    <h3 style={{color: 'black'}}><b>26 July</b></h3>
                    <p style={{fontSize: '18px', lineHeight: '1.0'}}><small>Leadership programme we run regular webinars to advise candidates on the latest trends.</small></p>
                    <EventSmallerCard>
                        <img src={image2} alt="event-2.jpeg" width="280px" height="160px"/>
                    </EventSmallerCard>
                </EventInnerColumn>
            </EventColumn>
            </EventWrapper>
            <EventTitle >Career Workshop</EventTitle>

            <EventWrapper> 
                <CardColumn>
                    <EventCard {... eventObj1} />
                </CardColumn>

                <CardColumn>
                    <EventCard {... eventObj2} />
                </CardColumn>

                <CardColumn>
                    <EventCard {... eventObj3} />
                </CardColumn>
            </EventWrapper>

            <EventTitle >Meet the Recruiters</EventTitle>

            <EventWrapper> 
                <CardColumn>
                    <EventCard {... eventObj4} />
                </CardColumn>

                <CardColumn>
                    <EventCard {... eventObj5} />
                </CardColumn>

                <CardColumn>
                    <EventCard {... eventObj6} />
                </CardColumn>
                
            </EventWrapper>
           
            </EventContainer>
            <Footer />
        </>
        
    )
}

export default Event
