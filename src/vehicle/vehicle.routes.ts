import { Router } from "express";
import {  addVehicle, deleteVehicle, getAllVehicles, getVehicleByCarNumber, updateVehicle,   } from "./vehicle.controller";

const VehicleRouter = Router();

VehicleRouter.get('/', getAllVehicles);
VehicleRouter.get('/:carNumber', getVehicleByCarNumber);
VehicleRouter.post('/', addVehicle); // נתיב להוספת רכב
VehicleRouter.put('/:carNumber', updateVehicle); // נתיב לעדכון רכב
VehicleRouter.delete('/:carNumber', deleteVehicle); // נתיב למחיקת רכב


export default VehicleRouter;
