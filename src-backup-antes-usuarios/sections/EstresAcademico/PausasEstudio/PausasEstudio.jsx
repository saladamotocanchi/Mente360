import SubcategoryPage from "../../SubcategoryPage";

export default function PausasEstudio({ onBack }) {
  return (
    <SubcategoryPage
      category="EstresAcademico"
      title="Pausas activas"
      subtitle="Descansa, respira y recarga tu energía."
      icon="🌸"
      intro="Estudiar durante mucho tiempo sin pausas puede resultar agotador. Alternar concentración y descanso ayuda a mantener un ritmo sostenible."
      steps={["Elige un periodo de estudio razonable.", "Levántate durante la pausa.", "Mueve el cuerpo suavemente.", "Bebe agua y vuelve cuando estés preparado/a."]}
      activity="Programa una pausa breve durante tu próxima sesión de estudio."
      tip="La duración ideal de una pausa puede variar según la persona y la tarea."
      onBack={onBack}
    />
  );
}
