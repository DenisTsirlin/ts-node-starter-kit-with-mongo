import 'dotenv/config'; // apply env vars
import express from 'express';
import VehicleRouter from './vehicle/vehicle.routes';


//config
//process.env.PORT --> the live server port
const PORT = process.env.PORT || 9877; 

//create the server
const server = express();

//config JSON support
server.use(express.json());

//using routes
server.use('/api/vehicle', VehicleRouter);

//run the server
server.listen(PORT, () => console.log(`[Server] http://localhost:${PORT}`));