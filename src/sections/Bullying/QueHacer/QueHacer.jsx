import SubcategoryPage from "../../SubcategoryPage";

export default function QueHacer({ onBack }) {
  return (
    <SubcategoryPage
      category="Bullying"
      title="Qué hacer"
      subtitle="Toma decisiones seguras y protege tu bienestar."
      icon="🛡️"
      intro="Ante una situación de acoso o violencia, prioriza tu seguridad y busca personas que puedan intervenir."
      steps={["Aléjate de la situación si puedes hacerlo con seguridad.", "Busca un lugar y personas seguras.", "Cuenta lo ocurrido con claridad.", "Conserva evidencias solo si hacerlo no aumenta el riesgo."]}
      activity="Prepara una frase para pedir ayuda: “Esto está pasando y necesito que me ayudes”."
      tip="No respondas a la violencia con más violencia; busca apoyo adulto o institucional."
      onBack={onBack}
    />
  );
}
