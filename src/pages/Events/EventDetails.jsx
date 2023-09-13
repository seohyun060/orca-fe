import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import images from "src/assets/images";

const EventDetails = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const past = location.state.past;

  return (
    <div className="Projects">
      <section className="ProjectDetailsSection">
        <img
          className="BackImage"
          src={images.backwithletter}
          onClick={() => navigate(-1)}
        />
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
              <label className="SubtitleFont">Venue</label>
              <label className="DescriptFont">ipsum dolor sit</label>
            </div>
            <div className="EventTime">
              <label className="SubtitleFont">Opening Hours</label>
              <label className="DescriptFont">ipsum dolor sit</label>
            </div>
            <div className="EventWebsite">
              <label className="SubtitleFont">Related Website</label>
              <label className="DescriptFont">ipsum dolor sit</label>
            </div>
          </div>
        </div>
        <div className="EventPurpose">
          <label className="SubtitleFont">Event Purpose</label>
          <label className="DescriptFont">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </label>
        </div>
        <div className="EventDetail">
          <label className="SubtitleFont">Detailed Explanation</label>
          <label className="DescriptFont">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </label>
        </div>
        <div className="EventCarousel">
          <img src={images.back_b}></img>
          <div className="EventCarouselImages">
            {/* image.map() -> image 쭉 늘어놓기? */}
            <img src={images.profile}></img>
            <img src={images.profile}></img>
          </div>
          <img src={images.go_b}></img>
        </div>
        <div className="EventMap">
          <label className="SubtitleFont">Map</label>
          <div className="EventMapLocation"></div>
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
