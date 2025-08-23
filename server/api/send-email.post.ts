import { H3Event, readBody } from "h3";
import { Resend } from "resend";

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { email, message } = body;

  if (!email || !message) {
    return {
      success: false,
      message: "Email et message sont requis.",
    };
  }
  console.log("je suis la ");
  const resend = new Resend(config.RESEND_API_KEY);
  console.log("resend", resend);
  try {
    // Email pour moi
    const dataAdmin = await resend.emails.send({
      from: "Portfolio <portofolio@contact.sebastienambona.fr>",
      to: ["sebastien@ambona.fr"],
      subject: "Nouveau message depuis votre portfolio",
      html: generateEmailHtml(email, message),
    });
    console.log("dataAdmin", dataAdmin);

    // Email de confirmation pour l'utilisateur
    const dataUser = await resend.emails.send({
      from: "Sébastien Ambona <portofolio@contact.sebastienambona.fr>",
      to: [email.toString()],
      subject: "Merci pour votre message",
      html: generateConfirmationEmailHtml(),
    });
    console.log("dataUser", dataUser);

    return {
      success: true,
      message: "Emails envoyés avec succès.",
      data: { dataAdmin, dataUser },
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi des emails:", error);
    return {
      success: false,
      message: "Erreur lors de l'envoi des emails.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
});

// Fonction pour l'email de confirmation à l'utilisateur
function generateConfirmationEmailHtml(): string {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmation de réception</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #000000;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .logo {
          text-align: center;
          margin-bottom: 30px;
          font-size: 24px;
          font-weight: bold;
        }
        .content {
          background-color: #ffffff;
          padding: 30px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
        }
        .message {
          margin-bottom: 25px;
          font-size: 16px;
        }
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
          font-style: italic;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 12px;
          color: #666666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
        Ambona Sébastien
        </div>
        <div class="content">
          <div class="message">
            <p>Bonjour,</p>
            <p>Je vous remercie d'avoir pris le temps de me contacter via mon portfolio.</p>
            <p>J'ai bien reçu votre message et je m'engage à vous répondre dans les plus brefs délais.</p>
          </div>
          <div class="signature">
            Cordialement,<br>
            Sébastien Ambona<br>
            Développeur Web
          </div>
        </div>
        <div class="footer">
          © 2025 Sébastien Ambona. Tous droits réservés.
        </div>
      </div>
    </body>
    </html>
  `;
}
function generateEmailHtml(userEmail: string, userMessage: string): string {
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
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 5px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 0.8em;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Ambona Sébastien</h1>
          <p>Développeur Web - Bordeaux</p>
        </div>
        <div class="content">
          <p>
            Vous avez reçu un nouveau message de <strong>${userEmail}</strong>:
          </p>
          <p>${userMessage}</p>
          <a href="mailto:${userEmail}">Répondre</a>
        </div>
        <div class="footer">
          <p>&copy; 2025 Ambona Sébastien, Bordeaux. Tous droits réservés.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
