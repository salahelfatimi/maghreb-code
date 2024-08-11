import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, purpose, phone } = body;
    const data = await resend.emails.send({
      from: `${fullName}<brett@maghrebcode.com>`,
      to: "maghrebcode.contact@gmail.com",
      subject: `contact subject :${purpose} `,
      react: EmailTemplate({
        FullName: fullName,
        Phone: phone,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
