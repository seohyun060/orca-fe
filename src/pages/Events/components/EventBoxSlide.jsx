import React, { useState, useEffect, useRef } from "react";
import "../style/events.css";
import images from "src/assets/images";
import EventCard from "./EventCard";

import EventDummyData from "./EventDummyData";

const EventBoxSlide = (props) => {
  const { inEvent } = props;

  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [eventSlideMoving, setEventSlideMoving] = useState(0);
  const eventSlideRef = useRef();
  const [dotBar, setDotBar] = useState([]);
  const [slideImageSrc, setSlideImageSrc] = useState(
    new Array(EventDummyData.length)
  );
  const totalSides = EventDummyData.length - 1; // 추후 갯수만큼 불러오기

  const onBackButtonClick = () => {
    if (currentEventSlide == totalSides) {
      setEventSlideMoving(eventSlideMoving + 152);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + 152
      }px)`;
    } else if (currentEventSlide <= 0) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving + 456);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + 456
      }px)`;
    }
  };
  const onGoButtonClick = () => {
    if (currentEventSlide == totalSides - 1) {
      setEventSlideMoving(eventSlideMoving - 152);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - 152
      }px)`;
      // dotBarRef.current.img.src = "images.paging_dot_dark"
    } else if (currentEventSlide >= totalSides) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving - 456);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - 456
      }px)`;
    }
  };

  const makeDotbar = () => {
    let dotBarImage = [];
    for (var i = 0; i < EventDummyData.length; i++) {
      if (i == currentEventSlide) {
        dotBarImage.push(images.paging_dot_dark);
      } else {
        dotBarImage.push(images.paging_dot_medium);
      }
    }

    let temp = [];
    for (var i = 0; i < EventDummyData.length; i++) {
      temp.push(<img id={i} src={dotBarImage[i]}></img>);
    }
    setDotBar(temp);
  };

  useEffect(() => {
    makeDotbar();
  }, [currentEventSlide]);

  return (
    <>
      <div className="EventBox">
        <div className="EventBoxSlide" ref={eventSlideRef}>
          {EventDummyData.map((data) => (
            <EventCard
              inEvent={inEvent}
              title={data.title}
              eventDate={data.eventDate}
            />
          ))}
          <EventCard
            inEvent={inEvent}
            title="Comming Soon"
            commingSoon={true}
          />
        </div>
      </div>
      <div className="EventCardPaging">
        <img src={images.back_b} onClick={onBackButtonClick}></img>
        {dotBar}
        <img src={images.go_b} onClick={onGoButtonClick}></img>
      </div>
    </>
  );
};

export default EventBoxSlide;
