
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
const reviews = [
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


const you = {
    userName: 'Bobby',
    isReturning: true,
}


// Run
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.userName)