import { GetVehicles, GetVehicleByCarNumber, insertVehicle, updateVehicle, deleteVehicle,  } from "./vehicle.db";
import { Vehicle } from "./vehicle.type";


export async function getAll() {
    return await GetVehicles();
}

export async function getByCarNumber(carNumber: string) {
    return await GetVehicleByCarNumber(carNumber);
}

export async function addNewVehicle(vehicle: Vehicle) {
    return await insertVehicle(vehicle);
}

export async function updateVehicleDetails(carNumber: string, updates: Partial<Vehicle>) {
    return await updateVehicle(carNumber, updates);
}

export async function removeVehicle(carNumber: string) {
    return await deleteVehicle(carNumber);
}