import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, question } = body;

  if (!name || !email || !question) {
    return NextResponse.json({ error: "name, email and question are required" }, { status: 400 });
  }

  // TODO: replace with Resend / EmailJS / Formspree
  // Example with Resend:
  // await resend.emails.send({
  //   from: "noreply@vasdev.au",
  //   to: "bakhmutvas@gmail.com",
  //   subject: `FAQ question from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\n\nQuestion:\n${question}`,
  // });
  console.log("[POST /api/faq-question]", { name, email, question });

  return NextResponse.json({ success: true });
}
