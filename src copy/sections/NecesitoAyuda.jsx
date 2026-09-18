import SectionPage from "./SectionPage";

export default function NecesitoAyuda({ onBack }) {
  return (
    <SectionPage
      title='Necesito ayuda'
      description='Aquí encontrarás orientación y apoyo.'
      icon='❤️'
      onBack={onBack}
      items={[
    { title: 'Habla con alguien', text: 'Busca una persona de confianza y cuéntale lo que está pasando.', icon: '🫂' },
    { title: 'Si hay peligro', text: 'Si existe un riesgo inmediato, busca ayuda presencial de emergencia en tu zona.', icon: '🚨' },
    { title: 'No lo guardes todo', text: 'Pedir ayuda es una forma de cuidarte.', icon: '💗' }
      ]}
    />
  );
}
