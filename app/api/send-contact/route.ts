import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactEmail from '@/emails/ContactEmail';
import { ContactConfirmationEmail } from '@/emails/ContactConfirmationEmail';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const resend = new Resend(process.env.RESEND_API_KEY);

const getProjectTypeLabel = (type: string) => {
  const types = {
    'web': 'Sitio web',
    'web-app': 'Aplicación Web',
    'mobile-app': 'Aplicación móvil',
    'desktop-app': 'Aplicación ordenador'
  };
  return types[type as keyof typeof types] || type;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message, preferredDate, preferredTime } = body;

    // Validaciones básicas
    if (!name || !email || !message || !projectType) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Formatear el asunto según si hay preferencia de fecha
    const hasPreferredDateTime = preferredDate && preferredTime;
    const projectLabel = getProjectTypeLabel(projectType);
    
    const subject = hasPreferredDateTime 
      ? `Nuevo contacto de ${name} - ${projectLabel} (Solicita llamada: ${format(new Date(preferredDate), "dd/MM", { locale: es })} ${preferredTime}h)`
      : `Nuevo contacto de ${name} - ${projectLabel}`;

    // Enviar email al administrador
    await resend.emails.send({
      from: 'Notificaciones - aracovita.dev <avisos@aracovita.dev>',
      to: 'adrian@aracovita.dev',
      subject: subject,
      react: ContactEmail({
        name,
        email,
        company,
        projectType,
        message,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
        preferredTime,
      }),
    });

    // Enviar confirmación al usuario
    await resend.emails.send({
      from: 'Adrián Racovita <adrian@aracovita.dev>',
      to: email,
      subject: 'He recibido tu mensaje - Hablemos de tu proyecto',
      react: ContactConfirmationEmail({
        name,
        email,
        company,
        projectType,
        message,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
        preferredTime,
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