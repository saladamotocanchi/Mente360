import SectionPage from "./SectionPage";

export default function MapaBienestar({ onBack }) {
  return (
    <SectionPage
      title='Mapa de bienestar'
      description='Descubre qué áreas necesitas cuidar más.'
      icon='🗺️'
      onBack={onBack}
      items={[
    { title: 'Emociones', text: 'Observa cómo te has sentido últimamente.', icon: '💜' },
    { title: 'Hábitos', text: 'Revisa sueño, estudio, descanso y tiempo de pantalla.', icon: '🌿' },
    { title: 'Apoyo', text: 'Identifica personas y espacios a los que puedes acudir.', icon: '🤝' }
      ]}
    />
  );
}
