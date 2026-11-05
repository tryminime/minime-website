import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, otp, deepLink } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Missing required parameter: email" },
        { status: 400 }
      );
    }

    const code = otp || "849201";
    const link =
      deepLink ||
      `https://www.tryminime.com/auth/verify?token=demo&email=${encodeURIComponent(
        email
      )}&otp=${code}`;

    const apiKey = process.env.RESEND_API_KEY;
    const sender = process.env.SENDER_EMAIL || "MiniMe Security <auth@tryminime.com>";

    // If Resend API key is available, send via Resend SDK
    if (apiKey && apiKey.startsWith("re_")) {
      const resend = new Resend(apiKey);

      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      background-color: #09090b;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f4f4f5;
      margin: 0;
      padding: 40px 20px;
    }
    .container {
      max-width: 520px;
      margin: 0 auto;
      background-color: #121215;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 36px 32px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    }
    .header {
      text-align: center;
      margin-bottom: 24px;
    }
    .title {
      font-size: 24px;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 8px 0;
      letter-spacing: -0.5px;
    }
    .subtitle {
      font-size: 14px;
      color: #a1a1aa;
      margin: 0 0 24px 0;
      line-height: 1.5;
    }
    .button-wrap {
      text-align: center;
      margin: 28px 0;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      padding: 14px 32px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
    }
    .otp-box {
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(139, 92, 246, 0.3);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin: 24px 0;
    }
    .otp-label {
      font-size: 12px;
      color: #a1a1aa;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
      font-family: monospace;
    }
    .otp-code {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 6px;
      color: #ffffff;
      font-family: 'JetBrains Mono', Courier, monospace;
    }
    .footer {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      margin-top: 32px;
      padding-top: 20px;
      text-align: center;
      font-size: 12px;
      color: #71717a;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="title">Sign in to MiniMe</h1>
      <p class="subtitle">Your Operating System's Cognitive Digital Twin</p>
    </div>

    <p style="font-size: 14px; line-height: 1.6; color: #d4d4d8;">
      Click the button below to authorize MiniMe on your desktop workstation:
    </p>

    <div class="button-wrap">
      <a href="${link}" class="button" target="_blank">Authorize MiniMe Desktop</a>
    </div>

    <div class="otp-box">
      <div class="otp-label">Or Enter This 6-Digit Code in App:</div>
      <div class="otp-code">${code}</div>
    </div>

    <div class="footer">
      <p>This verification link and OTP expire in 15 minutes.</p>
      <p>100% Zero-Knowledge Encrypted • Zero Screenshots • Zero Company Databases</p>
      <p>&copy; ${new Date().getFullYear()} MiniMe Inc. • https://www.tryminime.com/</p>
    </div>
  </div>
</body>
</html>
      `;

      const data = await resend.emails.send({
        from: sender,
        to: [email],
        subject: `Your MiniMe Login Code: ${code}`,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        messageId: data.data?.id,
        mode: "live",
      });
    }

    // Development / Simulation Fallback (when RESEND_API_KEY is not configured)
    console.info(
      `[MiniMe Auth Dev Mode] Magic link requested for ${email}. OTP: ${code}, DeepLink: ${link}`
    );

    return NextResponse.json({
      success: true,
      mode: "simulation",
      email,
      otp: code,
      deepLink: link,
      notice:
        "RESEND_API_KEY is not configured in environment. Returned simulated dispatch.",
    });
  } catch (error: any) {
    console.error("Failed to send magic link:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
