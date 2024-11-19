import { LoyaltyUser } from "./enums.js"
import { GeoData } from "./interfaces.js"
import { MainProperty } from "./classes.js"

import { populateUser, showDetails, showReviewTotal, addReviews } from "./utils.js"

import { reviews, you, properties } from "./data.js"


// UI element references
const propertyContainer = document.querySelector('.properties')         // Other properties
const button = document.querySelector('button')                         // Get reviews
const mainImageContainer = document.querySelector('.main-image')        // Main property image
const footer = document.querySelector('.footer')


const currentLocation: GeoData = {                                      // Simulate user location
    city: 'London',
    time: '11:35',
    temp: 17
}


// --- Imperative page creation ---

populateUser(you.isReturning, you.firstName)        // Show logged-in "User"

footer.innerHTML = `${currentLocation.city} ${currentLocation.time} ${currentLocation.temp}°`   // Set footer

let yourMainProperty = new MainProperty(            // Create MainProperty...
    'images/italian-property.jpg', 
    'Italian House',
    [{                                              // ...with this Review object Array...
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]
)
const image = document.createElement('img')         // ...and display its image
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)

showReviewTotal(                                    // Display no. of reviews on Main property
    reviews.length,
    reviews[0].name,
    reviews[0].loyaltyUser
)

button.addEventListener(                            // Show top reviews to user on click
    'click', () => addReviews(reviews, button)      // then remove button
)

for (let i = 0; i < properties.length; i++) {       // Display other (recommended) properties
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions, card, properties[i].price)
}
