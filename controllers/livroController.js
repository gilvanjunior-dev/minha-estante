import {
    carregaLivros,
    adicionarLivro,
    alterarStatus as alterarStatusModel,
    removerLivro
} from "../models/livroModel.js";

export function listar(req, res) {
    const livros = carregaLivros();

    res.render("principal", { livros });
}

export function formNovo(req, res) {
    res.render("novoLivro");
}

export function criar(req, res) {
    const novoLivro = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        paginas: req.body.paginas,
        status: "Lendo"
    };

    adicionarLivro(novoLivro);

    res.redirect("/livros");
}

export function alterarStatus(req, res) {
    const indice = req.params.indice;

    alterarStatusModel(indice);

    res.redirect("/livros");
}

export function remover(req, res) {
    const indice = req.params.indice;

    removerLivro(indice);

    res.redirect("/livros");
}