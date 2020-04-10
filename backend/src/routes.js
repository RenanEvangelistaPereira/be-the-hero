const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//const connection = require('./database/connection');

const routes = express.Router();


routes.get('/', (request, response) => {
	return response.send('Api da Aplicação Be The Hero. Contato: https://github.com/RenanEvangelistaPereira/be-the-hero. <!-- Retorno texto -->');
});

routes.get('/json', (request, response) => {
	return response.json({ 
		evento:'Semana OminiStack 11',
		aluno:'Renan Evangelista Pereira',
		tipo: 'JSON',
		RequestHeaders: request.headers,
		RequestHostname: request.hostname,
		RequestUrl: request.url,
		RequestIps: request.ips
	});
});

routes.post('/users/:id', (request, response) => {
	return response.json({ 
		evento:'Semana OminiStack 11',
		aluno:'Renan Evangelista Pereira',
		tipo: 'JSON',
		call: 'request.params',
		sample: '/users/:id'
	});
});

routes.post('/usersQueryParams', (request, response) => {
	const params = request.query;
	//console.log(params);
	return response.json({ 
		evento:'Semana OminiStack 11',
		aluno:'Renan Evangelista Pereira',
		tipo: 'JSON',
		call: 'request.query',
		sample: '/usersQueryParams',
		coll: params
	});
});

routes.post('/usersRouteParams/:id', (request, response) => {
	const params = request.params;
	//console.log(params);
	return response.json({ 
		evento:'Semana OminiStack 11',
		aluno:'Renan Evangelista Pereira',
		tipo: 'JSON',
		call: 'request.params',
		sample: '/usersRouteParams/:id'
	});
});

routes.post('/usersRouteParams/:id/:nome', (request, response) => {
	const params = request.params;
	//console.log(params);
	return response.json({ 
		evento:'Semana OminiStack 11',
		aluno:'Renan Evangelista Pereira',
		tipo: 'JSON',
		call: 'request.params',
		sample: '/usersRouteParams/:id/:nome',
		coll: params
	});
});



routes.post('/usersBodyParams', (request, response) => {
	const params = request.body;
	//console.log(params);
	return response.json({ 
		evento:'Semana OminiStack 11',
		aluno:'Renan Evangelista Pereira',
		tipo: 'JSON',
		call: 'request.params',
		sample: '/usersBodyParams',
		coll: params
	});
});

/*
Cadastros


routes.post('/ongs', async (request, response) => {
	const {name, email, whatsapp, city, uf}  = request.body;
	///console.log(data);
	const id = crypto.randomBytes(4).toString('HEX');
		
	await connection('ongs').insert({
		id, name, email, whatsapp, city, uf
	});	
	
	return response.json({ id });
});

*/

/*
Listagens

routes.get('/ongs', async (request, response) => {
	const ongs = await connection('ongs').select('*');	
	
	return response.json(ongs);
});


*/

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(15),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2),
	})
}), OngController.create);

routes.post('/ongs/update/:id', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(15),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2),
	}),
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.string().required().min(8).max(8),
	})
}), OngController.update);


routes.get('/incidents', celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number().integer().required(),
	})
}) , IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	})
}) , IncidentController.delete);

routes.get('/profiles', celebrate({
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required(),
	}).unknown()
}), ProfileController.index);	

routes.post('/sessions', SessionController.create);
	
module.exports = routes;
	