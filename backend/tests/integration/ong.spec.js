const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(() => {
        connection.destroy();
    });

    it('should be able to create a new ONG', async () => {

        const response = await request(app)
        .post('/ongs')
        .set('EnviandoHeader', 'Valor')
        .send({ 
            name : "Mergulhadores",
            email : "Lenhadores@gmail.com",
            whatsapp : "+5579999927576",
            city : "Barra dos Coqueiros",
            uf : "SE"
        });

        //console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        
    });
});