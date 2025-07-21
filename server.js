import app from './src/app.js';
import appConfig from './src/config/config.mongodb.js';

const PORT = appConfig.app.port || 3055;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed');
    });
});