import React from "react";
import "../style/events.css";

export default function EventCard(props) {
  const { past, inEvent } = props;

  return past ? (
    <article className="EventCard Past">
      <img className="EventImage"></img>
      <div className="EventPeriod Past">
        <div className="EventTitle Past">
          The Annual Meeting of the Korean Breast Cancer Society
        </div>
        <div className="EventDate Past">23.09.01</div>
      </div>
    </article>
  ) : inEvent ? (
    <article className="EventCard InEvent">
      <div className="EventPeriod">
        <div className="EventMonth">August</div>
        <div className="EventDday">Day - 10</div>
      </div>
      <div className="EventDate">18-19</div>
      <div className="EventTitle InEvent">
        The Annual Meeting of the Korean Breast Cancer Society
      </div>
      <div className="EventTime">11:00 - 12:00</div>
    </article>
  ) : (
    <article className="EventCard">
      <div className="EventPeriod">
        <div className="EventMonth">August</div>
        <div className="EventDday">Day - 10</div>
      </div>
      <div className="EventDate">18-19</div>
      <div className="EventTitle">
        The Annual Meeting of the Korean Breast Cancer Society
      </div>
      <div className="EventTime">11:00 - 12:00</div>
    </article>
  );
}

EventCard.deafultProps = {
  inEvent: false,
  past: false,
};
