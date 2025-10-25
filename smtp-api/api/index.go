package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"os"
	"time"

	gomail "gopkg.in/gomail.v2"
)

type VerificationRequest struct {
	Email    string `json:"email"`
	Username string `json:"username"`
	Token    string `json:"token"`
}

type WelcomeRequest struct {
	Email    string `json:"email"`
	Username string `json:"username"`
}

type Response struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

var (
	verificationTemplate = `
<div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 40px; color: #111827;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <h2 style="color: #111827; text-align: center;">Verify Your Email Address</h2>
        <p style="font-size: 16px; line-height: 1.7;">
            Hi <strong>{{.Username}}</strong>, thanks for registering an account with us!
        </p>
        <p style="font-size: 16px; line-height: 1.7;">
            To complete your registration, please verify your email by clicking the button below:
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="{{.VerifyLink}}" 
               style="background-color: #4f46e5; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; display: inline-block;">
                Verify Email
            </a>
        </div>

        <p style="font-size: 14px; color: #6b7280; text-align: center;">
            If you didn't create this account, you can safely ignore this email.
        </p>
    </div>
</div>
`

	welcomeTemplate = `
<div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 40px; color: #111827;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        
        <h2 style="color: #111827; text-align: center;">Welcome to Happr, {{.Username}}! 😊</h2>

        <p style="font-size: 16px; line-height: 1.7;">
            Hi <strong>{{.Username}}</strong>, I'm <strong>Samuel</strong> from <strong>Happr</strong> — thank you for joining our creator community!  
        </p>

        <p style="font-size: 16px; line-height: 1.7;">
            Happr lets your fans send <strong>Smiles</strong> — fun, instant tips that go straight to your bank account.  
            Whether you're a musician, artist, gamer, or writer, Happr makes it easy to turn your creativity into support.  
        </p>

        <div style="background-color: #f3f4f6; border-radius: 10px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #111827; margin-bottom: 10px;">Here's how to get started:</h3>
            <ol style="margin: 0; padding-left: 20px; color: #374151;">
            <li>Create your Happr page — add your bio & bank info.</li>
            <li>Share your <strong>{{.FrontendDomain}}/{{.Username}}</strong> link with your fans.</li>
            <li>Receive Smiles instantly, powered by <strong>Paystack</strong>.</li>
            </ol>
        </div>

        <p style="text-align: center; margin: 30px 0;">
            <a href="{{.FrontendDomain}}/{{.Username}}"
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
            &copy; {{.Year}} Happr. All rights reserved.  
            <br/>Made with love. Paid in Smiles.
        </p>
    </div>
</div>
`
)

func sendEmail(to, subject, body string) error {
	m := gomail.NewMessage()
	m.SetHeader("From", "Happr <tuoyosamuel9082@gmail.com>")
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", body)

	d := gomail.NewDialer("smtp.gmail.com", 587,
		os.Getenv("GMAIL_AUTH_USER"),
		os.Getenv("GMAIL_AUTH_PASS"))

	return d.DialAndSend(m)
}

func sendVerificationEmail(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req VerificationRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	verifyLink := fmt.Sprintf("%s/complete-setup?token=%s&username=%s",
		os.Getenv("FRONTEND_DOMAIN"), req.Token, req.Username)

	tmpl, err := template.New("verification").Parse(verificationTemplate)
	if err != nil {
		http.Error(w, "Template error", http.StatusInternalServerError)
		return
	}

	var body bytes.Buffer
	data := struct {
		Username   string
		VerifyLink string
	}{
		Username:   req.Username,
		VerifyLink: verifyLink,
	}

	if err := tmpl.Execute(&body, data); err != nil {
		http.Error(w, "Template execution error", http.StatusInternalServerError)
		return
	}

	if err := sendEmail(req.Email, "Verify your email address to complete your account registration", body.String()); err != nil {
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(Response{Success: true, Message: "Verification email sent"})
}

func sendWelcomeEmail(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req WelcomeRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	tmpl, err := template.New("welcome").Parse(welcomeTemplate)
	if err != nil {
		http.Error(w, "Template error", http.StatusInternalServerError)
		return
	}

	var body bytes.Buffer
	data := struct {
		Username       string
		FrontendDomain string
		Year           int
	}{
		Username:       req.Username,
		FrontendDomain: os.Getenv("FRONTEND_DOMAIN"),
		Year:           time.Now().Year(),
	}

	if err := tmpl.Execute(&body, data); err != nil {
		http.Error(w, "Template execution error", http.StatusInternalServerError)
		return
	}

	if err := sendEmail(req.Email, "Welcome to Happr 🎉 — Let's get you smiling!", body.String()); err != nil {
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(Response{Success: true, Message: "Welcome email sent"})
}

func healthCheck(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(Response{Success: true, Message: "Email service is running"})
}

func main() {
	http.HandleFunc("/health", healthCheck)
	http.HandleFunc("/send-verification", sendVerificationEmail)
	http.HandleFunc("/send-welcome", sendWelcomeEmail)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Email service running on port %s\n", port)
	http.ListenAndServe(":"+port, nil)
}
