import SubcategoryPage from "../../SubcategoryPage";

export default function ContenidoSaludable({ onBack }) {
  return (
    <SubcategoryPage
      category="RedesSociales"
      title="Contenido saludable"
      subtitle="Sigue lo que te inspira, te suma y te hace bien."
      icon="✨"
      intro="Tu experiencia en redes también depende de lo que eliges seguir, ver y compartir."
      steps={["Revisa algunas cuentas que sigues.", "Pregúntate cómo te hacen sentir.", "Conserva contenido útil o positivo para ti.", "Silencia o deja de seguir lo que te afecta negativamente."]}
      activity="Haz una pequeña limpieza de tu feed."
      tip="También es importante comprobar la información antes de compartirla."
      onBack={onBack}
    />
  );
}
