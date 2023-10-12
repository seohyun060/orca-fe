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

  const [xPosition, setXPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const onBackButtonClick = () => {
    // eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
    if (currentEventSlide == totalSides) {
      setEventSlideMoving(eventSlideMoving + cardHiddenSize);
      setCurrentEventSlide(currentEventSlide - 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + cardHiddenSize
      }px)`;
    } else if (currentEventSlide <= 0) {
      eventSlideRef.current.style.transform = `translateX(${eventSlideMoving}px)`;
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
      eventSlideRef.current.style.transform = `translateX(${eventSlideMoving}px)`;
    } else {
      setEventSlideMoving(eventSlideMoving - cardSize);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - cardSize
      }px)`;
    }
  };

  const handleMouseDown = (e) => {
    setXPosition(0);
    eventSlideRef.current.style.transition = "transform ease-in-out";
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const offsetX = e.clientX - startX;
      setXPosition(offsetX);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving + xPosition
      }px)`;
    }
  };

  const handleMouseUp = (e) => {
    const offsetX = e.clientX - startX;
    eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
    if (offsetX == 0) {
      setDragging(false);
      return;
    }
    if (offsetX > 100) {
      onBackButtonClick();
    } else if (offsetX < -100) {
      onGoButtonClick();
    } else {
      eventSlideRef.current.style.transform = `translateX(${eventSlideMoving}px)`;
    }
    setXPosition(0);
    setTimeout(() => {
      setDragging(false);
    }, 0);
  };

  const handleMouseLeave = (e) => {
    if (dragging) {
      const offsetX = e.clientX - startX;
      eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      if (offsetX == 0) {
        setDragging(false);
        return;
      }
      if (offsetX > 100) {
        onBackButtonClick();
      } else if (offsetX < -100) {
        onGoButtonClick();
      } else {
        eventSlideRef.current.style.transform = `translateX(${eventSlideMoving}px)`;
      }
      setXPosition(0);
      setTimeout(() => {
        setDragging(false);
      }, 0);
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

  useEffect(() => {}, [startX, xPosition]);

  useEffect(() => {
    makeDotbar();
  }, [currentEventSlide]);

  return (
    <>
      <div
        className="EventBox"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="EventBoxSlide" ref={eventSlideRef}>
          {EventDummyData.map((data) => (
            <EventCard
              preventClick={dragging}
              inEvent={inEvent}
              title={data.title}
              eventDate={data.eventDate}
            />
          ))}
          <EventCard inEvent={inEvent} title="Coming" comingSoon={true} />
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
