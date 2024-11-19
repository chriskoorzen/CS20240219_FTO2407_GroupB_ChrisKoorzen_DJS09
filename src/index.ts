import { reviews, you, properties } from "./data.js"
import { populateUser, showDetails, showReviewTotal } from "./utils.js"


// UI element references
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
const button = document.querySelector('button')


// Variables
let isOpen: boolean
let authorityStatus : any


// Run
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

//Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions, card, properties[i].price)
}

//Broken code
let count = 0
function addReviews(array: {string, name, loyaltyUser}) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))


// Simulate user location
let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'


