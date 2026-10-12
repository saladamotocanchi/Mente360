import SubcategoryPage from "../../SubcategoryPage";

export default function DescansoDigital({ onBack }) {
  return (
    <SubcategoryPage
      category="RedesSociales"
      title="Descanso digital"
      subtitle="Desconéctate para conectar contigo mismo/a."
      icon="🌙"
      intro="Un descanso digital es un periodo intencional sin redes o pantallas para recuperar atención y tiempo."
      steps={["Elige un periodo corto sin redes.", "Silencia notificaciones si lo necesitas.", "Haz una actividad fuera de pantalla.", "Vuelve cuando realmente quieras hacerlo."]}
      activity="Prueba 20–30 minutos sin redes y observa qué haces con ese tiempo."
      tip="No se trata de abandonar la tecnología, sino de usarla de forma consciente."
      onBack={onBack}
    />
  );
}
