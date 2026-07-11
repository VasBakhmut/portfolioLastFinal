import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { url, email } = body;

  if (!url || !email) {
    return NextResponse.json({ error: "url and email are required" }, { status: 400 });
  }

  // TODO: replace with Resend / EmailJS / Formspree
  // Example with Resend:
  // await resend.emails.send({
  //   from: "noreply@vasdev.au",
  //   to: "bakhmutvas@gmail.com",
  //   subject: `New SEO audit request from ${email}`,
  //   text: `Website: ${url}\nEmail: ${email}`,
  // });
  console.log("[POST /api/seo-audit]", { url, email });

  return NextResponse.json({ success: true });
}
