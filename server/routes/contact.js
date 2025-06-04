const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'hotmail', 'outlook', 'yahoo'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // 🧠 must be your Gmail
        to: process.env.EMAIL_USER,                    // 📥 send to yourself
        replyTo: email,                                // 💬 lets you reply to user
        subject: 'New Message from Portfolio',
        text: `From: ${name} <${email}>\n\n${message}`, // 📄 include user info in body
    };


    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully!' });

  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

module.exports = router;
