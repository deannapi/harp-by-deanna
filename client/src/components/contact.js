import React from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert2";
import harp5 from "../images/Harp5.jpeg";

export default function Contact() {
  const service_id = "harpbydeanna.gmail";
  const template_id = "harpbydeanna_template";
  const user_id = "user_Tru3DqyiMp0lrjSlsczvJ";
  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
        swal.fire(
          "Message Sent",
          "Thank you for contacting Harp By DeAnna. I will get back to you shortly!",
          "success"
        );
      },
      (error) => {
        console.log(error.text);
        swal.fire("Message Error", error.text, "error");
      }
    );
    e.target.reset();
  }

  // render() {
  return (
    <>
      {/* <Header as="h2">Get In Touch!</Header>
        <div className="contact">
          <Label className="contactLabel">Email:</Label>
          <a href="mailto:deannapi.mart@gmail.com">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-envelope-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
            deannapi.mart@gmail.com
          </a>
          <br />
          <Label className="contactLabel">Phone: </Label>
          <a href="tel:14324259101">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-telephone-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
              />
            </svg>
            (m) 432.425.9101
          </a>
        </div> */}

      <div className="contactform">
        <img src={harp5} id="harp5" alt="harp5" />
        <h5>Have all your event details? Complete the form.</h5>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label>First & Last Name</label>
          <input
            placeholder="Full name"
            type="text"
            name="user_name"
            id="name"
          />
          <label>Email</label>
          <input type="email" name="user_email" id="email" />
          <label>Phone Number</label>
          <input type="tel" name="user_number" id="number" />

          <label>Event Title</label>
          <input
            placeholder="Wedding, Birthday, Dinner..."
            type="text"
            name="title"
            id="title"
          />
          <label>Description</label>
          <input
            type="text"
            placeholder="background music"
            name="description"
            id="description"
          />

          <label>Event Date</label>
          <input type="date" name="date" id="date" />
          <label>Start Time</label>
          <input type="time" name="startTime" id="startTime" />
          <label>End Time</label>
          <input type="time" name="endTime" id="endTime" />

          <label>City</label>
          <input type="text" name="city" id="city" />
          <label>State</label>
          <input type="text" name="state" id="state" />

          <label>Other Details</label>
          <textarea
            type="text"
            placeholder="Date, Time, Location, Description"
            name="details"
            id="details"
            rows="15"
            cols="30"
          />

          <input type="submit" value="Submit" id="submit"></input>
        </form>
      </div>
    </>
  );
}
