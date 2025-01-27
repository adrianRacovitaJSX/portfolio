// app/api/send-contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactEmail from '@/emails/ContactEmail';
import { ContactConfirmationEmail } from '@/emails/ContactConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    // Validaciones básicas
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Enviar email al administrador
    await resend.emails.send({
      from: 'aracovita.dev <avisos@aracovita.dev>',
      to: 'adrian@aracovita.dev',
      subject: `Nuevo contacto de ${name} - ${projectType}`,
      react: ContactEmail({
        name,
        email,
        company,
        projectType,
        message,
      }),
    });

    // Enviar confirmación al usuario
    await resend.emails.send({
      from: 'Adrián Racovita <adrian@aracovita.dev>',
      to: email,
      subject: 'Hemos recibido tu mensaje - Adrián Racovita',
      react: ContactConfirmationEmail({
        name,
        email,
        company,
        projectType,
        message,
      }),
    });

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}