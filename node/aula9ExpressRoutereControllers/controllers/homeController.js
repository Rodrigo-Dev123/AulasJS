exports.paginaInicial = (req, res) => {
    res.send('<form action"/" method="POST"> Nome do cliente: <input type="text" name="nome">Segundo Nome: <input type="text" name="nome"><button>Enviar formulário</button></form>');
};