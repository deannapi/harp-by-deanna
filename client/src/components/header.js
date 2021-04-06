import React from "react";
// import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Harp By DeAnna</h1>
          {/* <nav> */}

          <div className="btn-group dropright">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/home">
                Home
              </a>
              <a className="dropdown-item" href="/about">
                About Me
              </a>
              <a className="dropdown-item" href="/contact">
                Contact
              </a>
              <a className="dropdown-item" href="/events">
                Events
              </a>
            </div>
          </div>
          {/* </nav> */}
        </header>
      </>
    );
  }
}
