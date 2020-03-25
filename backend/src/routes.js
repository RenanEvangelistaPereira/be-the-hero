const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//const connection = require('./database/connection');

const routes = express.Router();


routes.get('/', (request, response) => {
	return response.send('Bla Bla');
});

routes.get('/json', (request, response) => {
	return response.json({ 
		evento:'OminiStack',
		aluno:'John Travolta'
	});
});

routes.post('/users/:id', (request, response) => {
	return response.json({ 
		evento:'OminiStack',
		aluno:'John Travolta'
	});
});

routes.post('/usersQueryParams', (request, response) => {
	const parms = request.query;
	console.log(parms);
	return response.json({ 
		evento:'OminiStack',
		aluno:'John Travolta'
	});
});

routes.post('/usersRouteParams/:id', (request, response) => {
	const params = request.params;
	console.log(params);
	return response.json({ 
		evento:'OminiStack',
		aluno:'John Travolta'
	});
});

routes.post('/usersRouteParams/:id/:nome', (request, response) => {
	const parms = request.params;
	console.log(parms);
	return response.json({ 
		evento:'OminiStack',
		aluno:'John Travolta'
	});
});



routes.post('/usersBodyParams', (request, response) => {
	const parms = request.body;
	console.log(parms);
	return response.json({ 
		evento:'Maikai',
		aluno:'John Travolta'
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
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profiles', ProfileController.index);	

routes.post('/sessions', SessionController.create);
	
module.exports = routes;
	