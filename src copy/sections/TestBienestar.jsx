import React, { useMemo, useState } from "react";
import { ArrowLeft, ChevronRight, RotateCcw } from "lucide-react";

const areas = [
  {
    key: "Emociones",
    icon: "☯",
    color: "#9a8cdb",
    questions: [
      "Puedo usar mi respiración para calmarme cuando estoy tenso/a.",
      "Sé reconocer y liberar parte de la tensión de mi cuerpo.",
      "Hago pequeñas pausas cuando siento que acumulo tensión.",
      "Tengo estrategias que me ayudan a manejar el estrés del día a día.",
    ],
    resources: "Respiración · Relajación · Pausas activas · Consejos útiles",
  },
  {
    key: "Autoestima",
    icon: "♡",
    color: "#df91b5",
    questions: [
      "Puedo reconocer cualidades positivas en mí.",
      "Reconozco mis pequeños y grandes logros.",
      "Me atrevo a intentar cosas nuevas aunque pueda equivocarme.",
      "Puedo hablarme con respeto cuando cometo un error.",
    ],
    resources: "Cualidades · Logros · Confianza · Diálogo interno",
  },
  {
    key: "Estudios",
    icon: "▣",
    color: "#7fb7d8",
    questions: [
      "Puedo organizar mis tareas y decidir qué necesito hacer primero.",
      "Hago pausas durante mis sesiones de estudio.",
      "Puedo estudiar en bloques manejables sin exigirme hasta agotarme.",
      "Pido apoyo cuando una tarea o curso se me hace difícil.",
    ],
    resources: "Organizar tiempo · Pausas de estudio · Estudiar sin saturarse · Pedir apoyo",
  },
  {
    key: "Relaciones",
    icon: "♧",
    color: "#c8a36d",
    questions: [
      "Puedo expresar lo que siento de manera respetuosa.",
      "Puedo decir qué necesito y establecer límites saludables.",
      "Mis amistades suelen hacerme sentir respetado/a y seguro/a.",
      "Cuando hay un conflicto, intento escuchar y buscar soluciones.",
    ],
    resources: "Comunicación · Límites · Amistades · Conflictos",
  },
  {
    key: "Sueño",
    icon: "☾",
    color: "#9aaee2",
    questions: [
      "Cuido mis horarios para dormir lo suficiente.",
      "Procuro tener un ambiente tranquilo y cómodo para descansar.",
      "Intento reducir la estimulación antes de dormir.",
      "Reconozco cuándo necesito descansar y recuperar energía.",
    ],
    resources: "Sueño · Descanso · Rutina · Recuperación",
  },
  {
    key: "Redes sociales",
    icon: "▤",
    color: "#8fa3df",
    questions: [
      "Puedo equilibrar mi tiempo en redes con otras actividades importantes.",
      "Recuerdo que las publicaciones no muestran toda la realidad y evito compararme demasiado.",
      "Puedo tomar descansos intencionales de las pantallas y redes.",
      "Elijo seguir contenido que me aporta y evito el que afecta mi bienestar.",
    ],
    resources: "Uso equilibrado · Comparación · Descanso digital · Contenido saludable",
  },
  {
    key: "Hábitos",
    icon: "♧",
    color: "#83c99b",
    questions: [
      "Incluyo movimiento o actividad física que disfruto en mi rutina.",
      "Procuro mantener comidas regulares, variadas y una hidratación adecuada.",
      "Puedo construir pequeños hábitos realistas y reconocer mis avances.",
      "Sé pedir ayuda y buscar acompañamiento cuando una situación afecta mi bienestar.",
    ],
    resources: "Movimiento · Alimentación · Pequeños hábitos · Pedir ayuda",
  },
];

const scale = [
  { value: 1, label: "Nunca" },
  { value: 2, label: "Pocas veces" },
  { value: 3, label: "A veces" },
  { value: 4, label: "Muchas veces" },
  { value: 5, label: "Casi siempre" },
];

const STORAGE_KEY = "mente360_test_bienestar_resultado";

const styles = `
.test-wellness-page{max-width:560px;margin:0 auto;padding:10px 14px 120px;font-family:Nunito,Poppins,system-ui,sans-serif;color:#30345d}
.test-wellness-page *{box-sizing:border-box}
.test-back{border:0;background:transparent;color:#7561d8;font-weight:800;font-size:13px;display:inline-flex;align-items:center;gap:6px;padding:7px 0;cursor:pointer}
.test-header{display:flex;align-items:center;gap:12px;margin:10px 0 13px}
.test-header-icon{width:40px;height:40px;border-radius:14px;background:#e9e4ff;color:#7561d8;display:grid;place-items:center;font-size:22px;flex:0 0 40px}
.test-kicker{font-size:11px;color:#747793;font-weight:800;margin-bottom:2px}
.test-header h1{font-size:22px;line-height:1.08;margin:0;color:#51439d;letter-spacing:-.3px}
.test-header p{font-size:11px;line-height:1.35;color:#747793;margin:4px 0 0;max-width:430px}
.test-progress-top{height:31px;background:#fff;border:1px solid #e7e1f2;border-radius:12px;display:flex;align-items:center;justify-content:space-between;padding:0 11px;margin:4px 0 10px;font-size:11px;color:#747793}
.test-progress-top b{color:#7561d8;font-size:11px}
.test-area-list{display:flex;flex-direction:column;gap:7px}
.test-area-row{width:100%;min-height:49px;border:1px solid #e3dfec;background:rgba(255,255,255,.92);border-radius:13px;padding:7px 9px;display:flex;align-items:center;gap:9px;text-align:left;cursor:pointer;box-shadow:0 2px 8px rgba(102,80,150,.045);transition:transform .12s ease,border-color .12s ease}
.test-area-row:hover{transform:translateY(-1px);border-color:#d7d0e8}
.test-area-icon{width:27px;height:27px;border-radius:9px;display:grid;place-items:center;font-size:17px;font-weight:900;flex:0 0 27px}
.test-area-main{min-width:0;flex:1;display:flex;flex-direction:column;gap:5px}
.test-area-title{font-size:12px;font-weight:900;color:#3f426b;line-height:1}
.test-bar{height:5px;background:#ebe8f2;border-radius:99px;overflow:hidden;width:100%;display:block}
.test-bar span{display:block;height:100%;border-radius:99px;min-width:0;transition:width .25s ease}
.test-score{font-size:11px;font-weight:900;color:#5c5f80;white-space:nowrap;min-width:29px;text-align:right}
.test-primary,.test-map-button{border:0;width:100%;border-radius:15px;padding:12px 16px;background:#8c79d9;color:#fff;font-weight:900;font-size:12px;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;box-shadow:0 5px 12px rgba(117,97,216,.16)}
.test-actions{margin-top:13px;display:flex;flex-direction:column;gap:7px}
.test-secondary{border:0;background:#eeeafb;color:#51439d;border-radius:13px;padding:10px 14px;font-weight:900;font-size:11px;display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer}
.test-map-button{margin-top:9px;background:#8f7cda}
.test-note{text-align:center;font-size:10px;line-height:1.4;color:#85879b;margin:9px auto 0;max-width:440px}
.test-question-card{background:#fff;border:1px solid #e5e1ed;border-radius:18px;padding:16px;box-shadow:0 6px 18px rgba(102,80,150,.06)}
.test-question-number{display:inline-flex;background:#e9e4ff;color:#51439d;border-radius:99px;padding:5px 9px;font-size:10px;font-weight:900;margin-bottom:9px}
.test-question-card h2{font-size:17px;line-height:1.3;margin:0 0 16px;color:#30345d}
.test-options{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}
.test-option{border:1px solid #e4e0ed;background:#fff;border-radius:11px;padding:9px 3px;min-height:59px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer;color:#30345d}
.test-option span{font-size:16px;font-weight:900}.test-option small{font-size:8px;line-height:1.1;text-align:center;color:#747793;font-weight:800}.test-option.selected{border:2px solid #8c79d9;background:#e9e4ff;color:#51439d}
@media(max-width:420px){.test-wellness-page{padding-left:10px;padding-right:10px}.test-header h1{font-size:20px}.test-header p{font-size:10px}.test-area-row{min-height:47px;padding:6px 8px}.test-area-title{font-size:11px}.test-score{font-size:10px}.test-options{gap:4px}.test-option{padding:8px 2px}.test-option small{font-size:7px}}
`;

export default function TestBienestar({ onBack, onMap }) {
  const [answers, setAnswers] = useState(() => { try { return JSON.parse(localStorage.getItem("mente360_test_bienestar_answers") || "{}"); } catch { return {}; } });
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [finished, setFinished] = useState(false);
  const [savedResult, setSavedResult] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); }
    catch { return null; }
  });

  const totalQuestions = areas.length * 4;
  const answered = Object.keys(answers).length;

  const results = useMemo(() => areas.map((area) => {
    const values = area.questions.map((_, index) => answers[`${area.key}-${index}`] || 0);
    const valid = values.filter(Boolean);
    const average = valid.length ? valid.reduce((a,b) => a+b,0) / valid.length : 0;
    return {...area, average, percent:Math.round((average/5)*100), score10:Math.round((average/5)*10)};
  }), [answers]);

  const startArea = (areaIndex) => {
    const area = areas[areaIndex];
    const first = area.questions.findIndex((_, index) => !answers[`${area.key}-${index}`]);
    setCurrentQuestion({areaIndex, questionIndex:first < 0 ? 0 : first});
  };

  const answerQuestion = (areaIndex, questionIndex, value) => {
    const area = areas[areaIndex];
    const id = `${area.key}-${questionIndex}`;
    setAnswers(current => { const next = {...current,[id]:value}; localStorage.setItem("mente360_test_bienestar_answers", JSON.stringify(next)); return next; });
    if (questionIndex < 3) setCurrentQuestion({areaIndex,questionIndex:questionIndex+1});
    else if (areaIndex < areas.length-1) setCurrentQuestion({areaIndex:areaIndex+1,questionIndex:0});
    else setCurrentQuestion(null);
  };

  const finishTest = () => {
    if (answered !== totalQuestions) return;
    const result = {date:new Date().toISOString(),areas:results.map(a=>({key:a.key,score10:a.score10,percent:a.percent,average:Number(a.average.toFixed(2))}))};
    localStorage.setItem(STORAGE_KEY,JSON.stringify(result));
    localStorage.setItem("mente360_test_bienestar_answers", JSON.stringify(answers));
    setSavedResult(result);setFinished(true);setCurrentQuestion(null);window.scrollTo({top:0,behavior:"smooth"});
  };

  const resetTest = () => { setAnswers({});setFinished(false);setSavedResult(null);setCurrentQuestion(null);localStorage.removeItem(STORAGE_KEY);localStorage.removeItem("mente360_test_bienestar_answers"); };

  if (currentQuestion) {
    const area=areas[currentQuestion.areaIndex], index=currentQuestion.questionIndex, id=`${area.key}-${index}`;
    return <><style>{styles}</style><section className="test-wellness-page">
      <button className="test-back" type="button" onClick={()=>setCurrentQuestion(null)}><ArrowLeft size={16}/> Volver al resumen</button>
      <div className="test-header"><div className="test-header-icon">{area.icon}</div><div><div className="test-kicker">Pregunta {currentQuestion.areaIndex*4+index+1} de {totalQuestions}</div><h1>{area.key}</h1><p>Responde pensando en cómo te has sentido últimamente.</p></div></div>
      <div className="test-question-card"><div className="test-question-number">{index+1} / 4</div><h2>{area.questions[index]}</h2><div className="test-options">{scale.map(o=><button key={o.value} type="button" className={answers[id]===o.value?"test-option selected":"test-option"} onClick={()=>answerQuestion(currentQuestion.areaIndex,index,o.value)}><span>{o.value}</span><small>{o.label}</small></button>)}</div></div>
    </section></>;
  }

  return <><style>{styles}</style><section className="test-wellness-page">
    <button className="test-back" type="button" onClick={onBack}><ArrowLeft size={16}/> Volver a Mente360</button>
    <div className="test-header compact"><div className="test-header-icon">🧠</div><div><h1>Test de bienestar</h1><p>Conoce cómo te encuentras en diferentes áreas. No es un diagnóstico, solo una guía.</p></div></div>
    <div className="test-progress-top"><span>{answered===0?"Comienza tu test":`${answered} de ${totalQuestions} respondidas`}</span><b>{Math.round(answered/totalQuestions*100)}%</b></div>
    <div className="test-area-list">
      {results.map((area,index)=><button key={area.key} type="button" className="test-area-row" onClick={()=>startArea(index)}>
        <span className="test-area-icon" style={{background:`${area.color}25`,color:area.color}}>{area.icon}</span>
        <span className="test-area-main"><span className="test-area-title">{area.key}</span><span className="test-bar"><span style={{width:`${area.percent}%`,background:area.color}}/></span></span>
        <span className="test-score">{area.score10}/10</span>
      </button>)}
    </div>
    <div className="test-actions">
      {answered===totalQuestions && <button type="button" className="test-primary" onClick={finishTest}>Ver mi resultado <ChevronRight size={17}/></button>}
      {answered<totalQuestions && <button type="button" className="test-primary" onClick={()=>{const first=areas.findIndex(a=>a.questions.some((_,i)=>!answers[`${a.key}-${i}`]));if(first>=0)startArea(first);}}>{answered===0?"Comenzar test":"Continuar test"}<ChevronRight size={17}/></button>}
      {(finished||savedResult) && <button type="button" className="test-secondary" onClick={resetTest}><RotateCcw size={16}/> Repetir test</button>}
    </div>
    <button type="button" className="test-map-button" onClick={()=>{if(typeof onMap==="function")onMap();}}>Ver mapa de bienestar</button>
    <p className="test-note">Tus resultados son orientativos y se relacionan con los recursos y subcategorías de Mente360.</p>
  </section></>;
}
