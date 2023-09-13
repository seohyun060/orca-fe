import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import images from "src/assets/images";
import EventCard from "../../Events/components/EventCard";
import EventBoxSlide from "src/pages/Events/components/EventBoxSlide";

const HomeEvents = () => {
  const navigate = useNavigate();
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [eventSlideMoving, setEventSlideMoving] = useState(0);
  const eventSlideRef = useRef();
  const totalSides = 3;

  const onBackButtonClick = () => {
    if (currentEventSlide <= 0) {
      return;
    } else {
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
      setEventSlideMoving(eventSlideMoving - 456);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - 456
      }px)`;
    }
  };

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label>Events</label>
        <button className="ViewButton" onClick={() => navigate("/events")}>
          <label className="View">View All</label>
        </button>
      </div>
      <EventBoxSlide inEvent={false}/>
    </section>
  );
};

export default HomeEvents;
