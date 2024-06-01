import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.NODEMAILER_SMTP_HOST,
  port: process.env.NODEMAILER_SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.NODEMAILER_MAIL_ID,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export default transporter