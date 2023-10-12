import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import images from "src/assets/images";
import MapContainer from "./components/MapContainer";

const EventDetails = (props) => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const past = location.state.past;

  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [eventSlideMoving, setEventSlideMoving] = useState(0);
  const [cardSize, setCardSize] = useState(0);
  const eventSlideRef = useRef();
  const totalSides = 3; // 추후 갯수만큼 불러오기

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
    if (currentEventSlide >= totalSides - 1) {
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
      eventSlideRef.current.style.transform = "translateX(0px)";
    } else if (width > 1023) {
      setCardSize(775);
      eventSlideRef.current.style.transform = "translateX(0px)";
    } else if (width > 767) {
      setCardSize(573);
      eventSlideRef.current.style.transform = "translateX(0px)";
    } else {
      setCardSize(203);
      eventSlideRef.current.style.transform = "translateX(0px)";
    }
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
    <div className="Projects">
      <section className="ProjectDetailsSection">
        <div className="BackImage" onClick={() => navigate(-1)}>
          <img className="arrow" src={images.back_arrow} />
          <div>Back</div>
        </div>
        <div className="EventInformation">
          <img className="EventImage" src={images.profile}></img>

          <div className="EventOverview">
            <div className="EventTitle">
              The Annual Meeting of the Korean Breast Cancer Society
            </div>
            <div className="EventPeriod">
              <label className="SubtitleFont">2023</label>
              <label className="SubtitleFont">08.18-19</label>
            </div>
            <div className="EventVenue">
              <label className="SubtitleFont">{t("venue")}</label>
              <label className="DescriptFont">ipsum dolor sit</label>
            </div>
            <div className="EventTime">
              <label className="SubtitleFont">{t("opening_hours")}</label>
              <label className="DescriptFont">ipsum dolor sit</label>
            </div>
            <div className="EventWebsite">
              <label className="SubtitleFont">{t("related_website")}</label>
              <label className="DescriptFont">ipsum dolor sit</label>
            </div>
          </div>
        </div>
        <div className="EventPurpose">
          <label className="SubtitleFont">{t("event_purpose")}</label>
          <label className="DescriptFont">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </label>
        </div>
        <div className="EventDetail">
          <label className="SubtitleFont">{t("detailed_explanation")}</label>
          <label className="DescriptFont">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </label>
        </div>
        <div className="EventCarousel">
          <img src={images.back_b} onClick={onBackButtonClick}></img>
          <div className="EventCarouselImages">
            <div className="EventCarouselSlide" ref={eventSlideRef}>
              <img className="CarouselImage" src={images.profile}></img>
              <img className="CarouselImage" src={images.profile}></img>
              <img className="CarouselImage" src={images.profile}></img>
            </div>
          </div>
          <img src={images.go_b} onClick={onGoButtonClick}></img>
        </div>
        <div className="EventMap">
          <label className="SubtitleFont">Map</label>
          <div className="EventMapLocation">
            <MapContainer />
          </div>
        </div>
        {/* 지난 이벤트의 경우 Gallery 표현 */}
        {past ? (
          <div className="EventGallery">
            <label className="SubtitleFont">Gallery</label>
            <div className="EventGalleryImages">
              <img src={images.profile}></img>
              <img src={images.profile}></img>
              <img src={images.profile}></img>
              <img src={images.profile}></img>
            </div>
          </div>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default EventDetails;
