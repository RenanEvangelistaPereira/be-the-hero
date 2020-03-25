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
		
	}

};