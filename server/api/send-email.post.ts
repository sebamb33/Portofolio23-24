import { H3Event, readBody } from "h3";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyCaptcha(token: string, secret: string): Promise<boolean> {
  const response = await $fetch<{ success: boolean }>(
    "https://api.hcaptcha.com/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
    },
  );
  return response.success === true;
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();
  const captchaToken = String(body?.captchaToken ?? "");

  if (!email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email et message sont requis.",
    });
  }
  if (!EMAIL_REGEX.test(email) || email.length > 254 || message.length > 5000) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email ou message invalide.",
    });
  }

  if (config.HCAPTCHA_SECRET) {
    const valid = captchaToken
      ? await verifyCaptcha(captchaToken, config.HCAPTCHA_SECRET).catch(
          () => false,
        )
      : false;
    if (!valid) {
      throw createError({
        statusCode: 403,
        statusMessage: "Captcha invalide.",
      });
    }
  } else {
    console.warn("HCAPTCHA_SECRET manquant : captcha non vérifié côté serveur.");
  }

  const resend = new Resend(config.RESEND_API_KEY);
  try {
    // Email pour moi
    const dataAdmin = await resend.emails.send({
      from: "Portfolio <portofolio@contact.sebastienambona.fr>",
      to: ["sebastien@ambona.fr"],
      replyTo: email,
      subject: "Nouveau message depuis votre portfolio",
      html: generateEmailHtml(email, message),
    });

    // Email de confirmation pour l'utilisateur
    const dataUser = await resend.emails.send({
      from: "Sébastien Ambona <portofolio@contact.sebastienambona.fr>",
      to: [email],
      subject: "Merci pour votre message",
      html: generateConfirmationEmailHtml(),
    });

    return {
      success: true,
      message: "Emails envoyés avec succès.",
      data: { dataAdmin, dataUser },
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi des emails:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de l'envoi des emails.",
    });
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
          © ${new Date().getFullYear()} Sébastien Ambona. Tous droits réservés.
        </div>
      </div>
    </body>
    </html>
  `;
}
function generateEmailHtml(userEmail: string, userMessage: string): string {
  const safeEmail = escapeHtml(userEmail);
  const safeMessage = escapeHtml(userMessage).replace(/\r?\n/g, "<br>");
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
            Vous avez reçu un nouveau message de <strong>${safeEmail}</strong>:
          </p>
          <p>${safeMessage}</p>
          <a href="mailto:${safeEmail}">Répondre</a>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Ambona Sébastien, Bordeaux. Tous droits réservés.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
