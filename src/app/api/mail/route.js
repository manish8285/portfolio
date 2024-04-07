import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
  try {
    // Extract data from the request body
      const { name, email, subject, message } =await req.json();

      console.log(`email = ${email} , name = ${name} , subject = ${subject} , message = ${message}`)

    // Validate the presence of required fields
      if (!name || !email || !subject || !message)
      {
        
      const errorResponse = new Response(JSON.stringify({ error: 'Bad Request', message: 'Name, email, subject, and message are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return errorResponse;
      }
      
      console.log(`zho email = ${process.env.ZOHO_USER} pass = ${process.env.ZOHO_PASS}`)

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `Portfolio | "${name}" <${email}>`,
      to: process.env.DESTINATION_EMAIL, // Add your email address where you want to receive the message
      subject: subject,
      text: message,
    });

    console.log('Message sent: %s', info.messageId);
    const successResponse = new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return successResponse;
  } catch (error) {
    console.error('Error occurred while sending email:', error.message);
    const errorResponse = new Response(JSON.stringify({ success: false, error: 'Internal Server Error', message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return errorResponse;
  }
};
