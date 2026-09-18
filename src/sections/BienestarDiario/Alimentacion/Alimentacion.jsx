import SubcategoryPage from "../../SubcategoryPage";

export default function Alimentacion({ onBack }) {
  return (
    <SubcategoryPage
      category="BienestarDiario"
      title="Alimentación e hidratación"
      subtitle="Cuida lo que comes y mantente hidratado/a."
      icon="🍎"
      intro="Comer de forma variada y mantener una hidratación adecuada forman parte del cuidado diario."
      steps={["Procura tener horarios de comida regulares.", "Incluye variedad de alimentos.", "Ten agua disponible durante el día.", "Evita convertir la alimentación en una fuente de culpa."]}
      activity="Observa durante un día si recuerdas beber agua y hacer tus comidas con calma."
      tip="Las necesidades alimentarias pueden variar; ante dudas específicas, consulta a un profesional."
      onBack={onBack}
    />
  );
}
