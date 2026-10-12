import SubcategoryPage from "../../SubcategoryPage";

export default function Cualidades({ onBack }) {
  return (
    <SubcategoryPage
      category="Autoestima"
      title="Conoce tus cualidades"
      subtitle="Eres más fuerte de lo que crees."
      icon="⭐"
      intro="Reconocer tus cualidades no significa compararte con otras personas; significa identificar aquello que valoras de ti."
      steps={["Piensa en una cualidad personal.", "Recuerda una situación donde la hayas demostrado.", "Escribe una segunda cualidad que quieras fortalecer.", "Pregúntate cómo puedes usarla esta semana."]}
      activity="Escribe tres cualidades tuyas y un ejemplo real de cada una."
      tip="Tus cualidades pueden cambiar y desarrollarse con la experiencia."
      onBack={onBack}
    />
  );
}
