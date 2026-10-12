import SubcategoryPage from "../../SubcategoryPage";

export default function Respiracion({ onBack }) {
  return (
    <SubcategoryPage
      category="ManejoEstres"
      title="Ejercicios de respiración"
      subtitle="Respira, relájate, vuelve a ti."
      icon="🌿"
      intro="Una respiración lenta y cómoda puede ayudarte a hacer una pausa cuando notas tensión o preocupación."
      steps={["Busca una posición cómoda.", "Inhala suavemente por la nariz.", "Haz una pausa breve sin forzar.", "Exhala despacio y repite varias veces."]}
      activity="Practica durante 1–2 minutos y observa cómo te sientes antes y después."
      tip="No necesitas respirar de una forma perfecta. Si te mareas o te incomoda, detente y vuelve a respirar normalmente."
      onBack={onBack}
    />
  );
}
