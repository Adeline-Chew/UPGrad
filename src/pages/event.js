import React from 'react';
import {EventTitle, EventContainer, EventWrapper, EventColumn, EventInnerColumn, EventSmallerCard, CardColumn} from '../component/EventPage/EventElem';
import { eventObj1, eventObj2, eventObj3, } from '../component/EventPage/EventData';
import EventCard from '../component/EventPage/EventCard';
import {Card, CardColumns} from "react-bootstrap";

const Event = () => {
    return (
        <div>
            <EventContainer>

            <EventTitle>Upcoming Events</EventTitle>
            <EventWrapper>
            <EventColumn>
                <h4> This Week </h4>
                <EventInnerColumn>
                    <EventSmallerCard>
                        <h4><b>13 July</b></h4>
                        <p><small>Help you decide your computer science career path.</small></p>
                    </EventSmallerCard>
                    <EventSmallerCard>
                        <h4><b>15 July</b></h4>
                        <p><small>Employer presentations are usually organised by the employer as opposed to the university careers service.</small></p>
                    </EventSmallerCard>
                </EventInnerColumn>
                <EventInnerColumn>
                    
                    <h3><b>16 July</b></h3>
                    <p><small>Get yourself along to a careers event as soon as possible to learn more about the industry or sector you want to follow a career in.</small></p>
                    
                </EventInnerColumn>
            </EventColumn>
            <EventColumn>
                <h4> This Week </h4>
                <EventInnerColumn>
                    <EventSmallerCard>
                        <h4><b>13 July</b></h4>
                        <p><small>Help you decide your computer science career path.</small></p>
                    </EventSmallerCard>
                    <EventSmallerCard>
                        <h4><b>15 July</b></h4>
                        <p><small>Employer presentations are usually organised by the employer as opposed to the university careers service.</small></p>
                    </EventSmallerCard>
                </EventInnerColumn>
                <EventInnerColumn>
                    <h3><b>16 July</b></h3>
                    <p><small>Get yourself along to a careers event as soon as possible to learn more about the industry or sector you want to follow a career in.</small></p>
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
                    <EventCard {... eventObj1} />
                </CardColumn>

                <CardColumn>
                    <EventCard {... eventObj2} />
                </CardColumn>

                <CardColumn>
                    <EventCard {... eventObj3} />
                </CardColumn>
            </EventWrapper>
           
            </EventContainer>
        </div>
    )
}

export default Event
