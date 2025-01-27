// emails/ContactEmail.tsx
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
  
  interface ContactEmailProps {
    name: string;
    email: string;
    company?: string;
    projectType: string;
    message: string;
  }
  
  const Footer = () => (
    <Section className="mt-8 pt-8 border-t border-gray-200">
      <Text className="text-base font-semibold text-gray-800 mb-1">
        Adrián Liviu Racovita
      </Text>
      <Text className="text-sm text-gray-600 mb-3">
        Desarrollador Full-Stack
      </Text>
      <Text className="text-sm text-gray-600 mb-1">
        📱 +34 633 135 787
      </Text>
      <Text className="text-sm text-gray-600 mb-1">
        ✉️ adrian@aracovita.dev
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
  
  export default function ContactEmail({
    name,
    email,
    company,
    projectType,
    message,
  }: ContactEmailProps) {
    return (
      <Html>
        <Tailwind>
          <Body className="bg-gray-50">
            <Container className="p-8 max-w-xl bg-white rounded-lg shadow">
              <Heading className="text-2xl font-bold text-gray-900 mb-4">
                Nuevo mensaje de contacto
              </Heading>
              
              <Section className="mb-6">
                <Text className="text-sm font-medium text-gray-700 mb-1">Detalles del contacto:</Text>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text className="font-semibold text-gray-800 mb-1">Nombre:</Text>
                  <Text className="text-gray-700 mb-4">{name}</Text>
  
                  <Text className="font-semibold text-gray-800 mb-1">Email:</Text>
                  <Text className="text-gray-700 mb-4">{email}</Text>
  
                  {company && (
                    <>
                      <Text className="font-semibold text-gray-800 mb-1">Empresa:</Text>
                      <Text className="text-gray-700 mb-4">{company}</Text>
                    </>
                  )}
  
                  <Text className="font-semibold text-gray-800 mb-1">Tipo de proyecto:</Text>
                  <Text className="text-gray-700 mb-4">{getProjectTypeLabel(projectType)}</Text>
  
                  <Text className="font-semibold text-gray-800 mb-1">Mensaje:</Text>
                  <Text className="text-gray-700 whitespace-pre-wrap bg-white p-3 rounded border border-gray-200">
                    {message}
                  </Text>
                </div>
              </Section>
  
              <Hr className="border-gray-200 my-6" />
              
              <Footer />
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }