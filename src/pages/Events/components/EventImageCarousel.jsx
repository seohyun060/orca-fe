import React, { useState, useRef, useEffect } from "react";

import images from "src/assets/images";

const EventImageCarousel = (props) => {
  const { imageData } = props;

  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [eventSlideMoving, setEventSlideMoving] = useState(0);
  const [cardSize, setCardSize] = useState(0);
  const eventSlideRef = useRef();
  const totalSlideNum = imageData.length;

  const onBackButtonClick = () => {
    if (currentEventSlide <= 0) {
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
    if (currentEventSlide >= totalSlideNum - 1) {
      return;
    } else {
      setEventSlideMoving(eventSlideMoving - cardSize);
      setCurrentEventSlide(currentEventSlide + 1);
      eventSlideRef.current.style.transform = `translateX(${
        eventSlideMoving - cardSize
      }px)`;
    }
  };
  const changeCardSize = (width) => {
    setEventSlideMoving(0);
    setCurrentEventSlide(0);

    if (width > 1400) {
      setCardSize(1066);
    } else if (width > 1023) {
      setCardSize(775);
    } else if (width > 767) {
      setCardSize(573);
    } else {
      setCardSize(203);
    }
    eventSlideRef.current.style.transform = "translateX(0px)";
  };

  useEffect(() => {
    eventSlideRef.current.style.transition = "transform 0.4s ease-in-out";
    changeCardSize(window.innerWidth);
  }, []);

  let delay = 50;
  let timer = null;

  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (eventSlideRef.current != null) {
        changeCardSize(window.innerWidth);
      }
    }, delay);
  });

  return (
    <div className="EventCarousel">
      <img src={images.back_b} onClick={onBackButtonClick}></img>
      <div className="EventCarouselImages">
        <div className="EventCarouselSlide" ref={eventSlideRef}>
          {imageData.length !== 0 ? (
            imageData.map((data) => (
              <img className="CarouselImage" src={data} />
            ))
          ) : (
            <div className="ImageEmpty">No images</div>
          )}
        </div>
      </div>
      <img src={images.go_b} onClick={onGoButtonClick}></img>
    </div>
  );
};

export default EventImageCarousel;
