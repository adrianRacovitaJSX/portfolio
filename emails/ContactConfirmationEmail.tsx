import {
    Html,
    Body,
    Container,
    Tailwind,
    Text,
    Heading,
    Hr,
    Section,
  } from '@react-email/components';
  import { format } from 'date-fns';
  import { es } from 'date-fns/locale';

interface ContactConfirmationEmailProps {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
  preferredDate?: Date | null;
  preferredTime?: string;
}

const Footer = () => (
  <Section className="mt-8 pt-8 border-t border-gray-200">
    <Text className="text-base font-semibold text-gray-800 mb-1">
      Adrián Liviu Racovita
    </Text>
    <Text className="text-sm text-gray-600 mb-3">Desarrollador Full-Stack</Text>
    <Text className="text-sm text-gray-600 mb-1">📱 +34 633 135 787</Text>
    <Text className="text-sm text-gray-600 mb-1">✉️ adrian@aracovita.dev</Text>
  </Section>
);

const getProjectTypeLabel = (type: string) => {
  const types = {
    web: "Sitio web",
    "web-app": "Aplicación Web",
    "mobile-app": "Aplicación móvil",
    "desktop-app": "Aplicación ordenador",
  };
  return types[type as keyof typeof types] || type;
};

export function ContactConfirmationEmail({
  name,
  email,
  company,
  projectType,
  message,
  preferredDate,
  preferredTime,
}: ContactConfirmationEmailProps) {
  const hasPreferredDateTime = preferredDate && preferredTime;

  return (
    <Html>
      <Tailwind>
        <Body className="bg-gray-50">
          <Container className="p-8 max-w-xl bg-white rounded-lg shadow">
            <Heading className="text-2xl font-bold text-gray-900 mb-4">
              ¡Gracias por contactar, {name}!
            </Heading>

            <Text className="text-gray-700 mb-6">
              He recibido tu mensaje y me pondré en contacto contigo{" "}
              {hasPreferredDateTime
                ? `el ${format(preferredDate, "PPP", { locale: es })} a las ${preferredTime}h`
                : "en las próximas 24 horas"}{" "}
              para discutir los detalles de tu proyecto.
            </Text>

            <Section className="mb-6">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Resumen de tu mensaje:
              </Text>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Text className="font-semibold text-gray-800 mb-1">Email:</Text>
                <Text className="text-gray-700 mb-4">{email}</Text>

                {company && (
                  <>
                    <Text className="font-semibold text-gray-800 mb-1">
                      Empresa:
                    </Text>
                    <Text className="text-gray-700 mb-4">{company}</Text>
                  </>
                )}

                <Text className="font-semibold text-gray-800 mb-1">
                  Tipo de proyecto:
                </Text>
                <Text className="text-gray-700 mb-4">
                  {getProjectTypeLabel(projectType)}
                </Text>

                {hasPreferredDateTime && (
                  <>
                    <Text className="font-semibold text-gray-800 mb-1">
                      Cita programada:
                    </Text>
                    <Text className="text-gray-700 mb-4">
                      {format(preferredDate, "PPP", { locale: es })} a las{" "}
                      {preferredTime}h
                    </Text>
                  </>
                )}

                <Text className="font-semibold text-gray-800 mb-1">
                  Tu mensaje:
                </Text>
                <Text className="text-gray-700 whitespace-pre-wrap bg-white p-3 rounded border border-gray-200">
                  {message}
                </Text>
              </div>
            </Section>

            <Text className="text-gray-700 mb-6">
              Si necesitas hacer alguna modificación o tienes información
              adicional, no dudes en responder a este email.
            </Text>

            <Hr className="border-gray-200 my-6" />

            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
