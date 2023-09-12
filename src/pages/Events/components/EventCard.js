import React from "react";
import "../style/events.css";
import { useNavigate } from "react-router-dom";
import images from "src/assets/images";

export default function EventCard(props) {
  const navigate = useNavigate();
  const { past, inEvent, image } = props;

  return past ? (
    <article
      className="EventCard Past"
      onClick={() => navigate("/events/default", { state: {past: past} })}
    >
      <img className="EventCardImage" src={image}></img>
      <div className="EventCardPeriod Past">
        <div className="EventCardTitle Past">
          The Annual Meeting of the Korean Breast Cancer Society
        </div>
        <div className="EventDate Past">23.09.01</div>
      </div>
    </article>
  ) : inEvent ? (
    <article className="EventCard InEvent" onClick={() => navigate("/events/default", { state: {past: past} })}>
      <div className="EventCardPeriod">
        <div className="EventCardMonth">August</div>
        <div className="EventCardDday">Day - 10</div>
      </div>
      <div className="EventCardDate">18-19</div>
      <div className="EventCardTitle InEvent">
        The Annual Meeting of the Korean Breast Cancer Society
      </div>
      <div className="EventCardTime">11:00 - 12:00</div>
    </article>
  ) : (
    <article className="EventCard" onClick={() => navigate("/events/default", { state: {past: past} })}>
      <div className="EventCardPeriod">
        <div className="EventCardMonth">August</div>
        <div className="EventCardDday">Day - 10</div>
      </div>
      <div className="EventCardDate">18-19</div>
      <div className="EventCardTitle">
        The Annual Meeting of the Korean Breast Cancer Society
      </div>
      <div className="EventCardTime">11:00 - 12:00</div>
    </article>
  );
}

EventCard.defaultProps = {
  inEvent: false,
  past: false,
  image: images.logo_orca,
};
