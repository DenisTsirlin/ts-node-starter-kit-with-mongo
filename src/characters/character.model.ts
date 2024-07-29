// import { ObjectId } from "mongodb";
// import { addCharacter, getCharacters, updateDoc } from "./character.db";
// import { Vehicle } from "./character.type";

// export async function getAll() {
//     return await getCharacters();
// }

// export async function getById(id: string) {
//     let query = { _id: new ObjectId(id) }
//     let [character] = await getCharacters(query);
//     return character;
// }

// export async function insertCharacter(Car_Number: string) {
//     let newCharacter: Vehicle = {
//         Car_Number,
//         Code_Type_Car: 0,
//         Color: "",
//         Customer_Id: 0,
//         Insurance_Expiration: undefined,
//         Manufacturer: "",
//         Number_Of_Kilometers: 0,
//         Year_of_Manufacture: 0
//     }
//     return await addCharacter(newCharacter);
// }

// export async function update(id: string, Car_Number: string) {
//     let character: Vehicle = {
//         Car_Number,
//         Code_Type_Car: 0,
//         Color: "",
//         Customer_Id: 0,
//         Insurance_Expiration: undefined,
//         Manufacturer: "",
//         Number_Of_Kilometers: 0,
//         Year_of_Manufacture: 0
//     }
//     return await updateDoc(id, character);
// }