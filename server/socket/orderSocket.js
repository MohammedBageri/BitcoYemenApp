module.exports = (io) => {
    process.on('newOrder', (id) => {
        io.emit('newOrder', id)
    })
}