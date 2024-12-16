import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Email para el usuario
    await resend.emails.send({
      from: "adrian@aracovita.dev",
      to: email,
      subject: "He recibido tu mensaje - aracovita.dev",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0;">
          <h2 style="color: #10B981;">Gracias por contactarme, ${name}!</h2>
          <p>He recibido tu mensaje y te responderé pronto. Aquí está el contenido de tu mensaje:</p>
          <blockquote style="border-left: 4px solid #10B981; padding-left: 15px; color: #555;">
            <p>${message}</p>
          </blockquote>
          ${company ? `<p>Tu mensaje ha sido registrado en nombre de <strong>${company}</strong>.</p>` : ''}
          <p>Te agradezco por tu paciencia. ¡Nos ponemos en contacto pronto!</p>
          <p>Saludos,</p>
          <p><strong>Adrián - Full-Stack Developer</strong></p>
          <p><em>aracovita.dev</em></p>
        </div>
      </div>
    `,
    });

    // Email para ti
    await resend.emails.send({
      from: "web@aracovita.dev",
      to: "adrian@aracovita.dev", // Tu email personal
      subject: "Nuevo mensaje de contacto - aracovita.dev",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0;">
          <h2 style="color: #10B981;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
          <p><strong>Mensaje:</strong></p>
          <blockquote style="border-left: 4px solid #10B981; padding-left: 15px; color: #555;">
            <p>${message}</p>
          </blockquote>
          <p>Responde a este mensaje para ponerte en contacto con ${name}${company ? ` de ${company}` : ''}.</p>
          <p>Saludos,</p>
          <p><strong>Adrián - Full-Stack Developer</strong></p>
          <p><em>aracovita.dev</em></p>
        </div>
      </div>
    `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al enviar el email" },
      { status: 500 }
    );
  }
}