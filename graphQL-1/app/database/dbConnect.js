const mongoose = require('mongoose');


async function DB_Connect() {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('database connected')
    } catch(err){
        console.log('Db not connected')
        console.log(err)
    }
    
}

module.exports = DB_Connect