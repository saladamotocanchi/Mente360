import SubcategoryPage from "../../SubcategoryPage";

export default function Amistades({ onBack }) {
  return (
    <SubcategoryPage
      category="Relaciones"
      title="Amistades"
      subtitle="Elige relaciones que te hagan bien."
      icon="👥"
      intro="Las amistades pueden aportar compañía, confianza y apoyo. También es importante reconocer cuándo una relación no te hace sentir seguro/a o respetado/a."
      steps={["Piensa en cómo te sientes después de pasar tiempo con una persona.", "Observa si puedes ser tú mismo/a.", "Valora el respeto y la confianza.", "Mantén contacto con personas que te hagan sentir acompañado/a."]}
      activity="Anota dos características que valoras en una amistad."
      tip="Una amistad saludable permite diferencias, respeto y espacio personal."
      onBack={onBack}
    />
  );
}
