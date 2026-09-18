import SectionPage from "./SectionPage";

export default function Relaciones({ onBack }) {
  return (
    <SectionPage
      title='Relaciones'
      description='Mejora tu comunicación y tus vínculos.'
      icon='👥'
      onBack={onBack}
      items={[
    { title: 'Comunicación', text: 'Expresa lo que sientes con claridad y respeto.', icon: '💬' },
    { title: 'Límites', text: 'Aprende a decir no cuando algo te incomoda.', icon: '🫶' },
    { title: 'Escucha', text: 'Dar espacio a la otra persona también fortalece el vínculo.', icon: '👂' }
      ]}
    />
  );
}

