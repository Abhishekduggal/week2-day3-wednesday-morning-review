const express = require("express");
const { json } = require("body-parser");
const app = express();
const port = 3030;

const controller = require("./controller");

app.use(json());

app.get("/api/getPokemon", controller.getPokemon);
app.post("/api/makePokemonWithBody", controller.makePokemonWithBody);
app.post("/api/makePokemonWithQuery", controller.makePokemonWithQuery);
app.put(
  "/api/editPokemonNameWithParamsAndBody/:index",
  controller.editPokemonNameWithParamsAndBody
);
app.put(
  "/api/editPokemonNameWithJustBody",
  controller.editPokemonNameWithJustBody
);
app.delete(
  "/api/deletePokemonWithJustQuery",
  controller.deletePokemonWithJustQuery
);
app.delete(
  "/api/deletePokemonWithJustParams/:index",
  controller.deletePokemonWithJustParams
);

app.listen(port, () => {
  return console.log(`Port running on: ${port}`);
});
