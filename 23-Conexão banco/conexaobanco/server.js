// Importa o framework Express, usado para criar o servidor HTTP
const express = require('express');

// Importa o módulo mysql2, responsável por conectar no banco MySQL
const mysql = require('mysql2');

// Importa o módulo cors, que permite o navegador acessar o servidor (libera requisições externas)
const cors = require('cors');

// Cria uma aplicação Express (servidor)
const app = express();

// Define a porta onde o servidor vai rodar (http://localhost:3000)
const port = 3000;

// Ativa o CORS para permitir que o front-end acesse este servidor
app.use(cors());

// Permite que o servidor entenda requisições enviadas em JSON
app.use(express.json());



// -----------------------------------------
// CONFIGURAÇÃO DA CONEXÃO COM O MYSQL
// -----------------------------------------

// Cria uma conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',   // Endereço onde o MySQL está rodando (local)
  user: 'root',        // Usuário do MySQL
  password: '',        // Senha do MySQL (vazia porque WAMP geralmente usa sem senha)
  database: 'meu_banco' // Nome do banco de dados que será usado
});

// Realiza a conexão com o MySQL
connection.connect((err) => {
  // Se der erro, mostra no console e para o processo
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }

  // Se tudo der certo, mostra mensagem de sucesso
  console.log('Conectado ao MySQL!');
});



// -----------------------------------------
// ROTAS DA API
// -----------------------------------------

// Rota GET para listar todos os usuários
app.get('/usuarios', (req, res) => {

  // Comando SQL para buscar todos os registros da tabela
  const query = 'SELECT * FROM usuarios';

  // Executa o comando SQL
  connection.query(query, (err, results) => {

    // Se der erro, retorna erro no formato JSON
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Retorna a lista de usuários em formato JSON
    res.json(results);
  });
});



// Rota POST para adicionar um novo usuário
app.post('/usuarios', (req, res) => {

  // Pega do corpo da requisição os dados enviados pelo front-end
  const { nome, email } = req.body;

  // Comando SQL para inserir um novo registro
  const query = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';

  // Executa o comando SQL passando nome e email
  connection.query(query, [nome, email], (err, results) => {

    // Se der erro, retorna erro em JSON
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Retorna o usuário criado com o ID gerado
    res.json({ id: results.insertId, nome, email });
  });
});



// Rota PUT para atualizar um usuário existente
app.put('/usuarios/:id', (req, res) => {

  // Pega o ID que está na URL
  const { id } = req.params;

  // Pega os dados enviados pelo front-end
  const { nome, email } = req.body;

  // Comando SQL para atualizar o usuário
  const query = 'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?';

  // Executa o comando SQL
  connection.query(query, [nome, email, id], (err, results) => {

    // Se der erro, envia erro em JSON
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Retorna mensagem de sucesso
    res.json({ message: 'Usuário atualizado com sucesso' });
  });
});



// Rota DELETE para remover um usuário
app.delete('/usuarios/:id', (req, res) => {

  // Pega o ID da URL
  const { id } = req.params;

  // Comando SQL para deletar o usuário
  const query = 'DELETE FROM usuarios WHERE id = ?';

  // Executa o comando SQL
  connection.query(query, [id], (err, results) => {

    // Se der erro, responde com erro
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Retorna mensagem de sucesso
    res.json({ message: 'Usuário deletado com sucesso' });
  });
});



// -----------------------------------------
// INICIAR SERVIDOR
// -----------------------------------------

// Indica ao Express que o servidor deve começar a rodar na porta definida
app.listen(port, () => {

  // Mostra mensagem no console indicando que o servidor está no ar
  console.log(`Servidor rodando na porta ${port}`);
});
