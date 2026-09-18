import SectionPage from "./SectionPage";

export default function Bullying({ onBack }) {
  return (
    <SectionPage
      title='Bullying y violencia'
      description='Infórmate y aprende a pedir ayuda.'
      icon='🛡️'
      onBack={onBack}
      items={[
    { title: 'No estás solo/a', text: 'Lo que ocurre no es culpa tuya.', icon: '💜' },
    { title: 'Busca apoyo', text: 'Habla con una persona adulta o de confianza.', icon: '🤝' },
    { title: 'Guarda evidencias', text: 'Si es seguro hacerlo, conserva mensajes o situaciones relevantes.', icon: '📝' }
      ]}
    />
  );
}
