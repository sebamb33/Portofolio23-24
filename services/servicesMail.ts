export interface SendEmailPayload {
  email: string;
  message: string;
  /** Jeton Cloudflare Turnstile */
  captchaToken: string;
  /** Pot de miel : doit rester vide */
  website: string;
  /** Temps passé sur le formulaire, en millisecondes */
  elapsedMs: number;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export default async function SendEmail(payload: SendEmailPayload): Promise<SendEmailResult> {
  try {
    await $fetch("/api/send-email", {
      method: "POST",
      body: payload,
    });
    return { success: true, message: "Email envoyé avec succès" };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, message: "Erreur lors de l'envoi de l'email" };
  }
}
