import SubcategoryPage from "../../SubcategoryPage";

export default function Confianza({ onBack }) {
  return (
    <SubcategoryPage
      category="Autoestima"
      title="Aumenta tu confianza"
      subtitle="Pequeños pasos, grandes cambios."
      icon="🛡️"
      intro="La confianza puede crecer cuando practicas, aprendes de los errores y te permites avanzar paso a paso."
      steps={["Elige algo que quieras mejorar.", "Divide ese objetivo en una acción pequeña.", "Haz la acción aunque no salga perfecta.", "Registra qué aprendiste."]}
      activity="Elige una acción de cinco minutos que te acerque a algo que quieres conseguir."
      tip="La confianza no exige ausencia de miedo; puedes avanzar mientras sientes inseguridad."
      onBack={onBack}
    />
  );
}
