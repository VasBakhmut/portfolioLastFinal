import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, budget } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "name, email and message are required" }, { status: 400 });
  }

  // TODO: replace with Resend / EmailJS / Formspree
  // Example with Resend:
  // await resend.emails.send({
  //   from: "noreply@vasdev.au",
  //   to: "bakhmutvas@gmail.com",
  //   subject: `New contact from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\n${message}`,
  // });
  console.log("[POST /api/contact]", { name, email, budget, message });

  return NextResponse.json({ success: true });
}
