import React from "react";
// import { Link } from "react-router-dom";

export default class Events extends React.Component {
  render() {
    return (
      <>
        <div className="events">
          <h2>Events</h2>
          <ul>
            <li>Weddings</li>
            <li>Parties - Birthdays, Showers, Dinners</li>
            <li>Holidays</li>
            <li>Memorials</li>
            <li>Church</li>
            <li>Background Music</li>
            <li>Virtual Events</li>
          </ul>
          <a
            href="https://g.page/harp-by-deanna/review?gm"
            target="_blank"
            rel="noreferrer"
            className="review"
          >
            <h5>Leave a Review</h5>
          </a>
        </div>
        <br></br>
        {/* <div className="review"> */}
          {/* <Link to="https://g.page/harp-by-deanna/review?gm">
            <button>Leave a Review</button>
          </Link> */}

         
        {/* </div> */}

        <div className="embed-responsive embed-responsive-4by3">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/oeP_Bt_utPk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Greensleeves"
          ></iframe>
        </div>
      </>
    );
  }
}
