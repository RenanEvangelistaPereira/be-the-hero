const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const rotas = require('./routes');

const app = express();


// app.use(cors({
	// origin : 'http://meuapp.com';
// }));

app.use(cors());
app.use(express.json());
app.use(rotas);
app.use(errors());

app.listen(33033);

