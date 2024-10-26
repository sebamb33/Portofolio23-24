import { H3Event, readBody } from "h3";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export default async (event: H3Event) => {
  const body = await readBody(event);
  const { email, message } = body;

  if (!email || !message) {
    return {
      success: false,
      message: "Email et message sont requis.",
    };
  }

  try {
    const mailerSend = new MailerSend({
      apiKey: process.env.VITE_MAILER_SEND_KEY || "",
    });

    const sentFrom = new Sender(
      "contact@sebastienambona.fr",
      "portofolio_sebastien",
    );

    const recipients = [
      new Recipient(process.env.VITE_MAIL_SEND_USER || "", "Sebastien"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("Demande de contact sur votre site web")
      .setHtml(generateEmailHtml(email, message))
      .setText(`Vous avez reçu un nouveau message de ${email}.`);

    const response = await mailerSend.email.send(emailParams);

    return {
      success: true,
      message: "Email envoyé avec succès.",
      data: response,
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return {
      success: false,
      message: "Erreur lors de l'envoi de l'email.",
      error,
    };
  }
};

function generateEmailHtml(userEmail: string, userMessage: string): string {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Demande de contact</title>
      <style>
        /* Ton CSS pour l'email ici */
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
          <p>&copy; 2024 Ambona Sébastien, Bordeaux. Tous droits réservés.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
