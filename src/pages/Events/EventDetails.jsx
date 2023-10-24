import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import images from "src/assets/images";
import MapContainer from "./components/MapContainer";

import moment from "moment";

import { getOneEventData } from "src/api/eventsAPI";
import { Thumbnail } from "react-pdf";

const EventDetails = (props) => {
  const { t } = useTranslation();
  const params = useParams();

  const eventID = params.id;

  const location = useLocation();
  const navigate = useNavigate();
  const { past, image } = location.state;

  const [eventData, setEventData] = useState();

  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [eventSlideMoving, setEventSlideMoving] = useState(0);
  const [cardSize, setCardSize] = useState(0);
  const eventSlideRef = useRef();
  const [totalSlideNum, setTotalSlideNum] = useState(0);

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
    getOneEventData(eventID).then((data) => {
      console.log(data)
      setEventData(data.data);
      console.log(data.data);
      setTotalSlideNum(data.data.mainImages.length)
    });
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
          <img
            className="EventImage"
            src={eventData ? eventData.thumbnail : null}
          ></img>

          <div className="EventOverview">
            <div className="EventTitle">
              {eventData ? eventData.title : null}
            </div>
            <div className="EventPeriod">
              <label className="SubtitleFont">
                {eventData
                  ? new Date(
                      moment(eventData.startDate).format("YYYY.M.D")
                    ).getFullYear()
                  : null}
              </label>
              <label className="SubtitleFont">
                {eventData
                  ? new Date(
                      moment(eventData.startDate).format("YYYY.M.D")
                    ).getMonth() +
                    "." +
                    new Date(
                      moment(eventData.startDate).format("YYYY.M.D")
                    ).getDate() +
                    (eventData.endDate
                      ? "-" +
                        new Date(
                          moment(eventData.endDate).format("YYYY.M.D")
                        ).getDate()
                      : null)
                  : null}
              </label>
            </div>
            <div className="EventVenue">
              <label className="SubtitleFont">{t("venue")}</label>
              <label className="DescriptFont">
                {eventData ? eventData.venue : null}
              </label>
            </div>
            <div className="EventTime">
              <label className="SubtitleFont">{t("opening_hours")}</label>
              <label className="DescriptFont">
                {eventData ? eventData.openingHour : null}
              </label>
            </div>
            <div className="EventWebsite">
              <label className="SubtitleFont">{t("related_website")}</label>
              <label className="DescriptFont">
                {eventData ? eventData.relatedWebsite : null}
              </label>
            </div>
          </div>
        </div>
        <div className="EventPurpose">
          <label className="SubtitleFont">{t("event_purpose")}</label>
          <label className="DescriptFont">
            {eventData ? eventData.purpose : null}
          </label>
        </div>
        <div className="EventDetail">
          <label className="SubtitleFont">{t("detailed_explanation")}</label>
          <label className="DescriptFont">
            {eventData ? eventData.explanation : null}
          </label>
        </div>
        <div className="EventCarousel">
          <img src={images.back_b} onClick={onBackButtonClick}></img>
          <div className="EventCarouselImages">
            <div className="EventCarouselSlide" ref={eventSlideRef}>
              {eventData
                ? eventData.mainImages.map((data) => (
                    <img className="CarouselImage" src={data} />
                  ))
                : null}
            </div>
          </div>
          <img src={images.go_b} onClick={onGoButtonClick}></img>
        </div>
        <div className="EventMap">
          <label className="SubtitleFont">Map</label>
          <div className="EventMapLocation">
            <MapContainer
              latitude={eventData ? eventData.latitude : null}
              longitude={eventData ? eventData.longitude : null}
            />
          </div>
        </div>
        {/* 지난 이벤트의 경우 Gallery 표현 */}
        {past ? (
          <div className="EventGallery">
            <label className="SubtitleFont">Gallery</label>
            <div className="EventGalleryImages">
              {eventData
                ? eventData.galleries.map((data) => <img src={data} />)
                : null}
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
