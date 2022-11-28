module.exports = (io) => {
    process.on('newTransaction', (id) => {
        io.emit('newTransaction', id)
    })
}