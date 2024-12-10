const NotFound = (err, req, res, next) => {
    res.status(404).json({ err: 'not found' })

}


module.exports = NotFound