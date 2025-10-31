const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,          // Use 465 for secure SSL
  secure: false,      // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,   // Your Gmail
    pass: process.env.EMAIL_PASS,   // Gmail App Password
  },
  tls: {
    rejectUnauthorized: false,      // Helps in some cloud environments
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready');
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent to:', to);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

module.exports = { sendEmail };
