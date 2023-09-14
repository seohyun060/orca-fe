import React, { useState, useEffect, useRef } from "react";

// import { ReactComponent as pagingBar } from 'src/assets/images/paging_bar';
import "./style/events.css";
import images from "src/assets/images";
import EventCard from "./components/EventCard";
import EventBoxSlide from "./components/EventBoxSlide";
import EventDummyData from "./components/EventDummyData";

const EventsPage = (props) => {
  return (
    <div className="Events">
      <section className="Section">
        <div className="SectionTitle">Events</div>
        <div className="SubPhrase">
          Learn about ORCA's upcoming events for potential meet-ups
        </div>
        <EventBoxSlide inEvent={true} />
      </section>
      <section className="Section">
        <div className="SectionTitle">Past Events</div>
        <div className="SubPhrase">Take a glimpse into ORCA's past events.</div>
        <div className="EventBox__past">
          {EventDummyData.map((data) => (
            <EventCard
              title={data.title}
              eventDate={data.eventDate}
              past={true}
              inEvent={true}
            />
          ))}
        </div>
        <div className="ButtonArrange">
          <button className="LeadMoreButton">
            <label>Read More</label>
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
