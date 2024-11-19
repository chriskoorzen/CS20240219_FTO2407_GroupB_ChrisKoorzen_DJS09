
// UI element references
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')


// Variables
let isOpen: boolean


// Functionality
function showReviewTotal (value : number, reviewer: string, isLoyalty : boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = `review total ${value.toString()} | last reviewed by ${reviewer} ${iconDisplay}`
}


function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}



// Data Objects
const reviews : {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[]= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const you: {
    firstName : string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
   firstName: 'Bobby',
   lastName: 'Brown',
   isReturning: true,
   age: 35,
   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties: {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[] = [
    {
        image: 'url-to-my-image.jpg',
        title: 'Rustic Townhouse',
        price: 50000,
        location: {
            firstLine: 'Stork Street 37',
            city: 'Cape Town',
            code: 8000,
            country: 'South Africa'
        },
        contact: 'johndeere@gmail.com',
        isAvailable: true   
    },
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: 'marywinkle@gmail.com',
        isAvailable: true  
    },
    {
        image: '',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: 'garydavis@hotmail.com',
        isAvailable: false 
    },
    {
        image: '',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
]


// Run
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)