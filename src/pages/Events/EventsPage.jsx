import React, { useState, useEffect, useRef } from "react";

// import { ReactComponent as pagingBar } from 'src/assets/images/paging_bar';
import "./style/events.css";
import images from "src/assets/images";
import EventCard from "./components/EventCard";
import EventBoxSlide from "./components/EventBoxSlide";

const EventsPage = (props) => {
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [eventSlideMoving, setEventSlideMoving] = useState(0);
  const eventSlideRef = useRef();
  const totalSides = 3;

  const onBackButtonClick = () => {
    if (currentEventSlide <= 0) {
      return;
    } else {
      console.log("clickBack");
      setEventSlideMoving(eventSlideMoving + 456);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + 456
      }px)`;
    }
  };
  const onGoButtonClick = () => {
    if (currentEventSlide >= totalSides) {
      return;
    } else {
      console.log("clickGo");
      setEventSlideMoving(eventSlideMoving - 456);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - 456
      }px)`;
    }
  };

  return (
    <div className="Events">
      <section className="Section">
        <div className="SectionTitle">Events</div>
        <div className="SubPhrase">
          Learn about ORCA's upcoming events for potential meet-ups
        </div>
        <EventBoxSlide />
      </section>
      <section className="Section">
        <div className="SectionTitle">Past Events</div>
        <div className="SubPhrase">Take a glimpse into ORCA's past events.</div>
        <div className="EventBox__past">
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
          <EventCard past={true} inEvent={true} />
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
