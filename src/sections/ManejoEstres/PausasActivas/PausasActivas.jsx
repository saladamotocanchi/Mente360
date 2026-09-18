import SubcategoryPage from "../../SubcategoryPage";

export default function PausasActivas({ onBack }) {
  return (
    <SubcategoryPage
      category="ManejoEstres"
      title="Pausas activas"
      subtitle="Muévete, despeja tu mente."
      icon="🚶"
      intro="Una pausa breve ayuda a cambiar de postura y de ritmo cuando llevas tiempo estudiando o frente a una pantalla."
      steps={["Levántate de tu asiento.", "Mueve suavemente cuello y hombros.", "Estira brazos y piernas sin dolor.", "Camina unos minutos y vuelve cuando te sientas preparado/a."]}
      activity="Programa una pausa corta durante una actividad larga y elige tres movimientos que te resulten cómodos."
      tip="Muévete de forma suave y evita cualquier ejercicio que provoque dolor."
      onBack={onBack}
    />
  );
}
