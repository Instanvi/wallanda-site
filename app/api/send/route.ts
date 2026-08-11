import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "../../../emails/ContactFormEmail";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Missing required fields: type and data" },
        { status: 400 }
      );
    }

    let emailComponent;
    let subject = "";

    switch (type) {
      case "contact":
        subject = `New Contact Form Submission from ${data.name}`;
        emailComponent = ContactFormEmail({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          subject: data.subject,
          message: data.message,
        });
        break;

      default:
        return NextResponse.json(
          { error: `Unknown email type: ${type}` },
          { status: 400 }
        );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "wollanda Global <noreply@instanvi.com>",
      to: ["juniorthuram2@gmail.com"], 
      subject: subject,
      react: emailComponent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        emailId: emailData?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
