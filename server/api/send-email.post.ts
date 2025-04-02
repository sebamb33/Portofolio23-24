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

  const resend = new Resend(config.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Portfolio <test@contact.sebastienambona.fr>", // ou votre domaine vérifié
      to: ["sebastien@ambona.fr"],
      subject: "Nouveau message depuis votre portfolio",
      html: generateEmailHtml(email, message),
    });
    return {
      success: true,
      message: "Email envoyé avec succès.",
      data,
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return {
      success: false,
      message: "Erreur lors de l'envoi de l'email.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
});

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
