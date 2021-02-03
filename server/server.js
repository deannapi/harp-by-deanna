const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const router = express.Router();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

// app.use(express.urlencoded({ extended: false }));


const smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.USER,
    // pass: process.env.PASS,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: process.env.OAUTH_ACCESS_TOKEN,
  },
});

smtpTransport.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("Server is ready to take messages.");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  // const title = req.body.title;
  // const description = req.body.description;
  // const date = req.body.date;
  // const startTime = req.body.startTime;
  // const endTime = req.body.endTime;
  // const city = req.body.city;
  // const state = req.body.state;
  const details = req.body.details;

  const mailOptions = {
    from: email,
    to: process.env.USER,
    subject: "Harp Gig Request",
    html: `<h1>${name} has sent a Harp Gig Request</h1>
      <p>Email: ${email} Number: ${number}</p>
      <p>Details: ${details}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    //   res.send(error);
    //   res.redirect("/#error");
    } else {
      console.log("Message was sent!", response);
    //   res.send("Email sent successfully.");
    //   res.redirect("/#success");
    }
    // smtpTransport.close();
  });
});