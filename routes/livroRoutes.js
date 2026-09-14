import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Página dos meus livros");
});

router.get("/novo", (req, res) => {
    res.send("Página para cadastrar livro");
});

export default router;