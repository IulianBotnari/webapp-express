const connection = require('../DB/films_db.js')

const index = ('/', (req, res) => {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, films) => {
        if (err) return res.status(404)

        res.json(films)
    })

})


module.exports = index