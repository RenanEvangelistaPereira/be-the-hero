const crypto = require('crypto');
const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
	async index(request, response){
		const ongs = await connection('ongs').select('*');	
		
		return response.json(ongs);
	},
	
	async create(request, response){
		const {name, email, whatsapp, city, uf}  = request.body;
		
		const id = generateUniqueId();

		console.log(id);
		
		await connection('ongs').insert({
			id,
			name,
			email,
			whatsapp,
			city,
			uf
		});	
		
		return response.json({ id });
	},

	async update(request, response){
		const {name, email, whatsapp, city, uf}  = request.body;
		const { id } = request.params;

		console.log(`Atualizando ${id}`);
		
		const res = await connection('ongs').where('id', id).update({
			name: name,
			email: email,
			whatsapp: whatsapp,
			city: city,
			uf: uf
		});
		
		return response.json({ res });
	}


};