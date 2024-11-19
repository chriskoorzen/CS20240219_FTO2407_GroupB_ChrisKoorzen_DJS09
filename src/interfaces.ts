import { LoyaltyUser } from "./enums.js"


export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}