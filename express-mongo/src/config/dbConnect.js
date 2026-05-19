import mongoose from "mongoose";

async function conectaBD() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conectaBD;



