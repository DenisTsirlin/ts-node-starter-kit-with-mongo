import { Request, Response } from 'express';
import {  addNewVehicle, getAll, getByCarNumber, removeVehicle, updateVehicleDetails,   } from './vehicle.model';
import { Vehicle } from './vehicle.type';

export async function getAllVehicles(req: Request, res: Response) {
    try {
        const vehicles = await getAll();
        console.log("Vehicles data:", vehicles); // Log the data
        res.status(200).json({ vehicles });
    } catch (error) {
        console.error("Error getting all vehicles:", error);
        res.status(500).json({ error });
    }
}

export async function getVehicleByCarNumber(req: Request, res: Response) {
    const { carNumber } = req.params;
    try {
        const vehicle = await getByCarNumber(carNumber);
        if (vehicle) {
            res.status(200).json({ vehicle });
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (error) {
        console.error("Error getting vehicle by Car Number:", error);
        res.status(500).json({ error });
    }
}

export async function addVehicle(req: Request, res: Response) {
    const newVehicle: Vehicle = req.body;
    try {
        const result = await addNewVehicle(newVehicle);
        res.status(201).json({ message: 'Vehicle added successfully', result });
    } catch (error) {
        console.error("Error adding vehicle:", error);
        res.status(500).json({ error });
    }
}


export async function updateVehicle(req: Request, res: Response) {
    const { carNumber } = req.params;
    const updates = req.body;

    // Validate that only allowed fields are updated
    const allowedUpdates = ['Color', 'Customer_Id', 'Insurance_Expiration', 'Number_Of_Kilometers'];
    const keys = Object.keys(updates);
    const isValidUpdate = keys.every(key => allowedUpdates.includes(key));

    if (!isValidUpdate) {
        return res.status(400).json({ message: 'Invalid updates!' });
    }

    try {
        const result = await updateVehicleDetails(carNumber, updates);
        if (result.matchedCount > 0) {
            res.status(200).json({ message: 'Vehicle updated successfully', result });
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (error) {
        console.error("Error updating vehicle:", error);
        res.status(500).json({ error });
    }
}

export async function deleteVehicle(req: Request, res: Response) {
    const { carNumber } = req.params;
    try {
        const result = await removeVehicle(carNumber);
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Vehicle deleted successfully' });
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (error) {
        console.error("Error deleting vehicle:", error);
        res.status(500).json({ error });
    }
}