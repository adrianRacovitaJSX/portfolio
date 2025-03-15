import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Heading,
  Hr,
  Section,
  Link,
  Button,
  Preview,
  Row,
  Column,
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
  <Section className="mt-6 pt-6 border-t border-gray-200">
    <Text className="text-base font-semibold text-gray-800 mb-1">
      Adrián Liviu Racovita
    </Text>
    <Text className="text-sm text-gray-600 mb-3">Desarrollador Full-Stack</Text>
    <Text className="text-sm text-gray-600 mb-1">📱 +34 633 135 787</Text>
    <Text className="text-sm text-gray-600 mb-1">✉️ adrian@aracovita.dev</Text>
    <Text className="text-xs text-gray-500 mt-4">
      © {new Date().getFullYear()} Adrian Liviu Racovita. Todos los derechos reservados.
    </Text>
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
  const formattedDate = preferredDate 
    ? format(preferredDate, "PPP", { locale: es })
    : null;

  return (
    <Html>
      <Preview>¡Gracias por contactar, {name}! Responderemos a tu mensaje pronto.</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="p-0 max-w-xl mx-auto">
            {/* Header con fondo blanco y texto negro */}
            <Section className="bg-white rounded-t-lg px-8 py-10 border-b border-gray-200">
              <Heading className="text-3xl font-bold text-black mb-2">
                ¡Gracias por contactar, {name}!
              </Heading>
              <Text className="text-black text-lg font-light">
                Tu mensaje ha sido recibido con éxito
              </Text>
            </Section>

            {/* Contenido principal */}
            <Section className="bg-white px-8 py-10">
              <Text className="text-gray-700 mb-6">
                He recibido tu mensaje y me pondré en contacto contigo{" "}
                <span className="font-semibold">
                  {hasPreferredDateTime
                    ? `el ${formattedDate} a las ${preferredTime}h`
                    : "en las próximas 24 horas"}
                </span>{" "}
                para discutir los detalles de tu proyecto.
              </Text>

              <Section className="mb-8">
                <Heading as="h2" className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                  Resumen de tu solicitud
                </Heading>

                <Section className="mb-4">
                  <Row>
                    <Column className="w-1/3">
                      <Text className="text-sm font-medium text-gray-500">Email:</Text>
                    </Column>
                    <Column className="w-2/3">
                      <Text className="text-gray-800">{email}</Text>
                    </Column>
                  </Row>
                </Section>

                {company && (
                  <Section className="mb-4">
                    <Row>
                      <Column className="w-1/3">
                        <Text className="text-sm font-medium text-gray-500">Empresa:</Text>
                      </Column>
                      <Column className="w-2/3">
                        <Text className="text-gray-800">{company}</Text>
                      </Column>
                    </Row>
                  </Section>
                )}

                <Section className="mb-4">
                  <Row>
                    <Column className="w-1/3">
                      <Text className="text-sm font-medium text-gray-500">Tipo de proyecto:</Text>
                    </Column>
                    <Column className="w-2/3">
                      <Text className="text-gray-800">{getProjectTypeLabel(projectType)}</Text>
                    </Column>
                  </Row>
                </Section>

                {hasPreferredDateTime && (
                  <Section className="mb-4">
                    <Row>
                      <Column className="w-1/3">
                        <Text className="text-sm font-medium text-gray-500">Cita programada:</Text>
                      </Column>
                      <Column className="w-2/3">
                        <Text className="text-gray-800">
                          {formattedDate} a las {preferredTime}h
                        </Text>
                      </Column>
                    </Row>
                  </Section>
                )}

                <Section className="mt-6">
                  <Text className="text-sm font-medium text-gray-500 mb-2">Tu mensaje:</Text>
                  <Text className="text-gray-800 whitespace-pre-wrap bg-gray-50 p-4 rounded border border-gray-200">
                    {message}
                  </Text>
                </Section>
              </Section>

              <Section className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500 mb-8">
                <Text className="text-gray-800 mb-4">
                  Si necesitas hacer alguna modificación o tienes información adicional, 
                  no dudes en responder a este email.
                </Text>
                <Button 
                  href={`mailto:adrian@aracovita.dev?subject=RE: Consulta de ${name}`}
                  className="bg-emerald-600 text-white py-3 px-5 rounded font-medium"
                >
                  Responder ahora
                </Button>
              </Section>

              {/* CTA para ver portfolio */}
              <Section className="bg-gray-50 p-6 rounded-lg text-center mb-8">
                <Text className="text-gray-700 mb-4">
                  ¿Quieres ver algunos de mis proyectos anteriores mientras tanto?
                </Text>
                <Button 
                  href="#"
                  className="bg-gray-800 text-white py-3 px-5 rounded font-medium"
                >
                  Ver portfolio
                </Button>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-50 px-8 py-6 rounded-b-lg">
              <Footer />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}