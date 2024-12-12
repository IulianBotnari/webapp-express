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
const addreview = ("/post", (req, res) => {
    const { movie_id, name, vote, text } = req.body

    if (!movie_id || !name || !vote || !text) {
        return res.status(400).json('I campi sono obbligatori')
    }

    const postQuery = 'INSERT INTO `films_db`.`reviews` (`movie_id`, `name`, `vote`, `text`) VALUES (?, ?, ?, ?)'

    connection.query(postQuery, [movie_id, name, vote, text], (err, postedReview) => {
        console.log(postedReview);


        if (err) {
            console.error('Errore:', err)
            return res.status(500).json('Errore nel insermento')
        }

        res.status(200).json('Recensione aggiunta con successo!!')

    })



})









module.exports = {
    index,
    show,
    addreview
}