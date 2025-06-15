import { Link } from "react-router-dom";
import "./Events.css";

function Content() {
  return (
    <div className="banner">
      <h1 className="banner-title">Events</h1>
      <span className="banner-desc">Event Photo as background</span>
    </div>
  );
}

function Tabs() {
  return (
    <>
    <div className="section">
    <div className="tabs">
      <a className="tab">Events |&ensp;</a>
      <a className="tab">Upcoming Events &ensp;</a>
      <a className="tab">Past Event Highlights &ensp;</a>
      <hr className="tabs-hr"></hr>
    </div>
    </div>
    </>
  );
}

function UpcomingEvents() {
  return (
    <div className="upcoming-section">
      <h2 style={{textAlign:"left",
                  color:"#222"
      }}>Upcoming Events</h2>
      <div className="event-card">
        <div>
          <div className="event-title">Event Name XXX</div>
          <div>XXX</div>
          <div className="event-label">Location</div>
          <div>Date</div>
        </div>
        <Link className="register-link" to="/Event">Click Here to Register</Link>
      </div>
      <div className="event-card">
        <div>
          <div className="event-title">Event Name XXX</div>
          <div>XXX</div>
          <div className="event-label">Location</div>
          <div>Date</div>
        </div>
        <a className="register-link">Click Here to Register</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <hr />
    </div>
  );
}

export default function Events() {
  return (
    <div className="app">
      <Content />
      <Tabs />
      <UpcomingEvents />
    </div>
  );
}




