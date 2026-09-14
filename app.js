import express from "express";
import livroRoutes from "./routes/livroRoutes.js";
import { carregaLivros } from "./models/livroModel.js";

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("ENTROU NA ROTA /");

    const livros = carregaLivros();

    console.log(livros);

    res.render("index");
});

app.use("/livros", livroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});