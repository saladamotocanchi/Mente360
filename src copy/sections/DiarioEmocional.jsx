import SectionPage from "./SectionPage";

export default function DiarioEmocional({ onBack }) {
  return (
    <SectionPage
      title='Diario emocional'
      description='Escribe lo que sientes cuando lo necesites.'
      icon='📝'
      onBack={onBack}
      items={[
    { title: 'Escribe sin juzgarte', text: 'Pon en palabras lo que ocurrió y cómo te hizo sentir.', icon: '✍️' },
    { title: 'Identifica patrones', text: 'Revisa qué situaciones se repiten en tus emociones.', icon: '🔎' },
    { title: 'Cierra con algo amable', text: 'Termina anotando algo que necesites, agradezcas o quieras cuidar.', icon: '🌱' }
      ]}
    />
  );
}
