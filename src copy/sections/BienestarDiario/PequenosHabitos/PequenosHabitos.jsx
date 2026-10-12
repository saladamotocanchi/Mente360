import SubcategoryPage from "../../SubcategoryPage";

export default function PequenosHabitos({ onBack }) {
  return (
    <SubcategoryPage
      category="BienestarDiario"
      title="Pequeños hábitos"
      subtitle="Haz cosas simples que mejoren tu día a día."
      icon="☀️"
      intro="Los cambios pequeños pueden ser más fáciles de mantener cuando se integran poco a poco a la rutina."
      steps={["Elige un hábito sencillo.", "Hazlo en un momento concreto del día.", "Repítelo de manera flexible.", "Reconoce el avance, aunque haya días diferentes."]}
      activity="Elige un hábito de cinco minutos para practicar durante una semana."
      tip="No necesitas cambiar todo de una vez; busca cambios realistas para ti."
      onBack={onBack}
    />
  );
}
