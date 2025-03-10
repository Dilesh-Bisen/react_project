import app from "./app.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Frontend URL: https://react-project-ten-kohl.vercel.app/');
});
