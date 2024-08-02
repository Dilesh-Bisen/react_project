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

// {
//     "first_name": "Dilesh",
//         "last_name": "Bisen",
//             "email": "2dileshbisen@gmail.com",
//                 "phone": "8767964378",
//                     "date": "02-03-2024",
//                         "time": "11:37 AM"
// }