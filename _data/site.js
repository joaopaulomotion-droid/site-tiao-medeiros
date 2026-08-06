const meta = require("./meta.json");
const hero = require("./hero.json");
const about = require("./about.json");
const reconhecimento = require("./reconhecimento.json");
const video = require("./video.json");
const footer = require("./footer.json");

module.exports = () => ({
  meta,
  hero,
  about,
  reconhecimento,
  video,
  footer,
});
