import { LoyaltyUser, Permission } from "./enums.js"
import { Price, Country } from "./types.js"


export interface User {
    firstName : string;
    lastName: string;
    permissions: Permission,
    isReturning: boolean;
    age: number;
    stayedAt: string[];
}


export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}


export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country
    }
    contact: [ number, string];
    isAvailable: boolean;
}