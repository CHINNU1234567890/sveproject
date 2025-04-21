import nodemailer from 'nodemailer';
import { Contact } from '../shared/schema';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// Instead of creating a persistent transporter at the module level,
// we'll create a new one for each request to work better in serverless environments
function createTransporter() {
  // Check if required environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration: EMAIL_USER or EMAIL_PASS environment variables are not set');
    throw new Error('Email service is not properly configured');
  }

  // Create a transporter for this specific request with explicit SMTPTransport options
  return nodemailer.createTransport({
    // Explicitly cast to any to avoid TypeScript errors with the nodemailer types
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  } as any);
}

interface EmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Function to send notification email to site owner
export const sendNotificationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Create a fresh transporter for this request
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'saivinayakaenterprises13@gmail.com', // Company email
      subject: `New Service Request from ${data.name}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending notification email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      if (error.stack) console.error('Stack trace:', error.stack);
    }
    return false;
  }
};

// Function to send confirmation email to client
export const sendConfirmationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Create a fresh transporter for this request
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Your Service Request - Sai Vinayaka Enterprises',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #333;">Thank You for Your Request</h2>
          </div>
          
          <p>Dear ${data.name},</p>
          
          <p>Thank you for contacting Sai Vinayaka Enterprises. We have received your service request for <strong>${data.service}</strong>.</p>
          
          <p>Our team will review your request and get back to you within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Request Details:</h3>
            <p><strong>Service Type:</strong> ${data.service}</p>
            <p><strong>Message:</strong> ${data.message}</p>
          </div>
          
          <p>If you have any urgent questions, please contact us directly at +91-9550222151.</p>
          
          <p>Best Regards,<br>
          Sai Vinayaka Enterprises<br>
          5-3-171/22, RP ROAD, JEERA, SECUNDERABAD-500003<br>
          Phone: +91-9550222151<br>
          Email: saivinayakaenterprises13@gmail.com</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #777; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      if (error.stack) console.error('Stack trace:', error.stack);
    }
    return false;
  }
};

// Function to send a test email
export const sendTestEmail = async (receiverEmail: string): Promise<boolean> => {
  try {
    // Create a fresh transporter for this request
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: receiverEmail,
      subject: 'Test Email - Sai Vinayaka Enterprises',
      text: 'This is test mail',
      html: '<p>This is test mail</p>'
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Test email sent:', result.response);
    return true;
  } catch (error) {
    console.error('Error sending test email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      if (error.stack) console.error('Stack trace:', error.stack);
    }
    return false;
  }
};
