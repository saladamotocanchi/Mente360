import { ArrowLeft, Wind, BellRing, PersonStanding, Lightbulb } from "lucide-react";

export default function ManejoEstres({ onBack }) {
  const tips = [
    {
      title: "Ejercicios de respiración",
      text: "Respira, relájate, vuelve a ti.",
      icon: <Wind size={22} strokeWidth={2.1} />,
      bg: "#e4f5ff",
      iconBg: "#cceeff",
      color: "#4a91b4",
    },
    {
      title: "Técnicas de relajación",
      text: "Tu momento de calma.",
      icon: <BellRing size={22} strokeWidth={2.1} />,
      bg: "#f0edff",
      iconBg: "#ded7ff",
      color: "#7666c9",
    },
    {
      title: "Pausas activas",
      text: "Muévete, despeja tu mente.",
      icon: <PersonStanding size={22} strokeWidth={2.1} />,
      bg: "#edf9f0",
      iconBg: "#d7f0dc",
      color: "#4d9964",
    },
    {
      title: "Consejos útiles",
      text: "Pequeños hábitos, grandes cambios.",
      icon: <Lightbulb size={22} strokeWidth={2.1} />,
      bg: "#fff6e5",
      iconBg: "#ffebbb",
      color: "#ad8133",
    },
  ];

  const page = {
    width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 18px 110px",
    boxSizing: "border-box",
    color: "#30345d",
  };

  const top = {
    position: "relative",
    minHeight: "105px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "12px 55px 0",
    boxSizing: "border-box",
  };

  const back = {
    position: "absolute",
    left: "0",
    top: "12px",
    width: "42px",
    height: "42px",
    display: "grid",
    placeItems: "center",
    border: "0",
    background: "transparent",
    color: "#51439d",
    cursor: "pointer",
    borderRadius: "12px",
  };

  const title = {
    margin: 0,
    textAlign: "center",
    color: "#26315f",
    fontSize: "30px",
    lineHeight: 1.05,
    fontWeight: 900,
    letterSpacing: "-0.5px",
  };

  const subtitle = {
    margin: "8px 0 0",
    textAlign: "center",
    color: "#5d6686",
    fontSize: "14px",
    lineHeight: 1.35,
    fontWeight: 700,
  };

  const illustration = {
    position: "relative",
    height: "220px",
    margin: "0 0 20px",
    overflow: "hidden",
    background: "linear-gradient(180deg, #e6f5ff 0%, #eaf7ff 68%, #f9fcff 100%)",
  };

  const cloud = {
    position: "absolute",
    left: "50%",
    top: "48px",
    transform: "translateX(-50%)",
    width: "175px",
    height: "92px",
    background: "#fff",
    border: "2.5px solid #7775ae",
    borderRadius: "48% 52% 44% 46% / 58% 52% 50% 45%",
    boxSizing: "border-box",
    boxShadow: "0 6px 12px rgba(78,87,145,.08)",
    zIndex: 2,
  };

  const cloudBubbleLeft = {
    position: "absolute",
    width: "72px",
    height: "60px",
    left: "12px",
    top: "-23px",
    background: "#fff",
    border: "2.5px solid #7775ae",
    borderBottom: 0,
    borderRadius: "50%",
    transform: "rotate(-9deg)",
  };

  const cloudBubbleRight = {
    position: "absolute",
    width: "74px",
    height: "62px",
    right: "10px",
    top: "-25px",
    background: "#fff",
    border: "2.5px solid #7775ae",
    borderBottom: 0,
    borderRadius: "50%",
    transform: "rotate(8deg)",
  };

  const eye = {
    position: "absolute",
    top: "38px",
    width: "7px",
    height: "10px",
    borderBottom: "2px solid #4c4f75",
    borderRadius: "0 0 50% 50%",
  };

  const cheek = {
    position: "absolute",
    top: "48px",
    width: "11px",
    height: "6px",
    background: "#f6b9cb",
    borderRadius: "50%",
  };

  return (
    <section style={page}>
      <div style={top}>
        <button style={back} type="button" onClick={onBack} aria-label="Volver">
          <ArrowLeft size={21} />
        </button>
        <div>
          <h1 style={title}>Manejo del estrés<br />y la ansiedad</h1>
          <p style={subtitle}>Respira, todo estará bien.</p>
        </div>
      </div>

      <div style={illustration} aria-hidden="true">
        <div style={{ position: "absolute", width: "360px", height: "105px", left: "-85px", bottom: "-62px", borderRadius: "50%", background: "#fff" }} />
        <div style={{ position: "absolute", width: "360px", height: "105px", right: "-85px", bottom: "-62px", borderRadius: "50%", background: "#fff" }} />
        <span style={{ position: "absolute", left: "31%", top: "45px", color: "#8a88c5", fontSize: "14px", zIndex: 4 }}>✦</span>
        <span style={{ position: "absolute", right: "31%", top: "25px", color: "#8a88c5", fontSize: "14px", zIndex: 4 }}>✦</span>
        <span style={{ position: "absolute", right: "36%", top: "25px", color: "#f1a8c7", fontSize: "17px", zIndex: 4 }}>♥</span>
        <span style={{ position: "absolute", left: "58%", top: "73px", color: "#f1a8c7", fontSize: "11px", zIndex: 4 }}>♥</span>

        <div style={cloud}>
          <span style={cloudBubbleLeft} />
          <span style={cloudBubbleRight} />
          <span style={{ ...eye, left: "46px", transform: "rotate(9deg)" }} />
          <span style={{ ...eye, right: "46px", transform: "rotate(-9deg)" }} />
          <span style={{ ...cheek, left: "31px" }} />
          <span style={{ ...cheek, right: "31px" }} />
          <span style={{ position: "absolute", left: "50%", top: "43px", width: "12px", height: "7px", transform: "translateX(-50%)", borderBottom: "2px solid #4c4f75", borderRadius: "0 0 50% 50%" }} />
        </div>
      </div>

      <div style={{ display: "grid", gap: "15px" }}>
        {tips.map((item) => (
          <article
            key={item.title}
            style={{
              minHeight: "78px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "10px 14px",
              boxSizing: "border-box",
              background: item.bg,
              border: "1px solid rgba(116,110,180,.13)",
              borderRadius: "15px",
              boxShadow: "0 3px 10px rgba(70,60,120,.045)",
            }}
          >
            <div
              style={{
                flex: "0 0 50px",
                width: "50px",
                height: "50px",
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                background: item.iconBg,
                color: item.color,
              }}
            >
              {item.icon}
            </div>
            <div style={{ minWidth: 0 }}>
              <h2 style={{ margin: "0 0 3px", color: "#30345d", fontSize: "15px", lineHeight: 1.18, fontWeight: 900 }}>
                {item.title}
              </h2>
              <p style={{ margin: 0, color: "#73768e", fontSize: "12px", lineHeight: 1.3, fontWeight: 700 }}>
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
