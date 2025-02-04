const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Ensure you're loading environment variables

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create transporter outside the route to avoid recreating it every time
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chasebank84363@gmail.com", // Use environment variable for email
    pass: "xjyauypjvrztpsac", // Use environment variable for password
  },
});

app.post("/", async (req, res) => {
  const { name, amount, email, givingAmount } = req.body;

  const subject = "Payment Approved!!!";
  //   const text = `Hello ${name}, we have approved your payment of ${amount} on ${date}`;

  const mailOptions = {
    from: "chasebank84363@gmail.com", // Use environment variable for email
    to: email, // Recipient's email
    subject,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Approval</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 15px;
      padding: 5px 0;
      background-color: rgba(75, 164, 224, 0.788);
    }
    .header h4 {
  color: #fff; 
  }
    .content {
      font-size: 16px;
      line-height: 1.6;
    }
    .highlight {
      color:rgba(75, 164, 224, 0.788);
      font-weight: bold;
    }
    .footer {
      margin-top: 30px;
      font-size: 14px;
      text-align: center;
      color: #777;
    }
    .footer a {
     color:rgba(75, 164, 224, 0.788);
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h4>PAYMENT APPROVED BY CHASE BANK</h4>
    </div>

    <div class="content">
      <p>Hello <strong>${name}</strong>,</p>
      <p>We have approved the sum of <span class="highlight">$${givingAmount}</span> sent from Miss Evan, We are now waiting for the sum of <span class="highlight">$${amount}</span> from you to complete the payment from bank then your chase card would be delivered to your address immediately.</p>
      <p><span class="highlight">Status:</span> pending. <br> The following payment request has been submitted.</p>
      <p><strong>Congratulations!</strong></p>
    </div>

    <div class="footer">
      <p>If you have any questions, feel free to contact Miss Evan.</p>
      <p>Best regards,<br>Chase Bank</p>
    </div>
  </div>
</body>
</html>
`,
  };

  try {
    // Await the sendMail function to resolve before continuing
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    res.status(200).send("Email sent successfully!");
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Failed to send email: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
