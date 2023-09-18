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
  const [cardSize, setCardSize] = useState(0);
  const [cardHiddenSize, setCardHiddenSize] = useState(0);
  const [slideImageSrc, setSlideImageSrc] = useState(
    new Array(EventDummyData.length)
  );
  const totalSides = EventDummyData.length - 1;

  const onBackButtonClick = () => {
    if (currentEventSlide == totalSides) {
      setEventSlideMoving(eventSlideMoving + cardHiddenSize);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + cardHiddenSize
      }px)`;
    } else if (currentEventSlide <= 0) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving + cardSize);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + cardSize
      }px)`;
    }
  };
  const onGoButtonClick = () => {
    if (currentEventSlide == totalSides - 1) {
      setEventSlideMoving(eventSlideMoving - cardHiddenSize);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - cardHiddenSize
      }px)`;
      // dotBarRef.current.img.src = "images.paging_dot_dark"
    } else if (currentEventSlide >= totalSides) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving - cardSize);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - cardSize
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
    const screenSize = window.innerWidth;

    if (screenSize > 1400) {
      setCardSize(432+24)
      setCardHiddenSize(152)
    } else if (screenSize > 900) {
      setCardSize(368+24)
      setCardHiddenSize(251)
    }

    console.log(window.innerWidth)

    makeDotbar();
  }, [currentEventSlide]);

  const changeCardSize = () => {
    const screenSize = window.innerWidth;
    console.log(window.innerWidth)

    if (screenSize > 1400) {
      setCardSize(432+24)
      setCardHiddenSize(152)
    } else if (screenSize > 900) {
      setCardSize(368+24)
      setCardHiddenSize(251)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', changeCardSize)
  }, []);

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
