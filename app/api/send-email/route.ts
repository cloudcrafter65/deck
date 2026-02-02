import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = 'vijay@cyaire.com';

interface EmailPayload {
  type: 'interest' | 'view' | 'engagement';
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
    screenSize?: string;
    language?: string;
    // Enhanced view tracking
    visitorId?: string;
    visitCount?: number;
    isReturnVisitor?: boolean;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    // For engagement tracking
    sessionDuration?: number;
    slidesViewed?: number[];
    furthestSlide?: number;
    timePerSlide?: Record<number, number>;
    totalSlides?: number;
  };
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
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
      const returnLabel = payload.data.isReturnVisitor
        ? ` (Return Visit #${payload.data.visitCount})`
        : ' (New Visitor)';
      subject = `[Deck View] ${payload.data.deckName || 'AMS Client Pitch'} - ${payload.data.country || 'Unknown'}${returnLabel}`;

      // Build UTM info row if any UTM params exist
      const hasUtm = payload.data.utmSource || payload.data.utmMedium || payload.data.utmCampaign;
      const utmParts = [];
      if (payload.data.utmSource) utmParts.push(`source=${payload.data.utmSource}`);
      if (payload.data.utmMedium) utmParts.push(`medium=${payload.data.utmMedium}`);
      if (payload.data.utmCampaign) utmParts.push(`campaign=${payload.data.utmCampaign}`);
      const utmRow = hasUtm
        ? `<tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">UTM Params</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${utmParts.join(', ')}</td>
          </tr>`
        : '';

      htmlContent = `
        <h2>New Deck View</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Deck</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.deckName || 'AMS Client Pitch'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Visitor ID</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-family: monospace; font-size: 12px;">${payload.data.visitorId || 'Unknown'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Visit Count</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.isReturnVisitor ? `Return visitor (#${payload.data.visitCount})` : 'First visit'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">IP Address</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.ip || 'Unknown'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Location</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.city ? `${payload.data.city}, ` : ''}${payload.data.country || 'Unknown'}</td>
          </tr>
          ${utmRow}
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
    } else if (payload.type === 'engagement') {
      const slidesCount = payload.data.slidesViewed?.length || 0;
      const totalSlides = payload.data.totalSlides || 18;
      const durationFormatted = formatDuration(payload.data.sessionDuration || 0);

      subject = `[Deck Engagement] ${payload.data.deckName || 'AMS Client Pitch'} - ${slidesCount}/${totalSlides} slides in ${durationFormatted}`;

      // Build time per slide rows
      const timePerSlide = payload.data.timePerSlide || {};
      const slideRows = Object.entries(timePerSlide)
        .sort(([a], [b]) => parseInt(a) - parseInt(b))
        .map(
          ([slide, time]) => `
          <tr>
            <td style="padding: 8px; border: 1px solid #e2e8f0; text-align: center;">Slide ${slide}</td>
            <td style="padding: 8px; border: 1px solid #e2e8f0; text-align: center;">${formatDuration(time as number)}</td>
          </tr>
        `
        )
        .join('');

      htmlContent = `
        <h2>Deck Engagement Summary</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Deck</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${payload.data.deckName || 'AMS Client Pitch'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Visitor ID</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-family: monospace; font-size: 12px;">${payload.data.visitorId || 'Unknown'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Session Duration</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${durationFormatted}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Slides Viewed</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${slidesCount} of ${totalSlides}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Furthest Slide</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Slide ${payload.data.furthestSlide || 1}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; background: #f8fafc;">Slides Visited</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${(payload.data.slidesViewed || []).join(', ') || 'None'}</td>
          </tr>
        </table>

        <h3>Time Per Slide</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 400px;">
          <tr>
            <th style="padding: 8px; border: 1px solid #e2e8f0; background: #f8fafc;">Slide</th>
            <th style="padding: 8px; border: 1px solid #e2e8f0; background: #f8fafc;">Time Spent</th>
          </tr>
          ${slideRows || '<tr><td colspan="2" style="padding: 8px; text-align: center;">No data</td></tr>'}
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
