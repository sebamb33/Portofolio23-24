// make function send email

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export default async function SendEmail(email: string, message: string) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("result", result);
    } else {
      console.error("Erreur lors de l'envoi de l'email:", result.message);
    }

    return result;
  } catch (error) {
    console.error("Erreur lors de la requête d'envoi d'email:", error);
    throw error;
  }
}
function generateEmailHtml(userEmail: String, userMessage: String) {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Demande de contact</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #000;
          color: #ffffff;
          text-align: center;
          padding: 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        .logo {
          max-width: 60px;
          margin: 0 auto 10px auto;
        }
        .content {
          padding: 20px;
          color: #333333;
        }
        .content h2 {
          font-size: 18px;
          margin-top: 0;
        }
        .content p {
          line-height: 1.5;
          margin: 10px 0;
        }
        .footer {
          background-color: #f4f4f4;
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #888888;
        }
        .social-icons {
          margin: 20px 0;
        }
        .social-icons a {
          margin: 0 10px;
          text-decoration: none;
          color: #333333;
        }
        .button {
          background-color: #000;
          color: #ffffff;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          display: inline-block;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://path-to-your-logo.png" alt="Logo Ambona Sébastien" class="logo" />
          <h1>Ambona Sébastien</h1>
          <p>Développeur Web - Bordeaux</p>
        </div>
        <div class="content">
          <h2>Bonjour Sébastien,</h2>
          <p>
            Vous avez reçu un nouveau message de la part de <strong>${userEmail}</strong>.
          </p>
          <p>
            <strong>Message :</strong><br />
            ${userMessage}
          </p>
          <p>
            Vous pouvez répondre directement à cet email pour entrer en contact avec l'utilisateur.
          </p>

          <a href="mailto:${userEmail}" class="button">Répondre</a>
        </div>
        <div class="footer">
          <p>&copy; 2024 Ambona Sébastien, Bordeaux. Tous droits réservés.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
