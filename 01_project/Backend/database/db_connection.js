import mongoose from "mongoose";

export const db_connection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Dilesh-Restaurant",
    })
        .then(() => {
            console.log("Woow !!!!!!!!! Connected to database");
        })
        .catch((err) => {
            console.log(`Error occured while connecing to database : ${err}`);
        });
};

