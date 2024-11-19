import { Permission, LoyaltyUser } from "./enums.js"
import { Review, Property } from "./interfaces.js"


// Data Objects

export const reviews : (Review|any)[]= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said.'
    },
]

export const you: {
    firstName : string;
    lastName: string;
    permissions: Permission,
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
   firstName: 'Bobby',
   lastName: 'Brown',
   permissions: Permission.ADMIN,
   isReturning: true,
   age: 35,
   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

export const properties: Property[] = [
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Rustic Townhouse',
        price: 50,
        location: {
            firstLine: 'Stork Street 37',
            city: 'Cape Town',
            code: 8000,
            country: 'South Africa'
        },
        contact: [+27800900056341, 'johndeere@gmail.com'],
        isAvailable: true   
    },
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
]
