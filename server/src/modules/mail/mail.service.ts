import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MailService {
    private emailServiceUrl = process.env.EMAIL_SERVICE_URL!

    async sendVerificationEmail(email: string, username: string, token: string) {
        try {
            const response = await axios.post(`${this.emailServiceUrl}/send-verification`, {
                email,
                username,
                token
            });
            
            console.log('Verification email sent successfully');
            return response.data;
        } catch (error) {
            console.error('Failed to send verification email:', error.response?.data || error.message);
            throw new Error('Failed to send verification email');
        }
    }

    async sendWelcomeMail(email: string, username: string) {
        try {
            const response = await axios.post(`${this.emailServiceUrl}/send-welcome`, {
                email,
                username
            });
            
            console.log('Welcome email sent successfully');
            return response.data;
        } catch (error) {
            console.error('Failed to send welcome email:', error.response?.data || error.message);
            throw new Error('Failed to send welcome email');
        }
    }
}