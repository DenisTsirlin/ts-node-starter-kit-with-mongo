import { DeleteResult, InsertOneResult, MongoClient, UpdateResult } from "mongodb";
import { Vehicle } from "./vehicle.type";

const DB_INFO = {
    host: process.env.CONNECTION_STRING as string,
    db: process.env.DB_NAME,
    collection: 'Vehicle'
};

export async function GetVehicles(query = {}, projection = {}) {
    const mongo = new MongoClient(DB_INFO.host);
    try {
        await mongo.connect();
        return await mongo.db(DB_INFO.db).collection(DB_INFO.collection).find(query, { projection }).toArray();
    } catch (error) {
        throw error;
    } finally {
        await mongo.close(); // Ensure proper closure
    }
}

export async function GetVehicleByCarNumber(carNumber: string) {
    const mongo = new MongoClient(DB_INFO.host);
    try {
        await mongo.connect();
        // לחפש גם בתוך מערך vehicles
        const vehicle = await mongo.db(DB_INFO.db).collection(DB_INFO.collection).findOne({ Car_Number: carNumber }) ||
            await mongo.db(DB_INFO.db).collection(DB_INFO.collection).findOne({ 'vehicles.Car_Number': carNumber });

        if (vehicle && vehicle.vehicles) {
            // אם הרכב נמצא בתוך מערך vehicles, נשלוף אותו מהמארך
            return vehicle.vehicles.find((v: Vehicle) => v.Car_Number === carNumber);
        }

        return vehicle;
    } catch (error) {
        throw error;
    } finally {
        await mongo.close();
    }
}

export async function insertVehicle(vehicle: Vehicle): Promise<InsertOneResult<Vehicle>> {
    const mongo = new MongoClient(DB_INFO.host);
    try {
        await mongo.connect();
        return await mongo.db(DB_INFO.db).collection(DB_INFO.collection).insertOne(vehicle);
    } catch (error) {
        throw error;
    } finally {
        await mongo.close();
    }
}

export async function updateVehicle(carNumber: string, updates: Partial<Vehicle>): Promise<UpdateResult> {
    const mongo = new MongoClient(DB_INFO.host);
    try {
        await mongo.connect();
        return await mongo.db(DB_INFO.db).collection(DB_INFO.collection).updateOne(
            { Car_Number: carNumber },
            { $set: updates }
        );
    } catch (error) {
        throw error;
    } finally {
        await mongo.close();
    }
}

export async function deleteVehicle(carNumber: string): Promise<DeleteResult> {
    const mongo = new MongoClient(DB_INFO.host);
    try {
        await mongo.connect();
        return await mongo.db(DB_INFO.db).collection(DB_INFO.collection).deleteOne({ Car_Number: carNumber });
    } catch (error) {
        throw error;
    } finally {
        await mongo.close();
    }
}