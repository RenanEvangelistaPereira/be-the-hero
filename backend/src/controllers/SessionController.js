const connection = require('../database/connection');

module.exports = {
	async index(request, response){
		
		const ong_id = request.headers.authorization;
		
		if (ong_id !== undefined && ong_id != null && ong_id != '') {
			const incidents = await connection('incidents').where('ong_id', ong_id).select('*');	
			return response.json(incidents);
		}
		else {
			//console.log(ong_id);
			
			return response.status(401).json( { error: 'Operation not permitted!' } );
		}
		
	},
	async create(request, response){
		
		const { id } = request.body;
		
		console.log(id);
		
		if (id !== undefined && id != null && id != '') {
			const ong = await connection('ongs').where('id', id).select('name').first();	
			
			if(!ong){
				return response.status(400).json( { error: 'No Ong found with this ID!' } );
			}
			
			return response.json(ong);
		}
		else {
			//console.log(ong_id);
			
			return response.status(401).json( { error: 'Operation not permitted!' } );
		}
		
	}

};