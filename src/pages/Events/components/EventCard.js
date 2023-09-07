import React from "react";
import "../style/Event.css";

export default function EventCard(props) {
  return (
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
