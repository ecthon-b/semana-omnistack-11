const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
// importas minhas rotas min 34:03
const routes = require('./routes');

const app = express();

app.use(cors());
// Informar pro nosso app que estaremos usando json para as requisições
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
/**
 * Métodos HTTP: - 2º dia
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-and
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros - 2º dia
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) - min 16:00
 * Route Params: Parâmetros utilizados para identificar recursos - min 17:06
 * Resquest Body: Corpo da requisação, utilizado para criar ou alterar recursos min 20:42
 */

/**
 * Banco de Dados - min 28:25
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB e etc.
 */

/**
 * Comunicação com oBD
 * 
 * Driver: SELECT * FROM users (usando plugin do banco)
 * Query Builder: table('users').select('*').where() (no Javascript)
 */