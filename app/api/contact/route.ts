import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const emailWrapper = (title: string, content: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:30px 15px;">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:#1f2933; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:20px;">
                Tafaseel Architecture
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:25px;">
              <h2 style="margin-top:0; color:#111827; font-size:18px;">
                ${title}
              </h2>

              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f3f4f6; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
              © ${new Date().getFullYear()} Tafaseel Architecture  
              <br />
              This email was sent from your website.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const formData = await req.formData();
    const formType = formData.get("formType"); // 'contact' or 'consultation'

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // 465 for SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions;

    if (formType === "contact") {
      const firstName = formData.get("firstName")?.toString();
      const email = formData.get("email")?.toString();
      const phoneNumber = formData.get("phoneNumber")?.toString();
      const message = formData.get("message")?.toString();

      mailOptions = {
        from: `"Website Contact" <${process.env.SMTP_USER}>`,
        to: "info@tafaseelarch.com",
        subject: `New Contact Message from ${firstName}`,
        html: emailWrapper(
  "New Contact Message",
  `
  <table width="100%" cellpadding="6" cellspacing="0" style="font-size:14px;">
    <tr>
      <td><strong>Name:</strong></td>
      <td>${firstName}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td>${email}</td>
    </tr>
    <tr>
      <td><strong>Phone:</strong></td>
      <td>${phoneNumber}</td>
    </tr>
    <tr>
      <td valign="top"><strong>Message:</strong></td>
      <td>${message}</td>
    </tr>
  </table>
  `
),

      };
    } else if (formType === "consultation") {
      const firstName = formData.get("firstName")?.toString();
      const email = formData.get("email")?.toString();
      const phoneNumber = formData.get("phoneNumber")?.toString();
      const projectType = formData.get("projectType")?.toString();
      const emirate = formData.get("emirate")?.toString();
      const file = formData.get("file") as File | null;

      // Prepare attachments
      const attachments = file
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
              cid: file.type.startsWith("image/") ? file.name : undefined, // only embed images
            },
          ]
        : [];

      mailOptions = {
        from: `"Registration Request" <${process.env.SMTP_USER}>`,
        to: "info@tafaseelarch.com",
        subject: `New Registration Request from ${firstName}`,
        html: emailWrapper(
  "New Registration Request",
  `
  <table width="100%" cellpadding="6" cellspacing="0" style="font-size:14px;">
    <tr>
      <td><strong>Name:</strong></td>
      <td>${firstName}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td>${email}</td>
    </tr>
    <tr>
      <td><strong>Phone:</strong></td>
      <td>${phoneNumber}</td>
    </tr>
    <tr>
      <td><strong>Project Type:</strong></td>
      <td>${projectType}</td>
    </tr>
    <tr>
      <td><strong>Emirate:</strong></td>
      <td>${emirate}</td>
    </tr>
  </table>

  <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />

  <p style="font-size:14px;"><strong>Attached File:</strong></p>

  ${
    file
      ? file.type.startsWith("image/")
        ? `<img src="cid:${file.name}" alt="${file.name}" style="max-width:100%; border-radius:6px;" />`
        : `<p>${file.name}</p>`
      : `<p>No file uploaded</p>`
  }
  `
),

        attachments,
      };
    } else {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
