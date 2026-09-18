import SectionPage from "./SectionPage";

export default function BienestarDiario({ onBack }) {
  return (
    <SectionPage
      title='Bienestar diario'
      description='Cuida tus hábitos y tu energía.'
      icon='🌙'
      onBack={onBack}
      items={[
    { title: 'Sueño', text: 'Mantén una rutina de descanso que te ayude a recuperar energía.', icon: '😴' },
    { title: 'Movimiento', text: 'Incluye algo de movimiento durante el día.', icon: '🚶' },
    { title: 'Conexión', text: 'Reserva un momento para hablar o compartir con alguien.', icon: '💞' }
      ]}
    />
  );
}
