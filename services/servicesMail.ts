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
    if (!response.ok) {
      throw new Error(result.message || "Erreur lors de l'envoi de l'email");
    }

    return {
      success: true,
      message: "Email envoyé avec succès",
      data: result.data,
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return {
      success: false,
      message: "Erreur lors de l'envoi de l'email",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
