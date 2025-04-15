export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResponse =
  | { success: true }
  | { success: false; error: string };

export async function sendContactMessage(
  data: ContactFormData
): Promise<ContactResponse> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return json as ContactResponse;
  } catch (err) {
    console.error('Request error:', err);
    return {
      success: false,
      error: 'Erro ao enviar mensagem. Tente novamente.',
    };
  }
}
