import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import images from "src/assets/images";
import MapContainer from "./components/MapContainer";
import EventImageCarousel from "./components/EventImageCarousel";

import moment from "moment";

import { getOneEventData } from "src/api/eventsAPI";

const EventDetails = (props) => {
  const { t } = useTranslation();
  const params = useParams();

  const eventID = params.id;

  const navigate = useNavigate();

  const [eventData, setEventData] = useState();

  const today = moment(new Date()).startOf("day");

  useEffect(() => {
    getOneEventData(eventID).then((data) => {
      if (data === "Unexpected Error" || data.status !== 200) {
        navigate("/error404");
      } else {
        setEventData(data.data);
      }
    });
  }, []);

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
                    1 +
                    "." +
                    new Date(
                      moment(eventData.startDate).format("YYYY.M.D")
                    ).getDate() +
                    (eventData.startDate != eventData.endDate
                      ? "-" +
                        (new Date(eventData.startDate).getMonth() ==
                        new Date(eventData.endDate).getMonth()
                          ? new Date(
                              moment(eventData.endDate).format("YYYY.M.D")
                            ).getDate()
                          : new Date(
                              moment(eventData.endDate).format("YYYY.M.D")
                            ).getMonth() +
                            1 +
                            "." +
                            new Date(
                              moment(eventData.endDate).format("YYYY.M.D")
                            ).getDate())
                      : "")
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
                {eventData ? eventData.openingHour.slice(0, 5) : null}
              </label>
            </div>
            <div className="EventWebsite">
              <label className="SubtitleFont">{t("related_website")}</label>
              <a
                className="DescriptFont"
                href={eventData && eventData.relatedWebsite}
              >
                {eventData && eventData.relatedWebsite}
              </a>
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
        <EventImageCarousel imageData={eventData ? eventData.mainImages : []} />
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
        {eventData && today.isAfter(eventData.endDate) ? (
          <div className="EventGallery">
            <label className="SubtitleFont">Gallery</label>
            <EventImageCarousel
              imageData={eventData ? eventData.galleries : []}
            />
          </div>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default EventDetails;
