const generetaUniqueId = require('../utils/generateUniqueId');
const conection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response) {
        const ongs = await conection('ongs').select('*');

        return response.json(ongs);

    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generetaUniqueId();

        //Await serve para o node aguardar o comando finalizar para seguir executando o código
        await conection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};