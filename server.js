import app from './src/app.js';

const server = app.listen(3055, () => {
    console.log('Server is running on port 3055');
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed');
    });
});