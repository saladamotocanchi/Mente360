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
    resources:
      "Respiración · Relajación · Pausas activas · Consejos útiles",
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
    resources:
      "Cualidades · Logros · Confianza · Diálogo interno",
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
    resources:
      "Organizar tiempo · Pausas de estudio · Estudiar sin saturarse · Pedir apoyo",
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
    resources:
      "Comunicación · Límites · Amistades · Conflictos",
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
    resources:
      "Sueño · Descanso · Rutina · Recuperación",
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
    resources:
      "Uso equilibrado · Comparación · Descanso digital · Contenido saludable",
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
    resources:
      "Movimiento · Alimentación · Pequeños hábitos · Pedir ayuda",
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
const ANSWERS_KEY = "mente360_test_bienestar_answers";

const styles = `
.test-wellness-page{
  max-width:560px;
  margin:0 auto;
  padding:10px 14px 120px;
  font-family:Nunito,Poppins,system-ui,sans-serif;
  color:#30345d
}

.test-wellness-page *{
  box-sizing:border-box
}

.test-back{
  border:0;
  background:transparent;
  color:#7561d8;
  font-weight:800;
  font-size:13px;
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:7px 0;
  cursor:pointer
}

.test-header{
  display:flex;
  align-items:center;
  gap:12px;
  margin:10px 0 13px
}

.test-header-icon{
  width:40px;
  height:40px;
  border-radius:14px;
  background:#e9e4ff;
  color:#7561d8;
  display:grid;
  place-items:center;
  font-size:22px;
  flex:0 0 40px
}

.test-kicker{
  font-size:11px;
  color:#747793;
  font-weight:800;
  margin-bottom:2px
}

.test-header h1{
  font-size:22px;
  line-height:1.08;
  margin:0;
  color:#51439d;
  letter-spacing:-.3px
}

.test-header p{
  font-size:11px;
  line-height:1.35;
  color:#747793;
  margin:4px 0 0;
  max-width:430px
}

.test-progress-top{
  height:31px;
  background:#fff;
  border:1px solid #e7e1f2;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 11px;
  margin:4px 0 10px;
  font-size:11px;
  color:#747793
}

.test-progress-top b{
  color:#7561d8;
  font-size:11px
}

.test-area-list{
  display:flex;
  flex-direction:column;
  gap:7px
}

.test-area-row{
  width:100%;
  min-height:49px;
  border:1px solid #e3dfec;
  background:rgba(255,255,255,.92);
  border-radius:13px;
  padding:7px 9px;
  display:flex;
  align-items:center;
  gap:9px;
  text-align:left;
  cursor:pointer;
  box-shadow:0 2px 8px rgba(102,80,150,.045);
  transition:transform .12s ease,border-color .12s ease
}

.test-area-row:hover{
  transform:translateY(-1px);
  border-color:#d7d0e8
}

.test-area-icon{
  width:27px;
  height:27px;
  border-radius:9px;
  display:grid;
  place-items:center;
  font-size:17px;
  font-weight:900;
  flex:0 0 27px
}

.test-area-main{
  min-width:0;
  flex:1;
  display:flex;
  flex-direction:column;
  gap:5px
}

.test-area-title{
  font-size:12px;
  font-weight:900;
  color:#3f426b;
  line-height:1
}

.test-bar{
  height:5px;
  background:#ebe8f2;
  border-radius:99px;
  overflow:hidden;
  width:100%;
  display:block
}

.test-bar span{
  display:block;
  height:100%;
  border-radius:99px;
  min-width:0;
  transition:width .25s ease
}

.test-score{
  font-size:11px;
  font-weight:900;
  color:#5c5f80;
  white-space:nowrap;
  min-width:29px;
  text-align:right
}

.test-primary,
.test-map-button{
  border:0;
  width:100%;
  border-radius:15px;
  padding:12px 16px;
  background:#8c79d9;
  color:#fff;
  font-weight:900;
  font-size:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:6px;
  cursor:pointer;
  box-shadow:0 5px 12px rgba(117,97,216,.16)
}

.test-actions{
  margin-top:13px;
  display:flex;
  flex-direction:column;
  gap:7px
}

.test-secondary{
  border:0;
  background:#eeeafb;
  color:#51439d;
  border-radius:13px;
  padding:10px 14px;
  font-weight:900;
  font-size:11px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:6px;
  cursor:pointer
}

.test-map-button{
  margin-top:9px;
  background:#8f7cda
}

.test-note{
  text-align:center;
  font-size:10px;
  line-height:1.4;
  color:#85879b;
  margin:9px auto 0;
  max-width:440px
}

.test-question-card{
  background:#fff;
  border:1px solid #e5e1ed;
  border-radius:18px;
  padding:16px;
  box-shadow:0 6px 18px rgba(102,80,150,.06)
}

.test-question-number{
  display:inline-flex;
  background:#e9e4ff;
  color:#51439d;
  border-radius:99px;
  padding:5px 9px;
  font-size:10px;
  font-weight:900;
  margin-bottom:9px
}

.test-question-card h2{
  font-size:17px;
  line-height:1.3;
  margin:0 0 16px;
  color:#30345d
}

.test-options{
  display:grid;
  grid-template-columns:repeat(5,minmax(0,1fr));
  gap:6px
}

.test-option{
  border:1px solid #e4e0ed;
  background:#fff;
  border-radius:11px;
  padding:9px 3px;
  min-height:59px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:2px;
  cursor:pointer;
  color:#30345d
}

.test-option span{
  font-size:16px;
  font-weight:900
}

.test-option small{
  font-size:8px;
  line-height:1.1;
  text-align:center;
  color:#747793;
  font-weight:800
}

.test-option.selected{
  border:2px solid #8c79d9;
  background:#e9e4ff;
  color:#51439d
}


/* RESULTADOS: mejora visual, sin modificar las preguntas ni el guardado */
.test-results{
  display:flex;
  flex-direction:column;
  gap:12px;
}
.test-results-hero{
  border:1px solid #e5dff1;
  border-radius:22px;
  padding:18px;
  background:linear-gradient(135deg,#eee8ff 0%,#fff0f7 55%,#e9f6ff 100%);
  box-shadow:0 8px 22px rgba(102,80,150,.08);
}
.test-results-scoreline{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}
.test-results-score-copy small{
  display:block;
  color:#747793;
  font-size:10px;
  font-weight:900;
}
.test-results-score-copy h2{
  margin:3px 0 0;
  color:#51439d;
  font-size:24px;
  line-height:1;
}
.test-results-score-copy p{
  margin:6px 0 0;
  color:#747793;
  font-size:10px;
  line-height:1.4;
}
.test-results-score-badge{
  min-width:72px;
  padding:10px 8px;
  border-radius:16px;
  background:rgba(255,255,255,.8);
  text-align:center;
  border:1px solid rgba(255,255,255,.9);
}
.test-results-score-badge strong{
  display:block;
  color:#51439d;
  font-size:25px;
  line-height:1;
}
.test-results-score-badge span{
  color:#747793;
  font-size:9px;
  font-weight:900;
}
.test-results-progress{
  height:8px;
  margin-top:13px;
  background:rgba(255,255,255,.72);
  border-radius:99px;
  overflow:hidden;
}
.test-results-progress span{
  display:block;
  height:100%;
  border-radius:99px;
  background:#7561d8;
}
.test-results-title{
  margin:2px 0 0;
}
.test-results-title h2{
  margin:0;
  color:#30345d;
  font-size:17px;
}
.test-results-title p{
  margin:4px 0 0;
  color:#747793;
  font-size:10px;
}
.test-results-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
}
.test-results-card{
  min-width:0;
  border:1px solid #e7e1f2;
  border-radius:16px;
  background:#fff;
  padding:11px;
  box-shadow:0 4px 12px rgba(102,80,150,.045);
}
.test-results-card-top{
  display:flex;
  align-items:center;
  gap:7px;
}
.test-results-card-icon{
  width:29px;
  height:29px;
  border-radius:9px;
  display:grid;
  place-items:center;
  font-size:16px;
  font-weight:900;
  flex:0 0 29px;
}
.test-results-card-title{
  color:#30345d;
  font-size:11px;
  line-height:1.15;
  font-weight:900;
}
.test-results-card-score{
  margin-top:9px;
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:5px;
}
.test-results-card-score strong{
  color:#30345d;
  font-size:19px;
}
.test-results-card-score span{
  color:#747793;
  font-size:9px;
  font-weight:800;
}
.test-results-card-bar{
  height:6px;
  margin-top:6px;
  background:#ece9f2;
  border-radius:99px;
  overflow:hidden;
}
.test-results-card-bar span{
  display:block;
  height:100%;
  border-radius:99px;
}
.test-results-status{
  display:inline-flex;
  margin-top:7px;
  padding:4px 7px;
  border-radius:99px;
  font-size:8px;
  line-height:1;
  font-weight:900;
}
.test-status-good{background:#dcf5e5;color:#348257}
.test-status-care{background:#fff1c9;color:#9b741e}
.test-status-attention{background:#ffe1c9;color:#c26925}
.test-results-care{
  display:flex;
  align-items:center;
  gap:10px;
  border:1px solid #e5def2;
  border-radius:17px;
  padding:12px;
  background:linear-gradient(135deg,#f2edff,#fff3f8);
}
.test-results-care-icon{
  width:38px;
  height:38px;
  border-radius:12px;
  background:#e9e4ff;
  display:grid;
  place-items:center;
  font-size:19px;
  flex:0 0 38px;
}
.test-results-care-copy{
  min-width:0;
}
.test-results-care-copy small{
  color:#747793;
  font-size:8px;
  font-weight:900;
}
.test-results-care-copy strong{
  display:block;
  margin-top:2px;
  color:#51439d;
  font-size:13px;
}
.test-results-care-copy p{
  margin:3px 0 0;
  color:#747793;
  font-size:9px;
  line-height:1.35;
}
.test-results-actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:7px;
}
.test-results-actions button{
  min-height:40px;
  border:0;
  border-radius:13px;
  font-size:10px;
  font-weight:900;
  cursor:pointer;
}
.test-results-actions .primary{
  background:#7561d8;
  color:#fff;
}
.test-results-actions .secondary{
  background:#eeeafb;
  color:#51439d;
}

@media(max-width:420px){
  .test-wellness-page{
    padding-left:10px;
    padding-right:10px
  }

  .test-header h1{
    font-size:20px
  }

  .test-header p{
    font-size:10px
  }

  .test-area-row{
    min-height:47px;
    padding:6px 8px
  }

  .test-area-title{
    font-size:11px
  }

  .test-score{
    font-size:10px
  }

  .test-options{
    gap:4px
  }

  .test-option{
    padding:8px 2px
  }

  .test-option small{
    font-size:7px
  }
  .test-results-scoreline{align-items:flex-start}
  .test-results-grid{grid-template-columns:1fr 1fr}
  .test-results-actions{grid-template-columns:1fr}
}
`;

export default function TestBienestar({ onBack, onMap }) {
  const [answers, setAnswers] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem(ANSWERS_KEY) || "{}"
      );
    } catch {
      return {};
    }
  });

  const [currentQuestion, setCurrentQuestion] = useState(null);

  const [finished, setFinished] = useState(false);

  const [savedResult, setSavedResult] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "null"
      );
    } catch {
      return null;
    }
  });

  const totalQuestions = areas.length * 4;

  const answered = Object.keys(answers).length;

  const results = useMemo(
    () =>
      areas.map((area) => {
        const values = area.questions.map(
          (_, index) =>
            answers[`${area.key}-${index}`] || 0
        );

        const valid = values.filter(Boolean);

        const average = valid.length
          ? valid.reduce((a, b) => a + b, 0) /
            valid.length
          : 0;

        return {
          ...area,
          average,
          percent: Math.round(
            (average / 5) * 100
          ),
          score10: Math.round(
            (average / 5) * 10
          ),
        };
      }),
    [answers]
  );

  const displayedResults = savedResult?.areas?.length
    ? savedResult.areas.map((savedArea) => {
        const base = areas.find((area) => area.key === savedArea.key) || {};
        const score =
          typeof savedArea.average === "number"
            ? Number((savedArea.average * 2).toFixed(1))
            : Number(savedArea.score10 || 0);

        const percent =
          typeof savedArea.average === "number"
            ? Math.round((savedArea.average / 5) * 100)
            : Number(savedArea.percent || 0);

        return {
          ...base,
          ...savedArea,
          displayScore: score,
          displayPercent: percent,
        };
      })
    : [];

  const overallScore = displayedResults.length
    ? Number(
        (
          displayedResults.reduce(
            (sum, area) => sum + Number(area.displayScore || 0),
            0
          ) / displayedResults.length
        ).toFixed(1)
      )
    : 0;

  const areaToCare = displayedResults.length
    ? displayedResults.reduce((lowest, area) =>
        Number(area.displayScore || 0) <
        Number(lowest.displayScore || 0)
          ? area
          : lowest
      )
    : null;

  const getResultStatus = (score) => {
    if (score >= 8) {
      return {
        label: "Buen progreso",
        className: "test-status-good",
      };
    }

    if (score >= 6) {
      return {
        label: "Puedes seguir cuidándolo",
        className: "test-status-care",
      };
    }

    return {
      label: "Necesita atención",
      className: "test-status-attention",
    };
  };

  const startArea = (areaIndex) => {
    const area = areas[areaIndex];

    const first = area.questions.findIndex(
      (_, index) =>
        !answers[`${area.key}-${index}`]
    );

    setCurrentQuestion({
      areaIndex,
      questionIndex:
        first < 0 ? 0 : first,
    });
  };

  const answerQuestion = (
    areaIndex,
    questionIndex,
    value
  ) => {
    const area = areas[areaIndex];

    const id = `${area.key}-${questionIndex}`;

    setAnswers((current) => {
      const next = {
        ...current,
        [id]: value,
      };

      localStorage.setItem(
        ANSWERS_KEY,
        JSON.stringify(next)
      );

      return next;
    });

    if (questionIndex < 3) {
      setCurrentQuestion({
        areaIndex,
        questionIndex:
          questionIndex + 1,
      });
    } else if (
      areaIndex <
      areas.length - 1
    ) {
      setCurrentQuestion({
        areaIndex:
          areaIndex + 1,
        questionIndex: 0,
      });
    } else {
      setCurrentQuestion(null);
    }
  };

  const finishTest = () => {
    if (answered !== totalQuestions) {
      return;
    }

    const result = {
      date: new Date().toISOString(),

      areas: results.map((area) => ({
        key: area.key,
        score10: area.score10,
        percent: area.percent,
        average: Number(
          area.average.toFixed(2)
        ),
      })),
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(result)
    );

    localStorage.setItem(
      ANSWERS_KEY,
      JSON.stringify(answers)
    );

    setSavedResult(result);
    setFinished(true);
    setCurrentQuestion(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetTest = () => {
    setAnswers({});
    setFinished(false);
    setSavedResult(null);
    setCurrentQuestion(null);

    localStorage.removeItem(
      STORAGE_KEY
    );

    localStorage.removeItem(
      ANSWERS_KEY
    );
  };

  if (currentQuestion) {
    const area =
      areas[currentQuestion.areaIndex];

    const index =
      currentQuestion.questionIndex;

    const id = `${area.key}-${index}`;

    return (
      <>
        <style>{styles}</style>

        <section className="test-wellness-page">

          <button
            className="test-back"
            type="button"
            onClick={() =>
              setCurrentQuestion(null)
            }
          >
            <ArrowLeft size={16} />
            Volver al resumen
          </button>

          <div className="test-header">

            <div className="test-header-icon">
              {area.icon}
            </div>

            <div>
              <div className="test-kicker">
                Pregunta{" "}
                {currentQuestion.areaIndex * 4 +
                  index +
                  1}{" "}
                de {totalQuestions}
              </div>

              <h1>
                {area.key}
              </h1>

              <p>
                Responde pensando en cómo te
                has sentido últimamente.
              </p>
            </div>

          </div>

          <div className="test-question-card">

            <div className="test-question-number">
              {index + 1} / 4
            </div>

            <h2>
              {area.questions[index]}
            </h2>

            <div className="test-options">

              {scale.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={
                    answers[id] ===
                    option.value
                      ? "test-option selected"
                      : "test-option"
                  }
                  onClick={() =>
                    answerQuestion(
                      currentQuestion.areaIndex,
                      index,
                      option.value
                    )
                  }
                >
                  <span>
                    {option.value}
                  </span>

                  <small>
                    {option.label}
                  </small>
                </button>
              ))}

            </div>

          </div>

        </section>
      </>
    );
  }

  if ((finished || savedResult) && savedResult) {
    return (
      <>
        <style>{styles}</style>

        <section className="test-wellness-page">
          <button
            className="test-back"
            type="button"
            onClick={onBack}
          >
            <ArrowLeft size={16} />
            Volver a Mente360
          </button>

          <div className="test-header compact">
            <div className="test-header-icon">📊</div>

            <div>
              <h1>Resultados del test</h1>

              <p>
                Un resumen visual para entender tus resultados más rápido.
              </p>
            </div>
          </div>

          <div className="test-results">
            <section className="test-results-hero">
              <div className="test-results-scoreline">
                <div className="test-results-score-copy">
                  <small>Tu bienestar general</small>
                  <h2>¡Buen trabajo! 💜</h2>
                  <p>
                    Este resultado es orientativo y puede cambiar cuando
                    vuelvas a realizar el test.
                  </p>
                </div>

                <div className="test-results-score-badge">
                  <strong>{overallScore}</strong>
                  <span>/ 10</span>
                </div>
              </div>

              <div className="test-results-progress">
                <span style={{ width: `${overallScore * 10}%` }} />
              </div>
            </section>

            <div className="test-results-title">
              <h2>Tus 7 áreas</h2>
              <p>
                Cada barra muestra de forma sencilla cómo salió cada área.
              </p>
            </div>

            <div className="test-results-grid">
              {displayedResults.map((area) => {
                const status = getResultStatus(
                  Number(area.displayScore || 0)
                );

                return (
                  <article
                    className="test-results-card"
                    key={area.key}
                  >
                    <div className="test-results-card-top">
                      <span
                        className="test-results-card-icon"
                        style={{
                          background: `${area.color}25`,
                          color: area.color,
                        }}
                      >
                        {area.icon}
                      </span>

                      <span className="test-results-card-title">
                        {area.key}
                      </span>
                    </div>

                    <div className="test-results-card-score">
                      <strong>{area.displayScore}</strong>
                      <span>/ 10</span>
                    </div>

                    <div className="test-results-card-bar">
                      <span
                        style={{
                          width: `${area.displayPercent}%`,
                          background: area.color,
                        }}
                      />
                    </div>

                    <span
                      className={`test-results-status ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </article>
                );
              })}
            </div>

            {areaToCare && (
              <section className="test-results-care">
                <div className="test-results-care-icon">🌱</div>

                <div className="test-results-care-copy">
                  <small>Área que podrías seguir cuidando</small>

                  <strong>
                    {areaToCare.key} · {areaToCare.displayScore}/10
                  </strong>

                  <p>
                    Puedes explorar las herramientas de Mente360 relacionadas
                    con esta área y avanzar poco a poco.
                  </p>
                </div>
              </section>
            )}

            <div className="test-results-actions">
              <button
                type="button"
                className="primary"
                onClick={() => {
                  if (typeof onMap === "function") {
                    onMap();
                  }
                }}
              >
                Ver mapa de bienestar
              </button>

              <button
                type="button"
                className="secondary"
                onClick={resetTest}
              >
                <RotateCcw size={14} />
                Repetir test
              </button>
            </div>

            <p className="test-note">
              Resultado orientativo. No constituye un diagnóstico.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>

      <section className="test-wellness-page">

        <button
          className="test-back"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft size={16} />
          Volver a Mente360
        </button>

        <div className="test-header compact">

          <div className="test-header-icon">
            🧠
          </div>

          <div>

            <h1>
              Test de bienestar
            </h1>

            <p>
              Conoce cómo te encuentras en
              diferentes áreas. No es un
              diagnóstico, solo una guía.
            </p>

          </div>

        </div>

        <div className="test-progress-top">

          <span>
            {answered === 0
              ? "Comienza tu test"
              : `${answered} de ${totalQuestions} respondidas`}
          </span>

          <b>
            {Math.round(
              (answered /
                totalQuestions) *
                100
            )}
            %
          </b>

        </div>

        <div className="test-area-list">

          {results.map(
            (area, index) => (
              <button
                key={area.key}
                type="button"
                className="test-area-row"
                onClick={() =>
                  startArea(index)
                }
              >

                <span
                  className="test-area-icon"
                  style={{
                    background: `${area.color}25`,
                    color: area.color,
                  }}
                >
                  {area.icon}
                </span>

                <span className="test-area-main">

                  <span className="test-area-title">
                    {area.key}
                  </span>

                  <span className="test-bar">

                    <span
                      style={{
                        width: `${area.percent}%`,
                        background:
                          area.color,
                      }}
                    />

                  </span>

                </span>

                <span className="test-score">
                  {area.score10}/10
                </span>

              </button>
            )
          )}

        </div>

        <div className="test-actions">

          {answered ===
            totalQuestions && (
            <button
              type="button"
              className="test-primary"
              onClick={finishTest}
            >
              Ver mi resultado
              <ChevronRight size={17} />
            </button>
          )}

          {answered <
            totalQuestions && (
            <button
              type="button"
              className="test-primary"
              onClick={() => {
                const first =
                  areas.findIndex(
                    (area) =>
                      area.questions.some(
                        (_, index) =>
                          !answers[
                            `${area.key}-${index}`
                          ]
                      )
                  );

                if (first >= 0) {
                  startArea(first);
                }
              }}
            >
              {answered === 0
                ? "Comenzar test"
                : "Continuar test"}

              <ChevronRight size={17} />
            </button>
          )}

          {(finished ||
            savedResult) && (
            <button
              type="button"
              className="test-secondary"
              onClick={resetTest}
            >
              <RotateCcw size={16} />
              Repetir test
            </button>
          )}

        </div>

        <button
          type="button"
          className="test-map-button"
          onClick={() => {
            if (
              typeof onMap ===
              "function"
            ) {
              onMap();
            }
          }}
        >
          Ver mapa de bienestar
        </button>

        <p className="test-note">
          Tus resultados son orientativos y
          se relacionan con los recursos y
          subcategorías de Mente360.
        </p>

      </section>
    </>
  );
}