import { gmailService } from "@/server-only/services/gmail.service";

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  if (!email) {
    return Response.json({ message: 'Email is a required field' }, { status: 400 })
  }
  if (!name) {
    return Response.json({ message: 'Name is a required field' }, { status: 400 })
  }
  if (!message) {
    return Response.json({ message: 'Message is a required field' }, { status: 400 })
  }

  await gmailService.sendEmail({
    email,
    message,
    name
  });

  return Response.json({ message: 'Message sent successfully!' });
}
