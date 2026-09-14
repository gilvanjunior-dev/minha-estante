import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const arquivo = path.join(__dirname, "..", "livros.json");

export function carregaLivros() {
    try {
        const dados = fs.readFileSync(arquivo, "utf-8");
        return JSON.parse(dados);
   } catch (erro) {
    console.error(erro);
    return [];
}
}

export function salvarLivros(livros) {
    fs.writeFileSync(
        arquivo,
        JSON.stringify(livros, null, 2)
    );
}

export function adicionarLivro(novoLivro) {
    const livros = carregaLivros();

    livros.push(novoLivro);

    salvarLivros(livros);
}

export function alterarStatus(indice) {
    const livros = carregaLivros();

    if (livros[indice]) {
        livros[indice].status =
            livros[indice].status === "Lendo"
                ? "Lido"
                : "Lendo";

        salvarLivros(livros);
    }
}

export function removerLivro(indice) {
    const livros = carregaLivros();

    livros.splice(indice, 1);

    salvarLivros(livros);
}