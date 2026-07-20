import { google } from 'googleapis';
import { NextResponse } from 'next/server';

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

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return NextResponse.json({ error: 'Failed to save to Google Sheets' }, { status: 500 });
  }
}
