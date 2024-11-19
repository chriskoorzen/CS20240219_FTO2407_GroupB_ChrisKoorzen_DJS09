import { LoyaltyUser } from "enums";


export type Price = 45 | 30 | 25 | 50

export type Country = 'Colombia' | 'Poland' | 'United Kingdom' | 'South Africa'

export type Review = {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}