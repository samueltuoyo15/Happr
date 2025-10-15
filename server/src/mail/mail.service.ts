import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'

@Injectable()
export class MailService {
    private transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_AUTH_USER,
            pass: process.env.GMAIL_AUTH_PASS,
        }
    })
}
