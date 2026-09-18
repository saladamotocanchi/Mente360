import SubcategoryPage from "../../SubcategoryPage";

export default function Relajacion({ onBack }) {
  return (
    <SubcategoryPage
      category="ManejoEstres"
      title="Técnicas de relajación"
      subtitle="Tu momento de calma."
      icon="🧘"
      intro="Relajarte significa darte un espacio para bajar el ritmo y prestar atención a tu cuerpo."
      steps={["Suelta los hombros y afloja la mandíbula.", "Respira de manera tranquila.", "Observa dónde sientes tensión.", "Relaja esa zona poco a poco y vuelve a tu actividad cuando estés listo/a."]}
      activity="Haz una pausa de dos minutos y realiza una revisión rápida de hombros, mandíbula, manos y piernas."
      tip="La relajación complementa tus actividades diarias; si el malestar persiste, busca apoyo."
      onBack={onBack}
    />
  );
}
