const sequelize = require("sequelize")
const db = require("../database/models/index")
const {Genre} = db;//db contiene todos los modelos que ya cree,  con Genre evito db:genre
const {Op} = sequelize;
const {like, between} = Op;
//tenemos que hacer destructurin

module.exports = {
    index:  async(req, res) => {//async dice que adentro se van a ejecutar promesas
        try {//intentar
            const genres= await Genre.findAll() //espera y despues segui para adelante
            //const genresActive= await Genre.findAll({where:{active:1}}) //el where esta en el db como paramtro
            
            return res.send(genres)
        } catch (error) {
            res.send (err)
        }

        return res.send("List genres")
    },
    create: async(req, res) => {
        try {
            const genres = await Genre.findAll()
            const genreData = {
                name: "Magia",//esto seria recibido desde el form name
                ranking:genres.length +1
            }
            const genre = await Genre.create (genreData)

            return res.redirect('/')            
        } catch (error) {
            return res.send(error)
        }
    },
    update: async(req, res) => {

        try {
            const genre = await Genre.update({name:'Serie'},{where:{id:req.params.id}})//cuando queres que actualice osea con el where
            return res.redirect('/');
        } catch (error) {
            return res.send(error);
        }
    },
    delete: async(req, res) => {
        try {
            const genre = await Genre.destroy ({where:{id:req.params.id}})
            return res.redirect('/');
        } catch (error) {
            return res.send(error);
        }
        return res.send("Delete Genre")
    }
}
