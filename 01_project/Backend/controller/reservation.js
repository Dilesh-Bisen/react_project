import ErrorHandler from "../error/error.js";
import { reservation } from "../models/reservation_schema.js";


export const send_reservation = async (req, res, next) => {
    console.log(req.body); 
    const { first_name, last_name, email, phone, date, time } = req.body;
    if (!first_name || !last_name || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill the required details!!!", 400));
    }
    try {
        const newReservation = await reservation.create({ first_name, last_name, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully!",
            data: newReservation
        });
    } catch (error) {

        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(' , '), 400));
        }

        return next(error);
    }
};
export default send_reservation;