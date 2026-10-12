import SubcategoryPage from "../../SubcategoryPage";

export default function ReconocerSenales({ onBack }) {
  return (
    <SubcategoryPage
      category="Bullying"
      title="Reconocer señales"
      subtitle="Aprende a identificar situaciones de riesgo."
      icon="👀"
      intro="El acoso puede incluir conductas repetidas de daño, humillación, exclusión o intimidación. Identificar señales ayuda a buscar apoyo."
      steps={["Observa cambios en el trato de otras personas.", "Presta atención a burlas, amenazas o exclusión repetida.", "Guarda información relevante si es seguro hacerlo.", "Cuéntaselo a una persona adulta de confianza o responsable."]}
      activity="Piensa en dos personas o espacios a los que podrías acudir si algo te preocupa."
      tip="No es necesario enfrentarte solo/a a una situación de acoso."
      onBack={onBack}
    />
  );
}
