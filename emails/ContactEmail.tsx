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

interface ContactEmailProps {
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
    'web': 'Sitio web',
    'web-app': 'Aplicación Web',
    'mobile-app': 'Aplicación móvil',
    'desktop-app': 'Aplicación ordenador'
  };
  return types[type as keyof typeof types] || type;
};

// Función para renderizar cada campo de información
const InfoField = ({ label, value }: { label: string; value: string | React.ReactNode }) => (
  <Section className="mb-4">
    <Row>
      <Column className="w-1/3">
        <Text className="text-sm font-medium text-gray-500">{label}:</Text>
      </Column>
      <Column className="w-2/3">
        {typeof value === 'string' ? (
          <Text className="text-gray-800">{value}</Text>
        ) : (
          value
        )}
      </Column>
    </Row>
  </Section>
);

export default function ContactEmail({
  name,
  email,
  company,
  projectType,
  message,
  preferredDate,
  preferredTime,
}: ContactEmailProps) {
  const hasPreferredDateTime = preferredDate && preferredTime;
  const formattedDate = preferredDate 
    ? format(preferredDate, "PPP", { locale: es })
    : null;
  
  // Genera un ID único para este contacto
  const contactId = `CNT-${Date.now().toString().slice(-6)}`;
  
  return (
    <Html>
      <Preview>Nuevo contacto: {name} - {getProjectTypeLabel(projectType)}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="p-0 max-w-xl mx-auto">
            {/* Header */}
            <Section className="bg-white rounded-t-lg px-8 py-10 border-b border-gray-200">
              <Heading className="text-3xl font-bold text-black mb-2">
                Nuevo mensaje de contacto
              </Heading>
              <Row>
                <Column>
                  <Text className="text-black text-lg font-light">
                    ID: {contactId}
                  </Text>
                </Column>
                <Column align="right">
                  <Text className="text-black text-sm">
                    {new Date().toLocaleDateString('es-ES')}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Badge de prioridad */}
            <Section className="bg-white border-b border-gray-200 px-8 py-4">
              <Row>
                <Column>
                  <Text className="text-sm font-medium">
                    <span className="bg-amber-100 text-amber-800 py-1 px-2 rounded">
                      Requiere respuesta
                    </span>
                    {hasPreferredDateTime && (
                      <span className="bg-emerald-100 text-emerald-800 py-1 px-2 rounded ml-2">
                        Con cita solicitada
                      </span>
                    )}
                  </Text>
                </Column>
                <Column align="right">
                  <Text className="text-sm text-gray-500">
                    {projectType === 'web-app' || projectType === 'mobile-app' ? (
                      <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded">
                        Proyecto avanzado
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-800 py-1 px-2 rounded">
                        Proyecto estándar
                      </span>
                    )}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Contenido principal */}
            <Section className="bg-white px-8 py-10">
              <Heading as="h2" className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
                Información del contacto
              </Heading>

              <InfoField label="Nombre" value={name} />
              <InfoField label="Email" value={
                <Link href={`mailto:${email}`} className="text-blue-600 underline">
                  {email}
                </Link>
              } />

              {company && (
                <InfoField label="Empresa" value={company} />
              )}

              <InfoField label="Tipo de proyecto" value={
                <Text>
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {getProjectTypeLabel(projectType)}
                  </span>
                </Text>
              } />

              {hasPreferredDateTime && (
                <InfoField 
                  label="Contacto solicitado" 
                  value={
                    <Text className="text-gray-800">
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">
                        {formattedDate} a las {preferredTime}h
                      </span>
                    </Text>
                  } 
                />
              )}

              <Section className="mt-8 mb-8">
                <Heading as="h3" className="text-lg font-semibold text-gray-700 mb-4">
                  Mensaje del cliente
                </Heading>
                <Text className="text-gray-800 whitespace-pre-wrap bg-gray-50 p-4 rounded border border-gray-200 leading-relaxed">
                  {message}
                </Text>
              </Section>

              {/* Botones de acción */}
              <Section className="mb-8">
                <Row>
                  <Column>
                    <Button 
                      href={`mailto:${email}?subject=RE: Tu consulta de proyecto`}
                      className="bg-emerald-600 text-white py-3 px-4 rounded font-medium text-center"
                    >
                      Responder ahora
                    </Button>
                  </Column>
                  <Column align="right">
                    <Button 
                      href="#"
                      className="bg-gray-200 text-gray-800 py-3 px-4 rounded font-medium text-center"
                    >
                      Guardar en CRM
                    </Button>
                  </Column>
                </Row>
              </Section>

              {/* Timeline de próximos pasos */}
              <Section className="bg-gray-50 p-6 rounded-lg mb-6">
                <Heading as="h3" className="text-lg font-semibold text-gray-700 mb-4">
                  Próximos pasos recomendados
                </Heading>
                
                <Section className="mb-3 ml-6 relative">
                  <div className="absolute -left-6 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                  <Text className="text-gray-800 font-medium">Responder dentro de 24h</Text>
                  <Text className="text-gray-600 text-sm">Para mantener alto interés del cliente</Text>
                </Section>
                
                <Section className="mb-3 ml-6 relative">
                  <div className="absolute -left-6 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gray-300"></div>
                  <Text className="text-gray-800 font-medium">Programar reunión de descubrimiento</Text>
                  <Text className="text-gray-600 text-sm">
                    {hasPreferredDateTime 
                      ? `Preferencia del cliente: ${formattedDate} a las ${preferredTime}h` 
                      : 'Proponer 2-3 horarios disponibles'}
                  </Text>
                </Section>
                
                <Section className="ml-6 relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gray-300"></div>
                  <Text className="text-gray-800 font-medium">Preparar presupuesto preliminar</Text>
                  <Text className="text-gray-600 text-sm">Basado en tipo de proyecto: {getProjectTypeLabel(projectType)}</Text>
                </Section>
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