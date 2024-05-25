const mongoose = require("mongoose")
mongoose.set('strictQuery', false);


const AuthDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo AuthDB Connected")
    }
    catch(err) {
        console.log("Mongo DB NOT Connected: ")
        process.exit(1)
    }
}

module.exports = AuthDB