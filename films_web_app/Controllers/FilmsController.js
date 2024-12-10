const connection = require('../DB/films_db.js')

const index = ('/', (req, res) => {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, films) => {
        if (err) return res.status(404)

        res.json(films)
    })

})


const show = ('/:id', (req, res) => {

    const sql = 'SELECT * FROM movies WHERE id =?'
    const id = req.params.id

    connection.query(sql, [id], (err, filmById) => {
        if (err) return res.status(404)

        res.json(filmById[0])
    })

})
module.exports = {
    index,
    show
}