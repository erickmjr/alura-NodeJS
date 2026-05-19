import autor from '../models/autor.js';

class autorController {

    static async listarAutores (req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao consultar autores` });
        };
    };  

    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;

            const autor = await autor.findById(id);
            res.status(200).json(autor);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao listar autor por Id` });
        };
    };

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);

            res.status(201).json({ message: 'criado com sucesso', autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        };
    };

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;

            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json(autor);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar autor` });
        };
    };

    static async excluirAutor (req, res) {
        try{ 
            const id = req.params.id;

            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: 'Autor deletado com sucesso' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        };
    };

};

export default autorController;