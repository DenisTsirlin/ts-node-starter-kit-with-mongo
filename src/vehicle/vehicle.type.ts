import { ObjectId } from "mongodb"

export type Vehicle = {
    _id?: ObjectId
    Car_Number: string
    Code_Type_Car: number
    Color: string
    Customer_Id: number
    Insurance_Expiration: Date | undefined
    Manufacturer: string
    Number_Of_Kilometers:number
    Year_of_Manufacture:number
}