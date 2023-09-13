import React from "react";
import "../style/events.css";
import { useNavigate } from "react-router-dom";
import images from "src/assets/images";

export default function EventCard(props) {
  const navigate = useNavigate();
  const { past, inEvent, image, title, eventDate } = props;

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

  console.log(eventDate);

  const date = new Date(eventDate);

  console.log(date);

  // 추후 Event 시작 및 종료 날짜 및 시간에 대한 데이터 상의

  return past ? (
    <article
      className="EventCard Past"
      onClick={() => navigate("/events/default", { state: { past: past } })}
    >
      <img className="EventCardImage" src={image}></img>
      <div className="EventCardPeriod Past">
        <div className="EventCardTitle Past">{title}</div>
        <div className="EventDate Past">23.09.01</div>
      </div>
    </article>
  ) : inEvent ? (
    <article
      className="EventCard InEvent"
      onClick={() => navigate("/events/default", { state: { past: past } })}
    >
      <div className="EventCardPeriod">
        <div className="EventCardMonth">{monthNames[date.getMonth()]}</div>
        <div className="EventCardDday">Day - 10</div>
      </div>
      <div className="EventCardDate">18-19</div>
      <div className="EventCardTitle InEvent">{title}</div>
      <div className="EventCardTime">11:00 - 12:00</div>
    </article>
  ) : (
    <article
      className="EventCard"
      onClick={() => navigate("/events/default", { state: { past: past } })}
    >
      <div className="EventCardPeriod">
        <div className="EventCardMonth">{monthNames[date.getMonth()]}</div>
        <div className="EventCardDday">Day - 10</div>
      </div>
      <div className="EventCardDate">18-19</div>
      <div className="EventCardTitle">{title}</div>
      <div className="EventCardTime">11:00 - 12:00</div>
    </article>
  );
}

EventCard.defaultProps = {
  inEvent: false,
  past: false,
  image: images.logo_orca,
  title: "The Annual Meeting of the Korean Breast Cancer Society",
  eventDate: "",
};
