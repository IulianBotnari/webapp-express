const connection = require('../DB/films_db.js')

const index = ('/', (req, res) => {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, films) => {
        if (err) return res.status(500).json({ err: err })
        if (films.length === 0) return res.status(404).json({ err: 'books not found' })

        res.json(films)
    })


})


const show = ('/:id', (req, res) => {

    const sql = 'SELECT * FROM movies WHERE id =?'
    const sqlFilmsReview = 'SELECT * FROM reviews WHERE movie_id =?'
    const id = req.params.id

    connection.query(sql, [id], (err, filmById) => {
        if (err) return res.status(500).json({ err: err })
        if (filmById.length === 0) return res.status(404).json({ err: 'book not found' })



        connection.query(sqlFilmsReview, [id], (err, filmsReviews) => {
            if (err) return res.status(500).json({ err: err })
            if (filmsReviews.length === 0) return res.status(404).json({ err: 'review not found' })
            console.log(filmsReviews);

            const movieWithReview = {
                ...filmById[0],
                reviews: filmsReviews
            }

            res.json(movieWithReview)
        })



    })



})
module.exports = {
    index,
    show
}