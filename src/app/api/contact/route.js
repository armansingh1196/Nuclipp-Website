import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, service, budget, message } = body;

    // Check for required environment variables
    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error('Missing Google Sheets credentials in environment variables.');
      // We don't want to throw an error that breaks the client if they haven't set it up yet, 
      // but we should return a 500 so they know it failed if they expect it to work.
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        // Replace escaped newlines with actual newlines
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Format the date
    const date = new Date().toISOString();

    // Append to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F', // Assumes a sheet named "Sheet1" and columns A to F
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [date, name, email, service, budget, message]
        ],
      },
    });

    // --- Send Email Confirmation via Nodemailer ---
    if (process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'business.nuclipp@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        const mailOptions = {
          from: '"Nuclipp" <business.nuclipp@gmail.com>',
          to: email,
          subject: 'We received your inquiry! - Nuclipp',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <h2 style="color: #D97706;">Hi ${name},</h2>
              <p>Thank you for reaching out to Nuclipp! We have successfully received your project inquiry regarding <strong>${service}</strong>.</p>
              <p>We are reviewing your details and will get back to you within 24 hours.</p>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin-top: 0;"><strong>Want to skip the wait?</strong></p>
                <p>If you haven't already booked a time on our calendar, you can schedule a discovery call directly with our team here:</p>
                <a href="https://cal.id/arman-singh/product-walkthrough?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}" style="display: inline-block; background-color: #0891B2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 10px;">Book a Discovery Call</a>
              </div>
              
              <p>Looking forward to speaking with you,</p>
              <p><strong>The Nuclipp Team</strong></p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Confirmation email sent to:", email);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // We don't fail the whole request if email fails, just log it.
      }
    } else {
      console.warn("GMAIL_APP_PASSWORD is not set. Skipping email confirmation.");
    }

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return NextResponse.json({ error: 'Failed to save to Google Sheets' }, { status: 500 });
  }
}
