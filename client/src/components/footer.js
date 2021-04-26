import React from "react";
import deanna_favicon from "../images/favicon-32x32.png";
import harpbydeanna from '../images/harpbydeanna_cropped.png';

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <img src={harpbydeanna} alt="logo" id="footer_hbd" />
          <div className="row">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/deanna-martinez-63539a137/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.deannapi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={deanna_favicon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}
