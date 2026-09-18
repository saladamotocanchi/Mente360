import SubcategoryPage from "../../SubcategoryPage";

export default function Movimiento({ onBack }) {
  return (
    <SubcategoryPage
      category="BienestarDiario"
      title="Movimiento"
      subtitle="Muévete, libera tensiones y siéntete mejor."
      icon="🏃"
      intro="La actividad física forma parte de los hábitos que favorecen el bienestar. No necesitas hacer una actividad intensa para empezar."
      steps={["Elige un movimiento que disfrutes.", "Empieza de manera gradual.", "Haz pausas para moverte durante el día.", "Escucha las señales de tu cuerpo."]}
      activity="Haz hoy una caminata, estiramiento o actividad que puedas realizar con comodidad."
      tip="Adapta la actividad a tus capacidades y evita movimientos que causen dolor."
      onBack={onBack}
    />
  );
}
