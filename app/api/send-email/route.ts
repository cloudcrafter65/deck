import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = 'vijay@cyaire.com';

interface EmailPayload {
  type: 'interest' | 'view';
  data: {
    // For interest form
    name?: string;
    email?: string;
    company?: string;
    role?: string;
    message?: string;
    // For view tracking
    ip?: string;
    country?: string;
    city?: string;
    userAgent?: string;
    referrer?: string;
    timestamp?: string;
    deckName?: string;
  };
}

export async function POST(request: NextRequest) {
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  try {
    const payload: EmailPayload = await request.json();

    let subject: string;
    let htmlContent: string;

    if (payload.type === 'interest') {
      subject = `[AMS Interest] ${payload.data.company || 'Unknown Company'} - ${payload.data.name}`;
      htmlContent = `
        <h2>New Client Interest Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Name</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.name || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Email</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.email || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Company</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.company || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Role</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.role || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Message</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.message || 'Not provided'}</td>
          </tr>
        </table>
        <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
          Submitted at: ${new Date().toISOString()}
        </p>
      `;
    } else if (payload.type === 'view') {
      subject = `[Deck View] ${payload.data.deckName || 'AMS Client Pitch'} - ${payload.data.country || 'Unknown Location'}`;
      htmlContent = `
        <h2>New Deck View</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Deck</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.deckName || 'AMS Client Pitch'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">IP Address</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.ip || 'Unknown'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Location</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.city ? `${payload.data.city}, ` : ''}${payload.data.country || 'Unknown'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">User Agent</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-size: 12px;">${payload.data.userAgent || 'Unknown'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Referrer</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.referrer || 'Direct'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Timestamp</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.timestamp || new Date().toISOString()}</td>
          </tr>
        </table>
      `;
    } else {
      return NextResponse.json({ error: 'Invalid email type' }, { status: 400 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Cyaire Deck <notifications@cyaire.com>',
        to: [NOTIFY_EMAIL],
        subject,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, id: result.id });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
