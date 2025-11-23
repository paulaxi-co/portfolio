import 'server-only'
import { gmail_v1, google } from 'googleapis';
import { IEmailDTO } from '../models/email.dto';

function printObject(obj: unknown, oKey: string = 'empty') {
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      printObject(obj[key as keyof typeof obj], `${oKey} - ${key}`);
    }
  } else {
    console.log(`${oKey} - ${obj}`)
  }


}

class GmailService {

  gmail: gmail_v1.Gmail;
  user = 'hi@paulaxi.co';

  constructor() {

    const auth = new google.auth.GoogleAuth({
      keyFile: './secret/service-account-landing.json',
      scopes: ['https://www.googleapis.com/auth/gmail.send'],
      clientOptions: {
        subject: this.user
      }
    });

    this.gmail = google.gmail({
      version: 'v1',
      auth
    })


  }


  makeEmail(to: string, from: string, subject: string, message: string) {
    const str = [
      `To: ${to}`,
      `From: ${from}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset="UTF-8"`,
      ``,
      message,
    ].join('\r\n');

    // Gmail API expects base64url encoded string:
    const encodedMessage = Buffer.from(str)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    return encodedMessage;
  }

  async sendEmail({ email, message, name }: IEmailDTO) {

    try {

      await this.gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: this.makeEmail(this.user, this.user, 'Message in contact form', `${message}\n\nFrom: ${name}<${email}>`)
        }
      });
    } catch(err) {
      /* @ts-expect-error - trust me bro */
      printObject(err.response.data, 'exc')
      throw new Error("Error while sending the email")
    }

  }
}

export const gmailService = new GmailService();
