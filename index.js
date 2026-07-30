const { connect } = require("./connection");

async function startBot() {
    try {
        await connect();
    } catch (err) {
        console.error(err);
        setTimeout(startBot, 5000);
    }
}

startBot();
