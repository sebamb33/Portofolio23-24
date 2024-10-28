import { H3Event, readBody } from "h3";
import nodemailer from "nodemailer";
import { defineComponent, ref } from "vue";
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
    const transporter = nodemailer.createTransport({
      host: import.meta.env.VITE_SMTP_HOST,
      port: parseInt(import.meta.env.VITE_SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: import.meta.env.VITE_SMTP_USER,
        pass: import.meta.env.VITE_SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portofolio ambona" <${import.meta.env.VITE_SMTP_USER}>`,
      to: import.meta.env.VITE_MAIL_SEND_USER,
      subject: "Demande de contact sur votre site web",
      html: generateEmailHtml(email, message),
      text: `Vous avez reçu un nouveau message de ${email}.`,
    };

    const info = await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Email envoyé avec succès.",
      data: info,
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
