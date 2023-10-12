import React from "react";
import "../style/events.css";
import { useNavigate } from "react-router-dom";
import images from "src/assets/images";

export default function EventCard(props) {
  const navigate = useNavigate();
  const { preventClick, comingSoon, past, inEvent, image, title, eventDate } =
    props;

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

  const date = new Date(eventDate);
  const now = new Date();

  const makeFullDateFormat = () => {
    return (
      date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
    );
  };

  // 추후 Event 시작 및 종료 날짜 및 시간에 대한 데이터 상의

  return past ? (
    <article
      className="EventCard Past"
      onClick={() => {
        navigate("/events/default", { state: { past: past } });
        window.scrollTo(0, 0);
      }}
    >
      <div className="EventCardHoverAction">
        <div>Read more</div>
      </div>
      <img className="EventCardImage" src={image}></img>
      <div className="EventCardPeriod Past">
        <div className="EventCardTitle Past">{title}</div>
        <div className="EventCardDate Past">{makeFullDateFormat()}</div>
      </div>
    </article>
  ) : inEvent ? (
    comingSoon ? (
      <article className="EventCard InEvent Coming">
        <div className="EventCardTitle Coming">Coming</div>
      </article>
    ) : (
      <article
        className="EventCard InEvent"
        onClick={() => {
          console.log(preventClick);
          if (!preventClick) {
            navigate("/events/default", { state: { past: past } });
            window.scrollTo(0, 0);
          }
        }}
      >
        <div className="EventCardPeriod">
          <div className="EventCardMonth">{monthNames[date.getMonth()]}</div>
          <div className="EventCardDday">
            {now.getDate() - date.getDate()
              ? now.getDate() - date.getDate() + " - Day"
              : "D-day"}
          </div>
        </div>
        <div className="EventCardDate">18-19</div>
        <div className="EventCardTitle InEvent">{title}</div>
        <div className="EventCardTime">11:00 - 12:00</div>
      </article>
    )
  ) : comingSoon ? (
    <article className="EventCard Coming">
      <div className="EventCardTitle Coming">Coming</div>
    </article>
  ) : (
    <article
      className="EventCard"
      onClick={() => {
        console.log(preventClick);
        if (!preventClick) {
          navigate("/events/default", { state: { past: past } });
          window.scrollTo(0, 0);
        }
      }}
    >
      <div className="EventCardPeriod">
        <div className="EventCardMonth">{monthNames[date.getMonth()]}</div>
        <div className="EventCardDday">
          {now.getDate() - date.getDate()
            ? "Day - " + (now.getDate() - date.getDate())
            : "D-day"}
        </div>
      </div>
      <div className="EventCardDate">18-19</div>
      <div className="EventCardTitle">{title}</div>
      <div className="EventCardTime">11:00 - 12:00</div>
    </article>
  );
}

EventCard.defaultProps = {
  comingSoon: false,
  inEvent: false,
  past: false,
  image: images.logo_orca,
  title: "The Annual Meeting of the Korean Breast Cancer Society",
  eventDate: "",
};
