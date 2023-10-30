import React from "react";
import "../style/events.css";
import { useNavigate } from "react-router-dom";
import images from "src/assets/images";

import moment from "moment";

import { getOneEventData } from "src/api/eventsAPI";

export default function EventCard(props) {
  const navigate = useNavigate();
  const {
    id,
    preventClick,
    comingSoon,
    past,
    inEvent,
    thumbnail,
    title,
    startDate,
    endDate,
    openingHour,
    dday,
  } = props;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const start = new Date(moment(startDate).format("YYYY.M.D"));
  const end = new Date(moment(endDate).format("YYYY.M.D"));
  const now = new Date();

  const makeFullDateFormat = () => {
    return (
      start.getFullYear() + "." + (start.getMonth() + 1) + "." + start.getDate()
    );
  };

  // 추후 Event 시작 및 종료 날짜 및 시간에 대한 데이터 상의

  return past ? (
    // 이벤트 페이지 하단 과거 이벤트 카드
    <article
      className="EventCard Past"
      onClick={() => {
        navigate(`/events/${id}`, { state: { past: past } });
        window.scrollTo(0, 0);
      }}
    >
      <div className="EventCardHoverAction">
        <div>Read more</div>
      </div>
      <img className="EventCardImage" src={thumbnail}></img>
      <div className="EventCardPeriod Past">
        <div className="EventCardTitle Past">{title ? title : "No title"}</div>
        <div className="EventCardDate Past">{makeFullDateFormat()}</div>
      </div>
    </article>
  ) : inEvent ? (
    // 이벤트 페이지 상단 이벤트
    comingSoon ? (
      <article className="EventCard InEvent Coming">
        <div className="EventCardTitle Coming">Coming</div>
      </article>
    ) : (
      <article
        className="EventCard InEvent"
        onClick={() => {
          if (!preventClick) {
            navigate(`/events/${id}`, { state: { past: past } });
            window.scrollTo(0, 0);
          }
        }}
      >
        <div className="EventCardPeriod">
          <div className="EventCardMonth">{monthNames[start.getMonth()]}</div>
          <div className="EventCardDday">
            {dday > 0 ? "Day - " + dday : "D-day"}
          </div>
        </div>
        <div className="EventCardDate">
          {moment(start).format("YYYY.M.D") !== moment(end).format("YYYY.M.D")
            ? start.getDate() + "-" + end.getDate()
            : start.getDate()}
        </div>
        <div className="EventCardTitle InEvent">
          {title ? title : "No title"}
        </div>
        <div className="EventCardTime">
          {openingHour != "00:00:00" ? openingHour.slice(0, 5) : "All-Day"}
        </div>
      </article>
    )
  ) : // 시작 페이지 이벤트
  comingSoon ? (
    <article className="EventCard Coming">
      <div className="EventCardTitle Coming">Coming</div>
    </article>
  ) : (
    <article
      className="EventCard"
      onClick={() => {
        console.log(preventClick);
        if (!preventClick) {
          navigate(`/events/${id}`, { state: { past: past } });
          window.scrollTo(0, 0);
        }
      }}
    >
      <div className="EventCardPeriod">
        <div className="EventCardMonth">{monthNames[start.getMonth()]}</div>
        <div className="EventCardDday">
          {dday > 0 ? "Day - " + dday : "D-day"}
        </div>
      </div>
      <div className="EventCardDate">
        {moment(start).format("YYYY.M.D") !== moment(end).format("YYYY.M.D")
          ? start.getDate() + "-" + end.getDate()
          : start.getDate()}
      </div>
      <div className="EventCardTitle">{title ? title : "No title"}</div>
      <div className="EventCardTime">
        {openingHour != "00:00:00" ? openingHour.slice(0, 5) : "All-Day"}
      </div>
    </article>
  );
}

EventCard.defaultProps = {
  comingSoon: false,
  inEvent: false,
  past: false,
  thumbnail: "/public/assets/images/logo-orca.png",
  title: "The Annual Meeting of the Korean Breast Cancer Society",
  eventDate: "",
  startDate: "1970.01.01",
  endDate: "1970.01.01",
};
