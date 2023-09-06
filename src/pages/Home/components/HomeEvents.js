import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.styles.scss";
import EventCard from "../../Events/components/EventCard";

const HomeEvents = () => {
  const navigate = useNavigate();

  return (
    <section className="Section">
      <div className="SectionTitle">
        <label className="MainTitleFont">Events</label>
        <button className="ViewButton" onClick={() => navigate("/events")}>
          <label className="View">View All</label>
        </button>
      </div>
      <div className="EventBox">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default HomeEvents;
