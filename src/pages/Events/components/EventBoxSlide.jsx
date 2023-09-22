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
  const totalSides = EventDummyData.length - 1;



  const onBackButtonClick = () => {
    // eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
    if (currentEventSlide == totalSides) {
      setEventSlideMoving(eventSlideMoving + cardHiddenSize);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + cardHiddenSize
      }px)`;
    } else if (currentEventSlide <= 0) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving + cardSize);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + cardSize
      }px)`;
    }
  };
  const onGoButtonClick = () => {
    if (currentEventSlide == totalSides - 1) {
      setEventSlideMoving(eventSlideMoving - cardHiddenSize);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - cardHiddenSize
      }px)`;
      // dotBarRef.current.img.src = "images.paging_dot_dark"
    } else if (currentEventSlide >= totalSides) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving - cardSize);
      setCurrentEventSlide(currentEventSlide + 1);
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

  const changeCardSize = (width) => {
    setEventSlideMoving(0);
    setCurrentEventSlide(0);

    if (width > 1400) {
      setCardSize(432 + 24);
      setCardHiddenSize(152);
      eventSlideRef.current.style.transform = "translateX(0px)";
    } else if (width > 1023) {
      setCardSize(368 + 24);
      setCardHiddenSize(251);
      eventSlideRef.current.style.transform = "translateX(0px)";
    } else if (width > 767) {
      setCardSize(286 + 12);
      setCardHiddenSize(182);
      eventSlideRef.current.style.transform = "translateX(0px)";
    } else {
      setCardSize(163 + 12);
      setCardHiddenSize(163);
      eventSlideRef.current.style.transform = "translateX(0px)";
    }
  };

  let delay = 50;
  let timer = null;

  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (eventSlideRef.current) {
        changeCardSize(window.innerWidth);
      }
    }, delay);
  });


  useEffect(() => {
    eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
    changeCardSize(window.innerWidth);
  }, []);

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
            title="Comming"
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
