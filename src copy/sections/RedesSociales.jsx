import SectionPage from "./SectionPage";

export default function RedesSociales({ onBack }) {
  return (
    <SectionPage
      title='Redes sociales'
      description='Usa las redes de forma saludable.'
      icon='📱'
      onBack={onBack}
      items={[
    { title: 'Cuida tu tiempo', text: 'Observa cuánto tiempo pasas conectado/a y haz pausas.', icon: '⏳' },
    { title: 'Compara menos', text: 'Recuerda que las redes muestran solo una parte de la vida.', icon: '🌈' },
    { title: 'Protege tu privacidad', text: 'Piensa antes de compartir información personal.', icon: '🔒' }
      ]}
    />
  );
}
