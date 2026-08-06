/* Pre-visualizacoes visuais do painel de edicao - Tiao Medeiros */
var BLUE_DEEP = "#0f2350";
var BLUE = "#274994";
var YELLOW = "#f9da49";
var INK_SOFT = "#48566f";
var PAPER = "#f6f8fc";

var wrapStyle = {
  fontFamily: "'Libre Franklin', Arial, sans-serif",
  padding: "28px",
  background: PAPER,
  minHeight: "100%",
  boxSizing: "border-box"
};

function eyebrow(text) {
  return h("div", {
    style: {
      fontFamily: "'Barlow Condensed', Arial, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      fontSize: "13px",
      color: BLUE,
      marginBottom: "10px"
    }
  }, text);
}

function photoBox(url, label) {
  return h("div", {
    style: {
      width: "100%",
      minHeight: "220px",
      borderRadius: "16px",
      background: url ? ("url(" + url + ") center/cover no-repeat") : ("linear-gradient(160deg, " + BLUE + ", " + BLUE_DEEP + ")"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255,255,255,0.7)",
      fontSize: "13px",
      marginBottom: "18px"
    }
  }, url ? null : (label || "Sem foto ainda"));
}

// ---------- HERO ----------
CMS.registerPreviewTemplate("hero", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    return h("div", { style: wrapStyle },
      h("div", { style: { maxWidth: "760px" } },
        eyebrow(e.eyebrow || ""),
        h("h1", { style: { color: BLUE_DEEP, fontSize: "34px", fontWeight: 800, lineHeight: 1.15, marginBottom: "16px" }, dangerouslySetInnerHTML: { __html: e.title_html || "" } }),
        h("p", { style: { color: INK_SOFT, fontSize: "16px", lineHeight: 1.6, marginBottom: "18px" } }, e.lead || ""),
        h("div", { style: { display: "flex", gap: "10px", marginBottom: "24px" } },
          h("span", { style: { background: YELLOW, color: BLUE_DEEP, fontWeight: 700, padding: "10px 20px", borderRadius: "999px", fontSize: "14px" } }, e.cta_primary_label || ""),
          h("span", { style: { border: "2px solid " + BLUE, color: BLUE, fontWeight: 700, padding: "10px 20px", borderRadius: "999px", fontSize: "14px" } }, e.cta_secondary_label || "")
        ),
        photoBox(e.photo, "Foto principal - a inserir"),
        h("div", { style: { color: INK_SOFT, fontSize: "13px" } }, (e.trust_text || "") + " - " + (e.trust_strong || ""))
      )
    );
  }
}));

// ---------- ABOUT ----------
CMS.registerPreviewTemplate("about", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    var paragraphs = e.paragraphs || [];
    var badges = e.badges || [];
    return h("div", { style: wrapStyle },
      h("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "26px", maxWidth: "900px" } },
        h("div", null, photoBox(e.photo, e.photo_tag || "Foto - a inserir")),
        h("div", null,
          eyebrow(e.eyebrow || ""),
          h("h2", { style: { color: BLUE_DEEP, fontSize: "24px", fontWeight: 800, marginBottom: "14px" } }, e.title || ""),
          paragraphs.map(function (p, i) {
            return h("p", { key: i, style: { color: INK_SOFT, fontSize: "14.5px", lineHeight: 1.7, marginBottom: "10px" } }, p);
          }),
          h("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" } },
            badges.map(function (b, i) {
              return h("span", { key: i, style: { border: "1px solid #ccc", color: BLUE, borderRadius: "999px", padding: "6px 14px", fontSize: "12.5px", fontWeight: 600 } }, b);
            })
          )
        )
      )
    );
  }
}));

// ---------- RECONHECIMENTO ----------
CMS.registerPreviewTemplate("reconhecimento", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    return h("div", { style: wrapStyle },
      h("div", {
        style: {
          background: "linear-gradient(160deg, " + BLUE_DEEP + ", " + BLUE + ")",
          borderRadius: "24px", padding: "36px", display: "flex", gap: "30px", alignItems: "center", maxWidth: "720px", color: "#fff"
        }
      },
        h("div", {
          style: {
            width: "100px", height: "100px", borderRadius: "50%", background: YELLOW, flex: "none",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: BLUE_DEEP
          }
        },
          h("span", { style: { fontSize: "24px", fontWeight: 800 } }, e.medal_big || ""),
          h("span", { style: { fontSize: "9px", fontWeight: 700 } }, e.medal_small || "")
        ),
        h("div", null,
          h("h2", { style: { fontSize: "20px", fontWeight: 800, marginBottom: "10px" } }, e.title || ""),
          h("p", { style: { fontSize: "14px", lineHeight: 1.6, opacity: 0.9 } }, e.text || "")
        )
      )
    );
  }
}));

// ---------- VIDEO ----------
CMS.registerPreviewTemplate("video", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    return h("div", { style: wrapStyle },
      h("div", {
        style: {
          maxWidth: "560px", aspectRatio: "16/9", borderRadius: "18px",
          background: "linear-gradient(160deg, " + BLUE + ", " + BLUE_DEEP + ")",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", gap: "10px"
        }
      },
        h("div", { style: { width: "60px", height: "60px", borderRadius: "50%", background: YELLOW, display: "flex", alignItems: "center", justifyContent: "center", color: BLUE_DEEP, fontSize: "20px" } }, "PLAY"),
        h("span", { style: { fontSize: "13px", opacity: 0.85 } }, e.youtube_id ? ("Video: " + e.youtube_id) : (e.placeholder_text || ""))
      )
    );
  }
}));

// ---------- FOOTER ----------
CMS.registerPreviewTemplate("footer", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    return h("div", { style: wrapStyle },
      h("div", { style: { background: BLUE_DEEP, color: "#fff", borderRadius: "18px", padding: "26px", maxWidth: "560px" } },
        h("p", { style: { fontSize: "13.5px", lineHeight: 1.6, opacity: 0.85, marginBottom: "16px" } }, e.about_text || ""),
        h("div", { style: { fontSize: "13px", lineHeight: 2, opacity: 0.9 } },
          h("div", null, "Endereco: " + (e.endereco || "")),
          h("div", null, "Telefone: " + (e.telefone || "")),
          h("div", null, "E-mail: " + (e.email || "")),
        ),
        h("div", { style: { fontSize: "11.5px", opacity: 0.6, marginTop: "16px" } }, (e.copyright || "") + " - " + (e.cargo_line || ""))
      )
    );
  }
}));

// ---------- PAUTAS (lista) ----------
CMS.registerPreviewTemplate("pautas", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    var items = e.pautas || [];
    return h("div", { style: wrapStyle },
      eyebrow("Pautas e Valores"),
      h("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "760px" } },
        items.map(function (p, i) {
          return h("div", { key: i, style: { background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 8px 20px rgba(15,35,80,0.07)" } },
            h("div", { style: { width: "38px", height: "38px", borderRadius: "10px", background: BLUE, marginBottom: "12px" } }),
            h("h3", { style: { fontSize: "15px", fontWeight: 700, color: BLUE_DEEP, marginBottom: "6px" } }, p.title || ""),
            h("p", { style: { fontSize: "13px", color: INK_SOFT, lineHeight: 1.5 } }, p.summary || "")
          );
        })
      )
    );
  }
}));

// ---------- TRAJETORIA (lista) ----------
CMS.registerPreviewTemplate("timeline", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    var items = e.timeline || [];
    return h("div", { style: wrapStyle },
      eyebrow("Trajetoria"),
      h("div", { style: { display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "10px" } },
        items.map(function (t, i) {
          return h("div", {
            key: i, style: {
              flex: "0 0 160px", borderRadius: "14px", overflow: "hidden",
              background: t.photo ? ("url(" + t.photo + ") center/cover no-repeat") : ("linear-gradient(160deg, " + BLUE + ", " + BLUE_DEEP + ")"),
              height: "200px", display: "flex", alignItems: "flex-end", padding: "12px", boxSizing: "border-box"
            }
          },
            h("div", { style: { color: "#fff" } },
              h("div", { style: { fontSize: "11px", color: YELLOW, fontWeight: 700 } }, t.num || ""),
              h("div", { style: { fontSize: "13px", fontWeight: 700, lineHeight: 1.25 } }, t.title || "")
            )
          );
        })
      )
    );
  }
}));

// ---------- PROJETOS (lista) ----------
CMS.registerPreviewTemplate("projetos", createClass({
  render: function () {
    var e = this.props.entry.get("data").toJS();
    var items = e.projetos || [];
    return h("div", { style: wrapStyle },
      eyebrow("Projetos Legislativos"),
      h("div", { style: { display: "grid", gap: "12px", maxWidth: "700px" } },
        items.map(function (p, i) {
          return h("div", { key: i, style: { background: "#fff", borderRadius: "14px", padding: "18px", boxShadow: "0 8px 20px rgba(15,35,80,0.07)" } },
            h("div", { style: { display: "flex", gap: "8px", marginBottom: "8px" } },
              h("span", { style: { background: BLUE, color: "#fff", fontWeight: 700, fontSize: "12px", padding: "4px 10px", borderRadius: "6px" } }, p.tag || ""),
              p.relator ? h("span", { style: { background: YELLOW, color: BLUE_DEEP, fontWeight: 700, fontSize: "11px", padding: "4px 10px", borderRadius: "6px" } }, "Relator") : null
            ),
            h("h3", { style: { fontSize: "15px", fontWeight: 700, color: BLUE_DEEP, marginBottom: "6px" } }, p.title || ""),
            h("p", { style: { fontSize: "13px", color: INK_SOFT, lineHeight: 1.5 } }, p.body || "")
          );
        })
      )
    );
  }
}));
