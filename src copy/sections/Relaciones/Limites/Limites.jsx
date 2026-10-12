import SubcategoryPage from "../../SubcategoryPage";

export default function Limites({ onBack }) {
  return (
    <SubcategoryPage
      category="Relaciones"
      title="Límites saludables"
      subtitle="Respeta tus espacios y los de los demás."
      icon="💜"
      intro="Los límites ayudan a expresar qué aceptas, qué necesitas y qué prefieres evitar."
      steps={["Identifica una situación donde necesites un límite.", "Piensa qué quieres comunicar.", "Exprésalo con claridad y respeto.", "Acepta que otras personas también tienen límites."]}
      activity="Escribe una frase que puedas usar para decir “no” de manera respetuosa."
      tip="Un límite no garantiza que la otra persona lo acepte; si existe riesgo o violencia, pide ayuda."
      onBack={onBack}
    />
  );
}
