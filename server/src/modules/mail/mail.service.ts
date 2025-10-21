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

    async sendVerificationEmail(email: string, username: string, token: string) {
        const verifyLink = `${process.env.FRONTEND_DOMAIN}/complete-setup?token=${token}&username=${username}`

        await this.transporter.sendMail({
            from: `Happr`,
            to: email,
            subject: "Verify your email address to complete your account registration",
            html: `
                <h2>Hey ${username}, thanks for registering an account with us, to complete this registration</h2>
                <p> Kindly verify your email by clicking the button below </p>
                <a href="${verifyLink}" style="color:#4f46e5"> Verify Email </a>
            `
        })
    }

   async sendWelcomeMail(email: string, username: string) {
    await this.transporter.sendMail({
        from: `CharmingDc at Happr <no-reply@happr.me>`,
        to: email,
        subject: "Welcome to Happr 🎉 — Let’s get you smiling!",
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 40px; color: #111827;">
            <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            
            <h2 style="color: #111827; text-align: center;">Welcome to Happr, ${username}! 😊</h2>

            <p style="font-size: 16px; line-height: 1.7;">
                Hi <strong>${username}</strong>, I’m <strong>Samuel</strong> from <strong>Happr</strong> — thank you for joining our creator community!  
            </p>

            <p style="font-size: 16px; line-height: 1.7;">
                Happr lets your fans send <strong>Smiles</strong> — fun, instant tips that go straight to your bank account.  
                Whether you’re a musician, artist, gamer, or writer, Happr makes it easy to turn your creativity into support.  
            </p>

            <div style="background-color: #f3f4f6; border-radius: 10px; padding: 20px; margin: 25px 0;">
                <h3 style="color: #111827; margin-bottom: 10px;">Here’s how to get started:</h3>
                <ol style="margin: 0; padding-left: 20px; color: #374151;">
                <li>Create your Happr page — add your bio & bank info.</li>
                <li>Share your <strong>${process.env.FRONTEND_DOMAIN}/${username}</strong> link with your fans.</li>
                <li>Receive Smiles instantly, powered by <strong>Paystack</strong>.</li>
                </ol>
            </div>

            <p style="text-align: center; margin: 30px 0;">
                <a href="${process.env.FRONTEND_DOMAIN}/${username}"
                style="background-color: #4f46e5; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; display: inline-block;">
                Visit My Happr Page
                </a>
            </p>

            <p style="font-size: 15px; line-height: 1.7; color: #4b5563;">
                Your fans are waiting to support you. Share your page link, receive Smiles, and let your creativity shine.  
            </p>

            <p style="font-size: 14px; color: #6b7280;">
                Made with ❤️ in Nigeria. Built for creators who deserve to smile.
            </p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">

            <p style="font-size: 13px; color: #9ca3af; text-align: center;">
                &copy; ${new Date().getFullYear()} Happr. All rights reserved.  
                <br/>Made with love. Paid in Smiles.
            </p>
            </div>
        </div>
        `
    })
    }

}
