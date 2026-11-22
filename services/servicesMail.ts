export interface SendEmailResult {
  success: boolean;
  message: string;
}

export default async function SendEmail(
  email: string,
  message: string,
  captchaToken: string,
): Promise<SendEmailResult> {
  try {
    await $fetch("/api/send-email", {
      method: "POST",
      body: { email, message, captchaToken },
    });
    return { success: true, message: "Email envoyé avec succès" };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, message: "Erreur lors de l'envoi de l'email" };
  }
}
