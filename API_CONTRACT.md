# API Contract — vasdev.au

All routes are Next.js App Router Route Handlers under `app/api/`.  
All requests use `Content-Type: application/json`.  
All responses return JSON.

---

## POST `/api/contact`

**Source:** "Let's Talk / Start a Project" form — `components/Contact.tsx`

### Request body

| Field     | Type   | Required | Description              |
|-----------|--------|----------|--------------------------|
| `name`    | string | ✅       | Sender's full name       |
| `email`   | string | ✅       | Sender's email address   |
| `message` | string | ✅       | Project description      |
| `budget`  | string | —        | Budget range (AUD)       |

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "budget": "$500 – $1,000",
  "message": "I need a landing page for my bakery."
}
```

### Responses

| Status | Body                                          |
|--------|-----------------------------------------------|
| 200    | `{ "success": true }`                         |
| 400    | `{ "error": "name, email and message are required" }` |

---

## POST `/api/seo-audit`

**Source:** "Get Your Free SEO Audit" banner — `components/SeoAuditBanner.tsx`

### Request body

| Field   | Type   | Required | Description                  |
|---------|--------|----------|------------------------------|
| `url`   | string | ✅       | Website URL to audit         |
| `email` | string | ✅       | Email to send the audit to   |

```json
{
  "url": "https://example.com.au",
  "email": "owner@example.com.au"
}
```

### Responses

| Status | Body                                        |
|--------|---------------------------------------------|
| 200    | `{ "success": true }`                       |
| 400    | `{ "error": "url and email are required" }` |

---

## POST `/api/faq-question`

**Source:** "Still have questions?" modal — `components/FAQ.tsx`

### Request body

| Field      | Type   | Required | Description           |
|------------|--------|----------|-----------------------|
| `name`     | string | ✅       | Sender's full name    |
| `email`    | string | ✅       | Sender's email        |
| `question` | string | ✅       | The question content  |

```json
{
  "name": "John",
  "email": "john@example.com",
  "question": "Do you offer payment plans?"
}
```

### Responses

| Status | Body                                                      |
|--------|-----------------------------------------------------------|
| 200    | `{ "success": true }`                                     |
| 400    | `{ "error": "name, email and question are required" }`    |

---

## Wiring up email delivery

All three routes currently log submissions to the console.  
To send real emails, pick one of:

### Option A — Resend (recommended, free tier available)
```bash
pnpm add resend
```
```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "noreply@vasdev.au",
  to: "bakhmutvas@gmail.com",
  subject: "...",
  text: "...",
});
```
Add `RESEND_API_KEY=re_xxx` to `.env.local` and Vercel environment variables.

### Option B — Formspree (no backend needed)
Replace the `fetch("/api/...")` calls with `fetch("https://formspree.io/f/<your-id>")` directly in the component.

### Option C — EmailJS (client-side, no server)
Use the `emailjs-com` npm package directly in each component.

---

## Environment variables required

| Variable          | Description               | Used by          |
|-------------------|---------------------------|------------------|
| `RESEND_API_KEY`  | Resend API key (Option A) | All 3 API routes |
