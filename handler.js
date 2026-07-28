module.exports = async (sock, m) => {
    try {
        console.log("New Message:", m?.message)
    } catch (e) {
        console.log(e)
    }
}
