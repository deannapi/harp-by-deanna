import React from "react";
import harpbydeanna from '../images/harpbydeanna2_crop.png';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <img src={harpbydeanna} id="harplogo" alt="logo"/>
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
